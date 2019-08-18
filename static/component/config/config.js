var version = 'V1.0.0';
var domain_url = 'https://www.seedui.com/portal/';

var appid = '';
var share_img = '';
var share_title = '';
var share_desc = '';
var share_url = window.location.href;
var yao_avatar_size = 0;

var debug = true;
var dev = '';
// 轮播图
var carousel_data = {
	"carousel": [
		{
			"image": "/static/images/index/slider01.jpg",
			"url": "http://www.baidu.com"
		},
		{
			"image": "/static/images/index/slider02.jpg",
			"url": "http://www.baidu.com"
		},
		{
			"image": "/static/images/index/slider03.jpg",
			"url": "http://www.baidu.com"
		}
	],
	"success": "1",
	"msg": "成功"
};

// 课程热门类别
var category_data = {
	"category": [
		{
			"title": "全部课程"
		},
		{
			"title": "计算机开发",
			"subtitle": "JAVA/PHP/C++/HTML5"
		},
		{
			"title": "UI设计合集",
			"subtitle": "PS/Sketch/AI/FW"
		},
		{
			"title": "经管&会计",
			"subtitle": "最全面的经济学课程"
		},
		{
			"title": "大学先修课",
			"subtitle": "为您提供一站式学习方案"
		}
	],
	"success": "1",
	"msg": "成功"
};

// 热门课程
var hotCourse_data = {
	"hotCourse": [
		{
			"id": 0,
			"title": "BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试",
			"subtitle": "2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选",
			"teacherName": "马云",
			"studentCount": "400",
			"image": "/static/images/classcover/cover.jpg"
		},
		{
			"id": 1,
			"title": "BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试",
			"subtitle": "2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选",
			"teacherName": "马云",
			"studentCount": "400",
			"image": "/static/images/classcover/cover.jpg"
		},
		{
			"id": 2,
			"title": "BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试",
			"subtitle": "2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选",
			"teacherName": "马云",
			"studentCount": "400",
			"image": "/static/images/classcover/cover.jpg"
		},
		{
			"id": 3,
			"title": "BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试",
			"subtitle": "2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选",
			"teacherName": "马云",
			"studentCount": "400",
			"image": "/static/images/classcover/cover.jpg"
		},
		{
			"id": 4,
			"title": "BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试",
			"subtitle": "2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选",
			"teacherName": "马云",
			"studentCount": "400",
			"image": "/static/images/classcover/cover.jpg"
		},
		{
			"id": 5,
			"title": "BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试",
			"subtitle": "2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选",
			"teacherName": "马云",
			"studentCount": "400",
			"image": "/static/images/classcover/cover.jpg"
		},
		{
			"id": 6,
			"title": "BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试",
			"subtitle": "2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选",
			"teacherName": "马云",
			"studentCount": "400",
			"image": "/static/images/classcover/cover.jpg"
		},
		{
			"id": 7,
			"title": "BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试",
			"subtitle": "2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选",
			"teacherName": "马云",
			"studentCount": "400",
			"image": "/static/images/classcover/cover.jpg"
		}
	],
	"success": "1",
	"msg": "成功"
};

// 教学名师
var famousTeacher_data = {
	"famousTeacher": [
		{
			"id": 7,
			"teacherName": "李伟",
			"from": "清华大学教育技术研究所",
			"summary": "介绍教师的",
			"image": "/static/images/avatar/avatar2.jpg"
		},
		{
			"id": 7,
			"teacherName": "李伟",
			"from": "清华大学教育技术研究所",
			"summary": "介绍教师的",
			"image": "/static/images/avatar/avatar2.jpg"
		},
		{
			"id": 7,
			"teacherName": "李伟",
			"from": "清华大学教育技术研究所",
			"summary": "介绍教师的",
			"image": "/static/images/avatar/avatar2.jpg"
		},
		{
			"id": 7,
			"teacherName": "李伟",
			"from": "清华大学教育技术研究所",
			"summary": "介绍教师的",
			"image": "/static/images/avatar/avatar2.jpg"
		},
		{
			"id": 7,
			"teacherName": "李伟",
			"from": "清华大学教育技术研究所",
			"summary": "介绍教师的",
			"image": "/static/images/avatar/avatar2.jpg"
		},
		{
			"id": 7,
			"teacherName": "李伟",
			"from": "清华大学教育技术研究所",
			"summary": "介绍教师的",
			"image": "/static/images/avatar/avatar2.jpg"
		},
		{
			"id": 7,
			"teacherName": "李伟",
			"from": "清华大学教育技术研究所",
			"summary": "介绍教师的",
			"image": "/static/images/avatar/avatar2.jpg"
		},
		{
			"id": 7,
			"teacherName": "李伟",
			"from": "清华大学教育技术研究所",
			"summary": "介绍教师的",
			"image": "/static/images/avatar/avatar2.jpg"
		},
		{
			"id": 7,
			"teacherName": "李伟",
			"from": "清华大学教育技术研究所",
			"summary": "介绍教师的",
			"image": "/static/images/avatar/avatar2.jpg"
		},
		{
			"id": 7,
			"teacherName": "李伟",
			"from": "清华大学教育技术研究所",
			"summary": "介绍教师的",
			"image": "/static/images/avatar/avatar2.jpg"
		}
	],
	"success": "1",
	"msg": "成功"
};

