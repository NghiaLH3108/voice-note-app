const db = require('../config/db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { fullName, email, password } = req.body;

  // Check missing fields
  if (!fullName || !email || !password)
    return res.status(400).json({ message: 'Missing fields' });

  try {
    // Check email exists
    const [existingUsers] = await db.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existingUsers.length > 0) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    // Hash password
    const hash = await bcrypt.hash(password, 10);

    // Insert into database
    await db.query(
      'INSERT INTO users(full_name,email,hash_password) VALUES (?,?,?)',
      [fullName, email, hash]
    );
    res.status(201).json({ message: 'Register success' });
  } catch (error) {
    console.log("Error in register controller", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Check missing fields
  if (!email || !password)
    return res.status(400).json({ message: 'Email and password are required' });

  try {
    // Find user
    const [rows] = await db.query('SELECT * FROM users WHERE email=?', [email]);
    if (!rows.length) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const user = rows[0];
    const match = await bcrypt.compare(password, user.hash_password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Set token and response user
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
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
