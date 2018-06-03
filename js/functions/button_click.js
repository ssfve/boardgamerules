function btn5_click() {
	//alert('hello');
	//Page = plus.webview.getWebviewById('gameRule.html');  
    //mui.fire(Page, 'show', {
    	//id: gameid
    //});
    var url_page = "id="+gameid
    var storage = window.localStorage;
    
    var subpage_url=getSubPageUrl(gameid,1);
    console.log(subpage_url);
    
	storage.setItem("subpage_url",subpage_url);
	storage.setItem("subpage_id","jingyan1");
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