// 热门问答
var hotQuestion_data = {
	"hotQuestion": [
		{
			"forum": "讨论板块1",
			"question": "大家好请问怎么学习"
		},
		{
			"forum": "讨论板块1",
			"question": "大家好请问怎么学习"
		},
		{
			"forum": "讨论板块1",
			"question": "大家好请问怎么学习"
		},
		{
			"forum": "讨论板块1",
			"question": "大家好请问怎么学习"
		},
		{
			"forum": "讨论板块1",
			"question": "大家好请问怎么学习"
		},
		{
			"forum": "讨论板块1",
			"question": "大家好请问怎么学习"
		}
	],
	"success": "1",
	"msg": "成功"
};

// 推荐笔记
var recommendNote_data = {
	"recommendNote": [
		{
			"tag": "精华",
			"summary": "大家好请问怎么学习"
		},
		{
			"tag": "精华",
			"summary": "大家好请问怎么学习"
		},
		{
			"tag": "精华",
			"summary": "大家好请问怎么学习"
		},
		{
			"tag": "精华",
			"summary": "大家好请问怎么学习"
		},
		{
			"tag": "精华",
			"summary": "大家好请问怎么学习"
		},
		{
			"tag": "精华",
			"summary": "大家好请问怎么学习"
		},
		{
			"tag": "精华",
			"summary": "大家好请问怎么学习"
		},
		{
			"tag": "精华",
			"summary": "大家好请问怎么学习"
		}
	],
	"success": "1",
	"msg": "成功"
};

// 讨论区列表
var topick_data = {
	"topick": [
		{
			"title": "计算机开发",
			"subtitle": "JAVA/PHP/C++/HTML5",
			"owner": "马云",
			"peopleCount": "400",
			"tags": "云计算,OpenStack,人工智能",
			"publishDate": ""
		},
		{
			"title": "计算机开发",
			"subtitle": "JAVA/PHP/C++/HTML5",
			"owner": "马云",
			"peopleCount": "400",
			"tags": "云计算,OpenStack,人工智能",
			"publishDate": ""
		}
	],
	"page": "10",
	"pageSize": "20",
	"currentPage": "1",
	"success": "1",
	"msg": "成功"
};

// 热门话题
var hotTopick_data = {
	"hotTopick": [
		{
			"forum": "讨论板块1",
			"content": "大家好请问怎么学习",
			"answerCount": "12",
			"followCount": "12"
		},
		{
			"forum": "讨论板块1",
			"content": "大家好请问怎么学习",
			"answerCount": "12",
			"followCount": "12"
		}
	],
	"success": "1",
	"msg": "成功"
};

// 话题明细及跟帖
var answers_data = {
	"answers": [
		{
			"userName": "用户昵称",
			"content": "大家好请问怎么学习",
			"time": "15分钟前",
			"adopted": "1"
		},
		{
			"userName": "用户昵称",
			"content": "大家好请问怎么学习",
			"time": "15分钟前",
			"adopted": "1"
		}
	],
	"title": "",
	"body": "",
	"page": "10",
	"pageSize": "20",
	"currentPage": "1",
	"success": "1",
	"msg": "成功"
};

// 相关问题
var linkQuestion_data = {
	"linkQuestion": [
		{
			"forum": "讨论板块1",
			"content": "大家好请问怎么学习",
			"answerCount": "12",
			"followCount": "12"
		},
		{
			"forum": "讨论板块1",
			"content": "大家好请问怎么学习",
			"answerCount": "12",
			"followCount": "12"
		}
	],
	"success": "1",
	"msg": "成功"
};