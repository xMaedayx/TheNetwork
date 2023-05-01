const { Post, Member } = require('../models');

module.exports = {
  // Get all posts
  async getPosts(req, res) {
    try {
      const post = await Post.find();
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a post
  async getSinglePost(req, res) {
    try {
      const post = await Post.findOne({ _id: req.params.postId })
        .select('-__v');

      if (!post) {
        return res.status(404).json({ message: 'No post with that ID' });
      }

      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createPost(req, res) {
    try {
      const posts = await Post.create(req.body);
      res.json(posts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async deletePost(req, res) {
    try {
      const posts = await Post.findOneAndDelete({ _id: req.params.postId });

      if (!posts) {
        res.status(404).json({ message: 'No post with that ID' });
      }

      await Member.deleteMany({ _id: { $in: post.member } });
      res.json({ message: 'Comment of this member was deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updatePost(req, res) {
    try {
      const posts = await Post.findOneAndUpdate(
        { _id: req.params.postId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!posts) {
        res.status(404).json({ message: 'No post with this id!' });
      }

      res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};