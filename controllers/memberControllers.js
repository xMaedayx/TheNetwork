const { ObjectId } = require('mongoose').Types;
const { Member, Post } = require('../models');

// Aggregate function to get the number of students overall
const headCount = async () => {
  const numberOfMembers = await Member.aggregate()
    .count('memberCount');
  return numberOfMembers;
}

module.exports = {
  // Get all students
  async getMembers(req, res) {
    try {
      const members = await Member.find();

      const memberObj = {
        members,
        headCount: await headCount(),
      };

      res.json(memberObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single student
  async getSingleMember(req, res) {
    try {
      const members = await Member.findOne({ _id: req.params.memberId })
        .select('-__v');

      if (!members) {
        return res.status(404).json({ message: 'No member with that ID' })
      }

      res.json({
        members,
        grade: await grade(req.params.memberId),
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new member
  async createMember(req, res) {
    try {
      const members = await Member.create(req.body);
      res.json(members);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteMember(req, res) {
    try {
      const members = await Member.findOneAndRemove({ _id: req.params.memberId });

      if (!members) {
        return res.status(404).json({ message: 'No such member exists' });
      }

      const post = await Post.findOneAndUpdate(
        { members: req.params.membersId },
        { $pull: { members: req.params.memberd } },
        { new: true }
      );

      if (!post) {
        return res.status(404).json({
          message: 'no post was found with that member',
        });
      }

      res.json({ message: 'Member successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },


  async addPost(req, res) {
    console.log('Post Added');
    console.log(req.body);

    try {
      const members = await Member.findOneAndUpdate(
        { _id: req.params.memberId },
        { $addToSet: { assignments: req.body } },
        { runValidators: true, new: true }
      );

      if (!members) {
        return res
          .status(404)
          .json({ message: 'No member found with that ID :(' });
      }

      res.json(members);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove assignment from a student
  async removePost(req, res) {
    try {
      const members = await Member.findOneAndUpdate(
        { _id: req.params.memberId },
        { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
        { runValidators: true, new: true }
      );

      if (!members) {
        return res
          .status(404)
          .json({ message: 'No member found with that ID :(' });
      }

      res.json(members);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
