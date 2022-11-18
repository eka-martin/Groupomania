const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    tags: { type: Array, default: [] },
    imageUrl: String,
    likes: { type: Number, required: true },
    createdAt: { type: String, required: true },
    viewsCount: { type: Number, default: 0 },
    //dislikes: { type: Number, required: true },
    usersLiked: { type: [String], required: true },
    //usersDisliked: { type: [String], required: true },


});

module.exports = mongoose.model('Post', postSchema);