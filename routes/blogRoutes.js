const express=require('express');
const router = express.Router();
const blogController=require('../controllers/blogController')
router.get('/blogs/create',blogController.blog_create_get)
router.delete('/blogs/:id',blogController.blog_delete)
  router.get('/blogs/:id',blogController.blog_details)
  router.post('/blogs',blogController.blog_create_post)
 
 
  router.get('/blogs',blogController.blog_index)
  module.exports = router;  