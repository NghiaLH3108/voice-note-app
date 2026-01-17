const userService = require('../services/user.service');

exports.updateTheme = async (req, res) => {
  try {
    const userId = req.user.id;
    const { theme } = req.body;

    if (!['light', 'dark', 'system'].includes(theme)) {
      return res.status(400).json({
        message: 'Invalid theme',
      });
    }

    await userService.updateTheme(userId, theme);

    return res.json({
      message: 'Theme updated successfully',
      theme,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Update theme failed',
    });
  }
};
