const mongoose = require('mongoose');

mongoose.connect('mongodb:mongodb://localhost:27017/imageDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./image.model');