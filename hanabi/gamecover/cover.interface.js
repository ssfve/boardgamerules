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
var players = minplayer + '~' + maxplayer;
var list_line = '';

var sideContent = generateside(hot_arrayEN,hot_arrayCN);

if (rateNum >= 1000){
	rateNum = rateNum/1000+'k';
}
if(maxtime === '' || maxtime === 'None') {
	var playtime = mintime + '’'
} else {
	var playtime = mintime + '’~' + maxtime + '’'
}
$(document).ready(function() {
	$('#numRatesMea').html(numRatesMea);
	$('#numRates').html(rateNum);
	$('#valueRates').html(rateScore);
	$('#valueRatesMea').html(valueRatesMea);
	$('#yearPub').html(yearPub);
	$('#yearPubMea').html(yearPubMea);
	$('#weight').html(weight);
	$('#weightLimit').html(weightLimit);
	$('#weightExp').html(weightExp);
	$('#age').html(minAge);
	$('#ageMea').html(ageMea);
	$('#ageMeaPlus').html(ageMeaPlus);
	$('#players').html(players);
	$('#playersMea').html(playersMea);
	$('#playersBest').html(playersBest);
	$('#playtime').html(playtime);
	$('#playtimeMea').html(playtimeMea);
	$('#designerTitle').html(designerTitle);
	$('#designerName').html(designers);
	$('#langTitleHigh').html(langTitleHigh);
	$('#langTitleLow').html(langTitleLow);
	$('#langLvl0').html(langLvl0);
	$('#langLvl1').html(langLvl1);
	$('#langLvl2').html(langLvl2);
	$('#langLvl3').html(langLvl3);
	$('#langLvl4').html(langLvl4);
	$('#categoryTitle').html(categoryTitle);
	$('#categorys').html(categorys);
	$('#button1').html(button1);
	$('#button2').html(button2);
	$('#button3').html(button3);
	$('#button4').html(button4);
	$('#button5').html(button5);
	$('#caption-pic').css({
		'background-image': imgCaption
	})
	$('#gameName').html(gameName);
	$('#nameCNEN').html(pageTitle);
	
	$('#subText').html(subText);
	$('#subName').html(subName);
	$('#sideHeader').html(sideHeader);
});

$(document).ready(function() {
	valueRates_w = $('#valueRates').width();
	valueRates_h = $('#valueRates').height();
	//vertical align middle
	$('#valueRates').css({
		'line-height': valueRates_h + pixels
	});

	valueRatesMea_w = $('#valueRatesMea').width();
	valueRatesMea_h = $('#valueRatesMea').height();
	//bottom right
	$('#valueRatesMea').css({
		'top': (valueRates_h - valueRatesMea_h) + pixels
	});
	$('#valueRatesMea').css({
		'left': (valueRates_w - valueRatesMea_w) + pixels
	});

	orangesvg1_w = $('#orangesvg1').width();
	orangesvg1_h = $('#orangesvg1').height();
	//position inner image
	yearsvg_w = $('#yearsvg').width() * cover_img_scale_factor;
	yearsvg_h = $('#yearsvg').height() * cover_img_scale_factor;
	$('#yearsvg').css({
		'left': (orangesvg1_w - yearsvg_w + 16) / 2 + pixels
	});
	$('#yearsvg').css({
		'top': (orangesvg1_h - yearsvg_h) / 2 + pixels
	});
	$('#yearsvg').css({
		'width': yearsvg_w + pixels
	});
	$('#yearsvg').css({
		'height': yearsvg_h + pixels
	});

	$('#hexagon').css({
		'height': orangesvg1_h / 3 + pixels
	});
	$('#hexagon').css({
		'top': orangesvg1_h / 3 + pixels
	});
	$('#hexagon:before').css({
		'border-left': orangesvg1_w/2 + 'px solid transparent'
	});
	$('#hexagon:before').css({
		'border-right': orangesvg1_w/2 + 'px solid transparent'
	});
	$('#hexagon').css({
		'top': orangesvg1_h / 3 + pixels
	});
	
	weightsvg_w = $('#weightsvg').width() * cover_img_scale_factor;
	weightsvg_h = $('#weightsvg').height() * cover_img_scale_factor;
	$('#weightsvg').css({
		'left': (orangesvg1_w - weightsvg_w + 16) / 2 + pixels
	});
	$('#weightsvg').css({
		'top': (orangesvg1_h - weightsvg_h) / 2 + pixels
	});
	$('#weightsvg').css({
		'width': weightsvg_w + pixels
	});
	$('#weightsvg').css({
		'height': weightsvg_h + pixels
	});

	agesvg_w = $('#agesvg').width() * cover_img_scale_factor;
	agesvg_h = $('#agesvg').height() * cover_img_scale_factor;
	$('#agesvg').css({
		'left': (orangesvg1_w - agesvg_w + 16) / 2 + pixels
	});
	$('#agesvg').css({
		'top': (orangesvg1_h - agesvg_h) / 2 + pixels
	});
	$('#agesvg').css({
		'width': agesvg_w + pixels
	});
	$('#agesvg').css({
		'height': agesvg_h + pixels
	});

	playerssvg_w = $('#playerssvg').width() * cover_img_scale_factor;
	playerssvg_h = $('#playerssvg').height() * cover_img_scale_factor;
	$('#playerssvg').css({
		'left': (orangesvg1_w - playerssvg_w + 16) / 2 + pixels
	});
	$('#playerssvg').css({
		'top': (orangesvg1_h - playerssvg_h) / 2 + pixels
	});
	$('#playerssvg').css({
		'width': playerssvg_w + pixels
	});
	$('#playerssvg').css({
		'height': playerssvg_h + pixels
	});

	clocksvg_w = $('#clocksvg').width() * cover_img_scale_factor;
	clocksvg_h = $('#clocksvg').height() * cover_img_scale_factor;
	$('#clocksvg').css({
		'left': (orangesvg1_w - clocksvg_w + 16) / 2 + pixels
	});
	$('#clocksvg').css({
		'top': (orangesvg1_h - clocksvg_h) / 2 + pixels
	});
	$('#clocksvg').css({
		'width': clocksvg_w + pixels
	});
	$('#clocksvg').css({
		'height': clocksvg_h + pixels
	});

	if(langLvl0 === langDepLvl) {
		$('#langLvl0').addClass('color-orange');
	}
	if(langLvl1 === langDepLvl) {
		$('#langLvl1').addClass('color-orange');
	}
	if(langLvl2 === langDepLvl) {
		$('#langLvl2').addClass('color-orange');
	}
	if(langLvl3 === langDepLvl) {
		$('#langLvl3').addClass('color-orange');
	}
	if(langLvl4 === langDepLvl) {
		$('#langLvl4').addClass('color-orange');
	}
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


$('#sideContent').html(sideContent);
$(document).ready(function() {
	generateSidelink(hot_arrayEN);
	//document.location.reload();
});
