var classLists = '';
for (var i = 0; i < 16; i++) classLists += classTpl;
$('.class-lists .lists-content').html(classLists);

var teacherLists = '';
for (var i = 0; i < 10; i++) teacherLists += teacherTpl;
$('.teacher-lists .lists-content').html(teacherLists);

var keywords = getQueryString('keywords');
if (keywords) $('input[name="keywords"]').val(keywords);