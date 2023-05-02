const { Schema, model } = require('mongoose');


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'Thoughts',
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: 'Friends',
    },
   
    //user: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
userSchema.virtual('friendsCount').get(function () {
  return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;