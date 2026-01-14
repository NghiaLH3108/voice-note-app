const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware.js');
const upload = require('../middleware/upload.middleware.js');
const controller = require('../controllers/note.controller.js');

router.get('/', auth, controller.getNotes);
router.get('/:id', auth, controller.getNoteDetail);

router.post(
  '/',
  auth,
  upload.fields([
    { name: 'images', maxCount: 5 },
    { name: 'audios' },
  ]),
  controller.createNote
);

module.exports = router;
