mui('.mui-input-group').on('change', 'input', function() {
	if(this.checked) {
		offCanvasSide.classList.remove('mui-transitioning');
		offCanvasSide.setAttribute('style', '');
		classList.remove('mui-slide-in');
		classList.remove('mui-scalable');
		switch(this.value) {
			case 'main-move':
				if(moveTogether) {
					//仅主内容滑动时，侧滑菜单在off-canvas-wrap内，和主界面并列
					offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
				}
				break;
			case 'main-move-scalable':
				if(moveTogether) {
					//仅主内容滑动时，侧滑菜单在off-canvas-wrap内，和主界面并列
					offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
				}
				classList.add('mui-scalable');
				break;
			case 'menu-move':
				classList.add('mui-slide-in');
				break;
			case 'all-move':
				moveTogether = true;
				//整体滑动时，侧滑菜单在inner-wrap内
				offCanvasInner.insertBefore(offCanvasSide, offCanvasInner.firstElementChild);
				break;
		}
		offCanvasWrapper.offCanvas().refresh();
	}
});

//主界面和侧滑菜单界面均支持区域滚动；
mui('#offCanvasSideScroll').scroll();
mui('#offCanvasContentScroll').scroll();

//实现ios平台原生侧滑关闭页面；
/*if(mui.os.plus && mui.os.ios) {
	mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
		plus.webview.currentWebview().setStyle({
			'popGesture': 'none'
		});
	});
}*/

mui.init({
	preloadPages: [{
			url: '../gamerule/gameRule.html',
			id: 'rule',
			styles: {
            titleNView: {                       // 窗口的标题栏控件
		      titleText:"标题栏",                // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
		      titleColor:"#000000",             // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
		      titleSize:"17px",                 // 字体大小,默认17px
		      backgroundColor:"#F7F7F7",        // 控件背景颜色,颜色值格式为"#RRGGBB",默认值为"#F7F7F7"
		      progress:{                        // 标题栏控件的进度条样式
		        color:"#00FF00",                // 进度条颜色,默认值为"#00FF00"  
		        height:"2px"                    // 进度条高度,默认值为"2px"         
		      },
		      splitLine:{                       // 标题栏控件的底部分割线，类似borderBottom
		        color:"#CCCCCC",                // 分割线颜色,默认值为"#CCCCCC"  
		        height:"1px"                    // 分割线高度,默认值为"2px"
		      }
		    }
           }
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

mui.previewImage();



//var btn1 = document.getElementById("button1").id;
//监听点击事件
function btn1_click() {
	
	var url_page = "id="+gameid
	mui.openWindow({
		url: "gameIntro.html?"+url_page,
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
	console.log("rule button clicked");
	/*
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

function btn6_click() {
	var url_page = "id="+gameid
	mui.openWindow({
		url: "gamePic.html?"+url_page,
		id: "pic",
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

//toast_alter();
//var numRatesMea = '评分: '+average+'/10  数量: '+usersrated+'条'
document.getElementById("valueRates").addEventListener('tap', function() {
	mui.toast(numRatesMea,3500);
});
document.getElementById("numRates").addEventListener('tap', function() {
	mui.toast(numRatesMea,3500);
});

//icon2
//var yearPubMea = '出版时间: '+yearPub+'年'
document.getElementById("yearPub").addEventListener('tap', function() {
	mui.toast(yearMea,3500);
});
document.getElementById("yearsvg").addEventListener('tap', function() {
	mui.toast(yearMea,3500);
});
document.getElementById("svg2").addEventListener('tap', function() {
	mui.toast(yearMea,3500);
});

//icon3
//var weightExp = '复杂度(重度): '+weight+'/5'
document.getElementById("weight").addEventListener('tap', function() {
	mui.toast(weightExp,3500);
});
document.getElementById("weightsvg").addEventListener('tap', function() {
	mui.toast(weightExp,3500);
});
document.getElementById("svg3").addEventListener('tap', function() {
	mui.toast(weightExp,3500);
});

//icon4
//var ageMea = '适合年龄: '+age+'岁'+ageMeaPlus
document.getElementById("age").addEventListener('tap', function() {
	mui.toast(ageMea,3500);
});
document.getElementById("agesvg").addEventListener('tap', function() {
	mui.toast(ageMea,3500);
});
document.getElementById("svg4").addEventListener('tap', function() {
	mui.toast(ageMea,3500);
});

//icon5
//if (playersBest === ''){
//	var playersMea = '游戏人数: '+players+'人'
//}else{
//	var playersMea = '游戏人数[最佳人数]: '+players+playersBest+'人'
//}
document.getElementById("players").addEventListener('tap', function() {
	mui.toast(playersMea,3500);
});
document.getElementById("playerssvg").addEventListener('tap', function() {
	mui.toast(playersMea,3500);
});
document.getElementById("svg5").addEventListener('tap', function() {
	mui.toast(playersMea,3500);
});

//icon6
//var playtimeMea = '游戏时间: '+playtime.replace('’','')+'分钟'
document.getElementById("playtime").addEventListener('tap', function() {
	mui.toast(playtimeMea,3500);
});
document.getElementById("clocksvg").addEventListener('tap', function() {
	mui.toast(playtimeMea,3500);
});
document.getElementById("svg6").addEventListener('tap', function() {
	mui.toast(playtimeMea,3500);
});


/*
mui.plusReady(function(){
	console.log('rotate')
	plus.screen.lockOrientation('portrait-primary');
});
*/
//