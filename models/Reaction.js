const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema(
  {
   reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),

    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      default: 'unidentified user',
    },
    createdAt: {
      type: Date,
      required: true,
      unqiue: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      default: Date.now,
    }
  
    
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
reactionSchema.virtual('formattedCreatedAt').get(function() {
  return this.createdAt.toLocaleDateString();
});

  
module.exports = reactionSchema;





















