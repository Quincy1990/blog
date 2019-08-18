var isTimeOver = false;

var leftTime = function(time) {
      $('.exam-countdown').attr('etime', time).empty();
      $(".exam-tip").html("距离考试结束还有");
      count_down();
};

var count_down = function() {
      $('.exam-countdown').each(function() {
          $(this).countDown({
              etpl: '%H%' + '时' + '%M%' + '分' + '%S%' + '秒', // 还有...结束
              stpl: '%H%' + '时' + '%M%' + '分' + '%S%' + '秒', // 还有...开始
              sdtpl: '',
              otpl: '',
              otCallback: function() {
                  if (!isTimeOver) {
                        isTimeOver = true;
                        $('#exam-over-wrap').removeClass('none');
                  }
              },
              sdCallback: function(){
                  isTimeOver = false;
              }
          });
      });
};



var flagExam = setInterval(function(){
      var isHeadLoad = $('.headertop').length;
      if (isHeadLoad > 0) {
            clearInterval(flagExam);
            flagExam = null;
            $('.headertop .container').append('<div class="h-exam fl r"><li id="h-hint" class="h-hint" style="display:none;"><a>题目面板 <i class="icon-down2"></i></a></li><li id="h-user" class="h-user"><img src="/static/images/avatar/avatar01.png">你好，用户昵称</li></div>');
      }
}, 200);

var fixQCP = function() {
      var top = $('#exam-banner').height() + $('.headertop').height();
      $('.questionModal, #exam-questionProgress-wrap').css('top', top);

};
$('body').delegate('.h-hint, .questionModal', 'click', function(event) {
      if ($('.exam-part-progress').hasClass('none')) {
            $('.exam-part-progress').removeClass('none');
      } else {
            $('.exam-part-progress').addClass('none');
      }
      fixQCP();
}).delegate('#btn-introduction', 'click', function(event) {
      $('#exam-introduction').addClass('none');
      $('#exam-examing').removeClass('none');
      leftTime(new Date().getTime() + 0.03 * 60 * 60 * 1000);
      $('#h-hint').show();
}).delegate('.btn-answer-send, .exam-submit-paper-btn', 'click', function(event) {
      $('#exam-over-wrap').removeClass('none');
}).delegate('.btn-over-close', 'click', function(event) {
      window.opener=null;
      window.open('','_self');
      window.close();
});