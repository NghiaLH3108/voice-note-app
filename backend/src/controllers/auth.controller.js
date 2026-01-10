const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: 'Missing fields' });

  const hash = await bcrypt.hash(password, 10);

  try {
    await pool.query(
      'INSERT INTO users(full_name,email,hash_password) VALUES (?,?,?)',
      [fullName, email, hash]
    );
    res.json({ message: 'Register success' });
  } catch (error) {
    console.log("Error in register controller", error);
    res.status(400).json({ message: 'Email exists' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await pool.query(
    'SELECT * FROM users WHERE email=?',
    [email]
  );

  if (!rows.length)
    return res.status(400).json({ message: 'User not found' });

  const user = rows[0];
  const match = await bcrypt.compare(password, user.hash_password);

  if (!match)
    return res.status(400).json({ message: 'Wrong password' });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({
    token,
    user: {
      id: user.id,
      fullName: user.full_name,
      email: user.email,
      avatar: user.avatar,
      theme: user.theme,
    },
  });
};
