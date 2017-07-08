nameEN_mod = change_nameEN(nameEN);
var pageTitle = nameCN + nameEN_mod
$("title").html(pageTitle);

bestplayer = bestplayer.replace('-', '~');
var playersBest = '[' + bestplayer + ']';
var button1 = '主题概念';
var button2 = '>>' + pageTitle + '<<';
var button3 = '我是讲解员';
var button4 = '我是玩家';
var button5 = '规则详解';
var button6 = '浮世绘画廊';
var players = minplayer + '~' + maxplayer;
var list_line = '';
var designers_temp = ''

alternations();

$(document).ready(function() {
	valueRates_w = $('#valueRates').width();
	valueRates_h = $('#valueRates').height();
	//vertical align middle
	$('#valueRates').css({'line-height': valueRates_h + pixels});

	svg1_w = $('#svg1').width();
	svg1_h = $('#svg1').height();
	//position inner image
	yearsvg_w = $('#yearsvg').width() * cover_img_scale_factor;
	yearsvg_h = $('#yearsvg').height() * cover_img_scale_factor;
	
	left_position =(svg1_w - yearsvg_w + 16) / 2 + pixels;
	top_position =(svg1_h - yearsvg_h) / 2 + pixels;
	svg_width = yearsvg_w;
	svg_height = yearsvg_h;
	
	$('#yearsvg').css({'left': left_position});
	$('#yearsvg').css({'top': top_position});
	$('#yearsvg').css({'width': svg_width});
	$('#yearsvg').css({'height': svg_height});
	
	$('#weightsvg').css({'left': left_position});
	$('#weightsvg').css({'top': top_position});
	$('#weightsvg').css({'width': svg_width});
	$('#weightsvg').css({'height': svg_height});
	
	$('#agesvg').css({'left': left_position});
	$('#agesvg').css({'top': top_position});
	$('#agesvg').css({'width': svg_width});
	$('#agesvg').css({'height': svg_height});
	
	$('#playerssvg').css({'left': left_position});
	$('#playerssvg').css({'top': top_position});
	$('#playerssvg').css({'width': svg_width});
	$('#playerssvg').css({'height': svg_height});

	$('#clocksvg').css({'left': left_position});
	$('#clocksvg').css({'top': top_position});
	$('#clocksvg').css({'width': svg_width});
	$('#clocksvg').css({'height': svg_height});
	
	$('#langLvl'+langDepLvl).addClass('color-orange');

});

//侧滑容器父节点
var offCanvasWrapper = mui('#offCanvasWrapper');
//主界面容器
var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
//菜单容器
var offCanvasSide = document.getElementById("offCanvasSide");

/*if(!mui.os.android) {
	document.getElementById("move-togger").classList.remove('mui-hidden');
	var spans = document.querySelectorAll('.android-only');
	for(var i = 0, len = spans.length; i < len; i++) {
		spans[i].style.display = "none";
	}
}*/

//移动效果是否为整体移动
var moveTogether = false;
//侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果；
var classList = offCanvasWrapper[0].classList;
//变换侧滑动画移动效果；

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


var sideContent = generateside(hot_arrayEN,hot_arrayCN);
$('#sideContent').html(sideContent);
$(document).ready(function() {
	generateSidelink(hot_arrayEN);
	//document.location.reload();
	change_theme(theme_color);
});
