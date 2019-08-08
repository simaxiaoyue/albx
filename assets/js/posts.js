$(function () {
  var pageNum = 1;
  var pageSize = 1;
  function init(search) {
    $.ajax({
      type: 'get',
      url: '/getAllPost',
      
      data: {
        pageNum: pageNum,
        pageSize: pageSize,
        ...search
      },
      success: function (res) {
        console.log(res);
        let html = template('postsTemp', res.data);
        $('tbody').html(html);
        setPagenation(Math.ceil(res.data.total / pageSize))
      }
    })
  }
  init();
  // 实现分页功能
  function setPagenation(total) {
    // 初始化
    $('.pagination').bootstrapPaginator({
      // 配置
      bootstrapMajorVersion: 3,
      currentPage: pageNum, // 当前页码
      totalPages: total, // 总页数
      onPageClicked: function (event, originalEvent, type, page) {
        pageNum = page
        init();
      }
    })
  }
 // 加载分类数据
 $.ajax({
  type: 'get',
  url: '/getAllCate',
  success: function (res) {
    console.log(res);
    var str = '<option value="all">所有分类</option>'
    for(var i = 0; i< res.data.length;i++){
        str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
    }
    $('.cateSelector').html(str)
  }
})

// 实现筛选功能
$('.btn-search').on('click',()=>{
let obj={
cate:$('.cateSelector').val(),
status:$('.statuSelector').val()
}
console.log(obj);
init(obj)
})
})
 