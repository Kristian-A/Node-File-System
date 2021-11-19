const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    'name': String,
    'description': String
});

module.exports = mongoose.model('Files', fileSchema);