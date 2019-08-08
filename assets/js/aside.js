$(function () {
  let menuPosts=$('#menu-posts');
  let menuSettings=$('#menu-settings');

 //2获取路由名称
 let routerName = itcast.getRouterName(location.href);
 // 3.判断是否满足条件
 if (routerName == 'posts' || routerName == 'post-add' || routerName == 'categories') {
    // 4.实现展开
   menuPosts.addClass('in').attr('aria-expanded',true);
   //把箭头>变成向下的
   menuPosts.parent().find('.collapsed').removeClass('collapsed')
 }
 if (routerName == 'nav-menus' || routerName == 'slides' || routerName == 'settings') {
   menuSettings.addClass('in').attr('aria-expanded',true);
   //把箭头>变成向下的
   menuSettings.parent().find('.collapsed').removeClass('collapsed')

 }
 //5.💿高亮📀
 $('#'+routerName).addClass('active');
}) 