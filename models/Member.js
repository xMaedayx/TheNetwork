const { Schema, model } = require('mongoose');
const memberSchema = require('./Member');

// Schema to create Student model
const memberSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    members: [memberSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Member = model('member', memberSchema);

module.exports = Member;