//const { SimplePlaceholderMapper } = require('@angular/compiler/src/i18n/serializers/serializer');
const Post = require('../models/Post');
const fs = require('fs');

//logique de création de post
exports.createPost = (req, res, next) => {
    //const postObject = JSON.parse(req.body.post);
    const postObject = req.body;
    console.log(req.body);
    // delete postObject._id;
    // delete postObject._userId;
    
    // delete postObject.tags;
    const post = new Post({
        ...postObject,
        // tags: req.body.tags.split(','),
        //userId: req.auth.userId,
        userId: '636a4d39c5bdc248b9e3737c',
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: [],
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    post.save()
        .then(() => { res.status(201).json({ message: 'Post enregistrée!' }) })
        .catch(error => { res.status(400).json({ error }) })
};

exports.modifyPost = (req, res, next) => {
    const postObject = req.file ? {
        ...JSON.parce(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    delete postObject._userId;
    delete postObject.tags;
    Post.findOne({ _id: req.params.id })
        .then((post) => {
            if (post.userId != req.auth.userId) {
                res.status(401).json({ message: 'Non-authorisé' });
            } else {
                Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id, tags: req.body.tags.split(',') })
                    .then(() => res.status(200).json({ message: 'Objet modifié!' }))
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
};

exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            if (post.userId != req.auth.userId) {
                res.status(401).json({ message: 'Non-authorisé' });
            } else {
                const filename = post.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Post.deleteOne({ _id: req.params.id })
                        .then(() => res.status(200).json({ message: 'Objet modifié!' }))
                        .catch(error => res.status(401).json({ error }));
                });
            }

        })
        .catch((error) => {
            res.status(500).json({ error })
        })
};

exports.searchOnePost = (req, res, next) => {
    Post.findOneAndUpdate({ _id: req.params.id },
        {
            $inc: { viewsCount: 1 }
        })
        .then(
            (post) => {
                res.status(200).json(post);
            }
        ).catch(
            (error) => {
                res.status(404).json({
                    error: error
                });
            }
        ).populate('user');
};

exports.searchAllPosts = (req, res, next) => {
    Post.find()
        .then(
            (posts) => {
                res.status(200).json(posts);
            }
        ).catch(
            (error) => {
                res.status(404).json({
                    error: error
                });
            }
        );
};

// exports.getAllTags = (req, res) => {
//     (Post.find().limit(5).exec()).map((obj) => obj.tags).flat().slice(0, 5)
//         .then(
//             (tags) => {
//                 res.status(200).json(tags)
//             }

//         ).catch((error) => {
//             res.status(404).json({
//                 message: "Les tags n'ont pas trouvés"
//             });
//         }
//         )
// };

// Fonction pour la gestion des "likes/dislikes"
exports.likePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            // Si l'utilisateur n'a pas encore liké ou disliké un post
            if (!post.usersDisliked.includes(req.body.userId) && !post.usersLiked.includes(req.body.userId)) {
                if (req.body.like == 1) { // L'utilisateur aime le post
                    post.usersLiked.push(req.body.userId);
                    post.likes += req.body.like;
                } else if (req.body.like == -1) { // L'utilisateur n'aime pas le post
                    post.usersDisliked.push(req.body.userId);
                    post.dislikes -= req.body.like;
                };
            };
            // Si l'utilisateur veut annuler son "like"
            if (post.usersLiked.includes(req.body.userId) && req.body.like == 0) {
                const likesUserIndex = post.usersLiked.findIndex(user => user === req.body.userId);
                post.usersLiked.splice(likesUserIndex, 1);
                post.likes -= 1;
            };
            // Si l'utilisateur veut annuler son "dislike"
            if (post.usersDisliked.includes(req.body.userId) && req.body.like == 0) {
                const likesUserIndex = post.usersDisliked.findIndex(user => user === req.body.userId);
                post.usersDisliked.splice(likesUserIndex, 1);
                post.dislikes -= 1;
            }
            post.save();
            res.status(201).json({ message: 'Like / Dislike mis à jour' });
        })
        .catch(error => res.status(500).json({ error }));
};