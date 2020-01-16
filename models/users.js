const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 50
        },
        lastname: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 50
        },
        phonenumber: {
            type: String,
            required: true,
            unique: true,
            minlength: 2,
            maxlength: 14
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: 3
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        profile_image: {
            type: String
        }
    },{timestamps: true}
);
module.exports = ('User', userSchema);