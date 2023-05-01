const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
   reactionId: {
        type: mongoose.Schema.Types.ObjectId,
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
      type: Date.now,
      required: true,
      unqiue: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      default: 'invalid email',
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

  const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;





















