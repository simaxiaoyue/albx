$(function () {
  var pageNum = 1;
  var pageSize = 2;
  function init() {
    $.ajax({
      type: 'get',
      url: '/getAllPost',
      data: {
        pageNum: pageNum,
        pageSize: pageSize
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
})