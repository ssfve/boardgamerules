mui.init();

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
}

function btn2_click() {
	mui.openWindow({
		url: "gameSetup.html",
		id: "setup1",
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
		url: "gameFlow.html",
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
}

function submit_pdf_info() {
	pdf_name = document.getElementById("pdf_name").value;
	crop_len = document.getElementById("crop_len").value;
	search_name = document.getElementById("search_name").value;
	rulebook_name = document.getElementById("rulebook_name").value;
	lang_name = document.getElementById("lang_name").value;
	source_name = document.getElementById("source_name").value;
	source_detail = document.getElementById("source_detail").value;
	if(pdf_name === '') {
		alert('请输入pdf_name');
		return
	}
	pdf_query_url = 'http://180.76.244.130:3000/games/savePDFInfo';
	$.ajax({
		url: pdf_query_url,
		data: {
			pdf_name: pdf_name,
			crop_len: crop_len,
			search_name: search_name,
			rulebook_name: rulebook_name,
			lang_name: lang_name,
			source_name: source_name,
			source_detail: source_detail
		},
		success: function(data) {
			console.log("savePDFInfo Success")
		}
	});
}

mui('#mainPageScroll').scroll();
mui('.mui-scroll-wrapper').scroll();