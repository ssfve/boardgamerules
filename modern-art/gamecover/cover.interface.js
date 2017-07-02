var numRatesMea = '点评'
var valueRatesMea = '/10'
var yearPubMea = '年'
var weightLimit = '/5'
var weightExp = '复杂度'
var ageMea = '岁'
var ageMeaPlus = '+'
var playersMea = '人'
var playersBest = bestplayer + '人最佳'
var playtimeMea = '分钟'
var designerTitle = '设计师:'
var langTitleHigh = '语言'
var langTitleLow = '依赖:'
var langLvl0 = '0'
var langLvl1 = '1'
var langLvl2 = '2'
var langLvl3 = '3'
var langLvl4 = '4'
var categoryTitle = '分类机制:'
var cover_img_scale_factor = 0.5
var pixels = 'px'
var imgCaption = 'url(../../img/'+nameEN+'/caption.jpg)'
var numRatesMea = '点评'
var valueRatesMea = '/10'
var yearPubMea = '年'
var weightLimit = '/5'
var weightExp = '复杂度'
var ageMea = '岁'
var ageMeaPlus = '+'
var playersMea = '人'
var playersBest = bestplayer + '人最佳'
var playtimeMea = '分钟'
var designerTitle = '设计师:'
var langTitleHigh = '语言'
var langTitleLow = '依赖:'
var langLvl0 = '0'
var langLvl1 = '1'
var langLvl2 = '2'
var langLvl3 = '3'
var langLvl4 = '4'
var categoryTitle = '分类机制:'
var cover_img_scale_factor = 0.5
var pixels = 'px'

nameEN = nameEN.substring(0,1).toUpperCase()+nameEN.substring(1);
var pageTitle = nameCN + nameEN
$("title").html(pageTitle);

var button1 = '主题概念'
var button2 = '>>'+pageTitle+'<<'
var button3 = '我是讲解员'
var button4 = '我是玩家'
var players = minplayer+'~'+maxplayer
if (maxtime === '' || maxtime === 'None'){
	var playtime = mintime
}
else{
	var playtime = mintime+'~'+maxtime
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
	$('#caption-pic').css({'background-image':imgCaption})
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