$(function () {
  $('.btnLogin').on('click', function () {
    let data = $("form").serialize();
    console.log(data);
    $.ajax({
      type: 'post',
      url: '/login',
      data,
      dataType:'json',
      success: function (res) {
        console.log(res);
        if(res.code == 400){
          $('.alert-danger > span').text(res.msg)
          $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
      }else{
          // 进行页面跳转
          location.href='/admin'
      }
      }
    })
  })
})