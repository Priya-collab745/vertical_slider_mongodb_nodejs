const mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: 'This field is required.'
    },
    url: {
        type: String,
    }
});

mongoose.model('image', imageSchema);