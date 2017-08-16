//alternations();
//toast_alter();

var sideContent = generateside(hot_arrayEN,hot_arrayCN);
$('#sideContent').html(sideContent);
$("title").html(pageTitle);
$(document).ready(function() {
	
	$('#numRates').html(usersrated);
	$('#valueRates').html(average);
	$('#yearPub').html(yearpublished);
	$('#yearPubMea').html(yearMea);
	$('#weight').html(averageweight);
	$('#weightLimit').html(weightLimit);
	$('#weightExp').html(weightExp);
	$('#age').html(age);
	$('#ageMea').html(ageMea);
	$('#ageMeaPlus').html(ageMeaPlus);
	$('#players').html(players);
	$('#playersMea').html(playersMea);
	$('#playersBest').html(playersBest);
	$('#playtime').html(playtime);

	$('#designerTitle').html(designerTitle);
	$('#designerName').html(designers_temp);
	$('#langTitleHigh').html(langTitleHigh);
	$('#langTitleLow').html(langTitleLow);
	$('#langLvl0').html(langLvl0);
	$('#langLvl1').html(langLvl1);
	$('#langLvl2').html(langLvl2);
	$('#langLvl3').html(langLvl3);
	$('#langLvl4').html(langLvl4);
	$('#categoryTitle').html(categoryTitle);
	$('#categorys').html(categorysCN);
	$('#button1').html(button1);
	$('#button2').html(button2);
	$('#button3').html(button3);
	$('#button4').html(button4);
	$('#button5').html(button5);
	$('#button6').html(button6);
	//alert(imgCaption)
	$('#caption-pic').css({'background-image': 'url('+imgCaption+')'})
	$('#caption-pic').css({'height': slide_height})
	$('#gameName').html(gameName);
	$('#nameCN').html(nameCN);
	
	$('#subText').html(subText);
	$('#subName').html(subName);
	$('#sideHeader').html(sideHeader);
});

$(document).ready(function() {
	setTimeout(function(){
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
	},150);
	
	
	$('#langLvl'+language_dependence).addClass('color-orange');

});

$(document).ready(function() {
	generateSidelink(hot_arrayEN);
	//document.location.reload();
	//alert(theme_color)
	change_theme(theme_color);
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


var slider = mui("#slider");
