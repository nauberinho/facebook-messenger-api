var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
    name: { type: String, required: true },
    games: { type: Array, "default": [] }
});

module.exports = mongoose.model('Game', Game);