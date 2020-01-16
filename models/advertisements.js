const mongoose = require('mongoose');
const AdvertisementSchema = new mongoose.Schema(
    {
        position: {
            type: String,
            required: true
        },
        firstimage: {
            type: String
        },
        secondimage: {
            type: String
        },
        title: {
            type: String,
            minlength: 2,
            maxlength: 15
        },
        country: {
            type: String,
            minlength: 5
        },
        location: {
            type: String,
            minlength: 5
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('Advertisement', AdvertisementSchema);

