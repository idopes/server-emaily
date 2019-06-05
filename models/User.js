const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
    googleId: String
});

mongoose.model('users', usersSchema);