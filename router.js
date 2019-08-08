const express=require('express');
const pagesController=require('./controllers/pagesController');
const userController=require('./controllers/userController');
const postController=require('./controllers/postController');
const cateController=require('./controllers/cateController');
const router=express.Router();
// 后台页面
router.get('/admin',pagesController.getAdminIndexPage)
.get('/admin/categories',pagesController.getAdminCategoriesPage)
.get('/admin/comments',pagesController.getAdminCommentsPage)
.get('/admin/nav-menus',pagesController.getAdminNavMenusPage)
.get('/admin/password-reset',pagesController.getAdminPasswordResetPage)
.get('/admin/post-add',pagesController.getAdminPostAddPage)
.get('/admin/posts',pagesController.getAdminPostsPage)
.get('/admin/profile',pagesController.getAdminProfilePage)
.get('/admin/settings',pagesController.getAdminSettingsPage)
.get('/admin/slides',pagesController.getAdminSlidesPage)
.get('/admin/users',pagesController.getAdminUsersPage)
.get('/admin/login',pagesController.getAdminLoginPage)

.post('/login',userController.login)
.get('/getAllPost',postController.getAllPost)
.get('/getAllCate',cateController.getAllCate)


  // 前台页面
.get('/',pagesController.getIndexPage)
.get('/detail',pagesController.getDetailPage)
.get('/list',pagesController.getListPage)





// 业务处理路由
module.exports=router;