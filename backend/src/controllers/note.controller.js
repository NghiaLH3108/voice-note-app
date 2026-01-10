const pool = require('../config/db');

exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;

  const [result] = await pool.query(
    'INSERT INTO notes(user_id,title,content) VALUES (?,?,?)',
    [userId, title, content]
  );

  const noteId = result.insertId;

  if (req.files?.images) {
    for (const img of req.files.images) {
      await pool.query(
        'INSERT INTO note_images(note_id,image_url) VALUES (?,?)',
        [noteId, img.path]
      );
    }
  }

  if (req.files?.audios) {
    for (const audio of req.files.audios) {
      await pool.query(
        'INSERT INTO note_audios(note_id,audio_url) VALUES (?,?)',
        [noteId, audio.path]
      );
    }
  }

  res.json({ message: 'Note created', noteId });
};

exports.getNotes = async (req, res) => {
  const userId = req.user.id;
  const [notes] = await pool.query(
    'SELECT * FROM notes WHERE user_id=? ORDER BY created_at DESC',
    [userId]
  );
  res.json(notes);
};

exports.getNoteDetail = async (req, res) => {
  const { id } = req.params;

  const [[note]] = await pool.query(
    'SELECT * FROM notes WHERE id=?',
    [id]
  );

  const [images] = await pool.query(
    'SELECT * FROM note_images WHERE note_id=?',
    [id]
  );

  const [audios] = await pool.query(
    'SELECT * FROM note_audios WHERE note_id=?',
    [id]
  );

  res.json({ ...note, images, audios });
};
