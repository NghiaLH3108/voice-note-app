const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const upload = require('../middleware/upload.middleware');
const controller = require('../controllers/note.controller');

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
