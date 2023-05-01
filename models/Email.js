const { Schema, Types } = require('mongoose');

const emailSchema = new Schema(
  {
    emailId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    emailName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      default: 'unindentified email',
    },
  
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
const Email = model('email', emailSchema);

module.exports = Email;