const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.post('/', async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

module.exports = router;
