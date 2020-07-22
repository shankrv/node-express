const express = require('express');
const { body } = require('express-validator');

const feedCtrl = require('../controllers/feedControl');

const router = express.Router();

router.get('/posts', feedCtrl.fetchPosts);

router.post('/post', [
  body('title').trim().isLength({ min: 5 }),
  body('content').trim().isLength({ min: 5 })
], feedCtrl.createPost);

module.exports = router;
