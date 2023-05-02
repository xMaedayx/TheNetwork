const { Thought, Reaction } = require('../models');

module.exports = {
  // Get all courses
  async getThought(req, res) {
    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a course
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'NO thought found' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought found' });
      }

      await Reaction.deleteMany({ _id: { $in: thought.reaction } });
      res.json({ message: 'Course and students deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No course with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

addThought({params, body}, rest); {
  Thought.create(body)
  .then(({ _id }) => {
    return User.findOneAndUpdate(
      { _id: params.userId },
      {$push: { thoughts: _id} },
      {new: true}
    );
})
.then((dbThoughtData) => {
  if (!dbThoughtData) {
    res.status(404).json({ message: 'No user found with this id!' });
    return;
  }
  res.json(dbThoughtData);
})
.catch((err) => res.json(err));
};

addReaction({params, body}, res); {
  Thought.findOneAndUpdate(
    { _id: params.thoughtId },
    {$push: {reactions:body}},
    {new:true, RunValidators: true}
  )
  .then((dbThoughtData) => {
    if (!dbThoughtData) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }
    res.json(dbThoughtData);
  })
  .catch((err) => res.json(err));
};

removeThought({params}, res); {
  Thought.findOneAndDelete({ _id: params.thoughtId })
  .then((deletedThought) => {
    if (!deletedThought) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }

    return User.findOneAndUpdate(
      { _id: params.userId },
      {$pull: {thoughts: params.thoughtId}},
      {new: true},
    );
    })
    .then((dbThoughtData) => {
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch((err) => res.json(err));
  };


  




