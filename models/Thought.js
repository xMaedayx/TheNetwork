const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now, 
      maxlength: 50,
      minlength: 4,
      default: 'unidentified post',
    },
    username: {
      type: String,
      required: true,
      
    },
    createdAt: {
      type: Date,
      default: Date.now,
    
    },
  
    reactions: [reactionSchema],
  },
  
   { toJSON: {
      getters: true,
    },
    id: false,
  },
);
thoughtsSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

thoughtsSchema.virtual('formattedCreatedAt').get(function() {
  return this.createdAt.toLocaleDateString();
});


  const Thought = model('thought', thoughtsSchema);

module.exports = Thought;