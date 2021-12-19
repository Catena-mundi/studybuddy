const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category:{
        type: String,
        default: "Any"
    },
    location: {
        type: String,
        default: "Online"
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = Event = mongoose.model('event',EventSchema);
