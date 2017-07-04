mui.init({
	preloadPages: [{
			url: 'gameSetup.html',
			id: 'setup'
		},
		{
			url: 'gameIntro.html',
			id: 'intro'
		},
		{
			url: 'gameFlow.html',
			id: 'play'
		},
		{
			url: 'gameEnd.html',
			id: 'end'
		}
	],
	swipeBack: true //启用右滑关闭功能
});

var slider = mui("#slider");
//var btn1 = document.getElementById("button1").id;
//监听点击事件
function btn1_click() {
	mui.openWindow({
		url: "gameIntro.html",
		id: "intro",
		createNew: false,
		//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		show: {
			autoShow: true
		},
		waiting: {
			autoShow: true, //自动显示等待框，默认为true
			title: '正在加载...' //等待对话框上显示的提示内容
		}
	})
};

function btn2_click() {
	mui.openWindow({
		url: "gameRule.html",
		id: "rule",
		createNew: false,
		//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		show: {
			autoShow: true
		},
		waiting: {
			autoShow: true, //自动显示等待框，默认为true
			title: '正在加载...' //等待对话框上显示的提示内容
		}
	})
};

function btn3_click() {
};

function btn4_click() {
	mui.openWindow({
		url: "gameEnd.html",
		id: "end",
		createNew: false,
		//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		show: {
			autoShow: true
		},
		waiting: {
			autoShow: true, //自动显示等待框，默认为true
			title: '正在加载...' //等待对话框上显示的提示内容
		}
	})
};

