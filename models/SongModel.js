const mongoose = require('mongoose');
const User = require('./UserModel');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    title: { type: String },
    url: { type: String },
    rating: { type: Number },
    artist: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', validate: {
            isAsync : true,
            validator: async function (v) {
                user = await User.findById(v);
                return user.role == 1;
            },
            message: props => `${props.value} is not a valid artist!`
        }
    }
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;