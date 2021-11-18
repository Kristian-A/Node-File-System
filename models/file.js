const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    data: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Nfile = mongoose.model('Nfile', fileSchema);

module.exports = Nfile;