const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String
    },
    createdAt: {
        type: Date
    },
    username: {
        type: String
    },
    reactions: []
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;