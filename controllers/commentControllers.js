const { Comment, Member } = require('../models');

module.exports = {
  // Get all comments
  async getComments(req, res) {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a course
  async getSingleComment(req, res) {
    try {
      const comments = await Comment.findOne({ _id: req.params.commentId })
        .select('-__v');

      if (!comments) {
        return res.status(404).json({ message: 'No course with that ID' });
      }

      res.json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a course
  async createComment(req, res) {
    try {
      const comments = await Comment.create(req.body);
      res.json(comments);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a comment
  async deleteComment(req, res) {
    try {
      const comments = await Comment.findOneAndDelete({ _id: req.params.commentId });

      if (!comments) {
        res.status(404).json({ message: 'No comment with that ID' });
      }

      await Member.deleteMany({ _id: { $in: comments.member } });
      res.json({ message: 'Comment of this member was deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a comment
  async updateComment(req, res) {
    try {
      const comments = await Comment.findOneAndUpdate(
        { _id: req.params.commentId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!comments) {
        res.status(404).json({ message: 'No comment with this id!' });
      }

      res.json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
