mui.init({
	preloadPages: [{
			url: '../gamerule/gameRule.html',
			id: 'rule'
		},
		{
			url: '../gameintro/gameIntro.html',
			id: 'intro'
		},
		{
			url: '../gameplay/gamePlay.html',
			id: 'play'
		},
		{
			url: '../gameexplain/gameExplain.html',
			id: 'explain'
		}
	],
	swipeBack: true //启用右滑关闭功能
});



var slider = mui("#slider");
//var btn1 = document.getElementById("button1").id;
//监听点击事件
function btn1_click() {
	mui.openWindow({
		url: "../gameintro/gameIntro.html",
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
	/*mui.openWindow({
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
	})*/
};

function btn3_click() {
	mui.openWindow({
		url: "../gameexplain/gameExplain.html",
		id: "explain",
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

function btn4_click() {
	mui.openWindow({
		url: "../gameplay/gamePlay.html",
		id: "play",
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

function btn5_click() {
	mui.openWindow({
		url: "../gamerule/gameRule.html",
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

document.getElementById("valueRates").addEventListener('tap', function() {
	mui.toast(numRatesMea,3500);
});

document.getElementById("numRates").addEventListener('tap', function() {
	mui.toast(numRatesMea,3500);
});

//icon2
document.getElementById("yearPub").addEventListener('tap', function() {
	mui.toast(yearPubMea,3500);
});
document.getElementById("yearsvg").addEventListener('tap', function() {
	mui.toast(yearPubMea,3500);
});
document.getElementById("orangesvg2").addEventListener('tap', function() {
	mui.toast(yearPubMea,3500);
});

//icon3
document.getElementById("weight").addEventListener('tap', function() {
	mui.toast(weightExp,3500);
});
document.getElementById("weightsvg").addEventListener('tap', function() {
	mui.toast(weightExp,3500);
});
document.getElementById("orangesvg3").addEventListener('tap', function() {
	mui.toast(weightExp,3500);
});

//icon4
document.getElementById("age").addEventListener('tap', function() {
	mui.toast(ageMea,3500);
});
document.getElementById("agesvg").addEventListener('tap', function() {
	mui.toast(ageMea,3500);
});
document.getElementById("orangesvg4").addEventListener('tap', function() {
	mui.toast(ageMea,3500);
});

//icon5
document.getElementById("players").addEventListener('tap', function() {
	mui.toast(playersMea,3500);
});
document.getElementById("playerssvg").addEventListener('tap', function() {
	mui.toast(playersMea,3500);
});
document.getElementById("orangesvg5").addEventListener('tap', function() {
	mui.toast(playersMea,3500);
});

//icon6
document.getElementById("playtime").addEventListener('tap', function() {
	mui.toast(playtimeMea,3500);
});
document.getElementById("clocksvg").addEventListener('tap', function() {
	mui.toast(playtimeMea,3500);
});
document.getElementById("orangesvg6").addEventListener('tap', function() {
	mui.toast(playtimeMea,3500);
});