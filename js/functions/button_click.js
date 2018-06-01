function btn5_click() {
	//alert('hello');
	//Page = plus.webview.getWebviewById('gameRule.html');  
    //mui.fire(Page, 'show', {
    	//id: gameid
    //});
    var url_page = "id="+gameid
	/*
	mui.openWindow({
	    url:"https://jingyan.baidu.com/album/7908e85ccc67f7af481ad2c2.html?picindex=2",
	    id:"setup",
	    createNew: true,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
	    styles: {
            top: '500px', //新页面顶部位置
            bottom: '1000px', //新页面底部位置
            width: '50%', //新页面宽度，默认为100%
            height: '50%'
        },
	    show:{
	      autoShow:true//页面loaded事件发生后自动显示，默认为true
	    },
	    waiting:{
	      autoShow:true,//自动显示等待框，默认为true
	      title:'正在加载...'
	    }
	})
	*/
	mui.openWindow({
		url: "gameRule.html?"+url_page,
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