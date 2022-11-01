const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const router = express.Router();




const postCtrl = require('../controllers/posts');

router.get('/', auth, postCtrl.searchAllPosts);
router.get('/tags', auth, postCtrl.searchAllTags);
router.post('/', auth, multer, postCtrl.createPost);
router.get('/:id', auth, postCtrl.searchOnePost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);
router.post('/:id/like', auth, postCtrl.likePost);

module.exports = router;