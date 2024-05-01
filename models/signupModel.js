const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        required: true
    },

    password: {
        type: String,
        require: true
    }
})

const signup = mongoose.model('signup',signupSchema);

module.exports = signup;