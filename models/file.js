const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Nfile = mongoose.model('file', fileSchema);

module.exports = mongoose.model('file', fileSchema);