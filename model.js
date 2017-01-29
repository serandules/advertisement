var log = require('logger')('advertisement');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var advertisement = Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    photos: [String]
});

advertisement.set('toJSON', {
    getters: true,
    //virtuals: false,
    transform: function (doc, ret, options) {
        delete ret._id;
    }
});

advertisement.virtual('id').get(function () {
    return this._id;
});

module.exports = mongoose.model('Advertisement', advertisement);