const db = require('../config/db');

exports.updateTheme = async (userId, theme) => {
  const sql = `
    UPDATE users
    SET theme = ?, updated_at = NOW()
    WHERE id = ?
  `;

  await db.execute(sql, [theme, userId]);
};
