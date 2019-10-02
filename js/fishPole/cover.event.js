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
}

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
}