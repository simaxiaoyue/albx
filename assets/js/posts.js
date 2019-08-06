$(function () {
  $.ajax({
    type: 'get',
    url: '/getAllPost',
    data: {
      pageNum:2,
      pageSize: 2
    },
    success: function (res) {
      console.log(res);
      let html = template('postsTemp', res);
      $('tbody').html(html)
    }
  })
})