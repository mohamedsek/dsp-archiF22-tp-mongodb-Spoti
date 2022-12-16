const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SongSchema = new Schema({
    url: { type: String },
    rating: { type: Number },
    artist: {}
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;