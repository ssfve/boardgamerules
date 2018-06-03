var storage=window.localStorage;
var subpage_url = storage.getItem("subpage_url");
console.log(subpage_url);
var subpage_id = storage.getItem("subpage_id");
console.log(subpage_id);

mui.init({
    subpages:[{
        url:subpage_url,
	    id:subpage_id,
	    styles: {
            top: '34.4px', //新页面顶部位置
       }
    }],
	swipeBack: false
});


function setScrollHeader() {
	//$('#inittitle').html(players4);
	$('#gameSetup').html(gameSetup);
	$('#gameFlow').html(gameFlow);
	$('#gameEnd').html(gameEnd);
	$('#gameOther').html(gameOther);
};
setScrollHeader(); 
mui.previewImage();

//window.addEventListener('show', function(event) {
	//alert('in')
    //gameid = event.detail.id;
    //alert(gameid)
//});
document.getElementById('gameSetup').addEventListener('tap', function(e) {
	var storage = window.localStorage;
	getSubPageUrl(gameid,1);
    console.log(subpage_url);
    
	storage.setItem("subpage_url",subpage_url);
	storage.setItem("subpage_id","1");
	
	var url_page = "id="+gameid
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
});

document.getElementById('gameFlow').addEventListener('tap', function(e) {
	var storage = window.localStorage;
	getSubPageUrl(gameid,2);
    console.log(subpage_url);
    
	storage.setItem("subpage_url",subpage_url);
	storage.setItem("subpage_id","2");
	
	var url_page = "id="+gameid
	mui.openWindow({
		url: "gameRule.html?"+url_page,
		id: "rule",
		createNew: false,
		show: {
			autoShow: true
		},
		waiting: {
			autoShow: true, //自动显示等待框，默认为true
			title: '正在加载...' //等待对话框上显示的提示内容
		}
	})
});
	
document.getElementById('gameEnd').addEventListener('tap', function(e) {
	var storage = window.localStorage;
	getSubPageUrl(gameid,3);
    console.log(subpage_url);
    
	storage.setItem("subpage_url",subpage_url);
	storage.setItem("subpage_id","3");
	
	var url_page = "id="+gameid
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
});

if (document.getElementById('gameOther') !== null){
	document.getElementById('cssgameOther').addEventListener('tap', function(e) {
	$('#gameSetup').css({'color': default_color});
	$('#gameFlow').css({'color': default_color});
	$('#gameEnd').css({'color': default_color});	
	$('#gameOther').css({'color': theme_color});
});
}



