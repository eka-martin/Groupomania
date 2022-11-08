const express = require('express');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');
const router = express.Router();

//auth,


const postCtrl = require('../controllers/posts');

router.get('/', auth, postCtrl.searchAllPosts);
// router.get('/tags', auth, postCtrl.getAllTags);
router.post('/', multer, postCtrl.createPost);
router.get('/:id', auth, postCtrl.searchOnePost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);
router.post('/:id/like', auth, postCtrl.likePost);

module.exports = router;