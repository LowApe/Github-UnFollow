$(document).ready(function() {
  // 1~2 秒
  var seed = parseInt(Math.random() * 1000) + 500;
  //github 下最下面的 Previous
  var bt_disabled = $('.pagination span').text() === "Previous";
  //github 下最下面的 Next
  var bt_next = $('.pagination a').text() === "Next";
  //最后一页
  var pre_next_btn = $('.pagination a').length;
  //需要取消关注的按钮
  var users = $('.unfollow button');

  //ex: "?page=100&tab=following"
  //var urlPara = location.search;

  //var currentPage = location.search.match(/-?\d+\.?\d*/) ? parseInt(location.search.match(/-?\d+\.?\d*/)[0]) : 0;
  //删掉关注的按钮,只点击取消关注
  $('.follow').remove();

// 取消事件
  users.each(function(index, value) {
    let _this = $(this);
    setTimeout(function() {
      _this.trigger('click');
    }, index * seed);
  });
// 点击下一页
  setTimeout(function() {
    if (bt_disabled) {
      $('.pagination a')[0].click();
    } else if (pre_next_btn === 0){
      console.log('done......');
    } else {
      // window.location = window.location.pathname + location.search.replace(currentPage, currentPage + 1);
      $('.pagination a')[0].click();
    }
  }, users.length * seed);
});
