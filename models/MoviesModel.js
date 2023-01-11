const mongoose = require('mongoose');
const User = require('./UserModel');

const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
    title: { type: String, required: true },
    rating: { type: Number },
    year: { type: Number },
    genres: [{ type: String, required: true }],
    authors: {
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

const Movies = mongoose.model('Movies', MoviesSchema);

module.exports = Movies;