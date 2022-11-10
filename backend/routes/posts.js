const express = require('express');
//const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');
const router = express.Router();

//auth,
//multer,

const postCtrl = require('../controllers/posts');

router.get('/',  postCtrl.searchAllPosts);
// router.get('/tags', auth, postCtrl.getAllTags);
router.post('/', multer, postCtrl.createPost);
router.get('/:id',  postCtrl.searchOnePost);
router.put('/:id',  multer, postCtrl.modifyPost);
router.delete('/:id',  postCtrl.deletePost);
router.post('/:id/like',  postCtrl.likePost);

module.exports = router;