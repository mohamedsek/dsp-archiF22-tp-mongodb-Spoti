const mongoose = require('mongoose');
const User = require('./UserModel');
const Song = require('./SongModel');
const Schema = mongoose.Schema;

const PlayListSchema = new Schema({
    name: { type: String },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song', validate: {
        isAsync : true,
        validator: async function (v) {
            song = await Song.findById(v);
            return song !== null;
        },
        message: props => `${props.value} is not a valid song!`
    } }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', validate: {
        isAsync : true,
        validator: async function (v) {
            user = await User.findById(v);
            return user !== null;
        },
        message: props => `${props.value} is not a valid artist!`
    } }
});

const PlayList = mongoose.model('PlayList', PlayListSchema);

module.exports = PlayList;