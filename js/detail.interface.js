var gameSetup = '游戏设置';
var gameFlow = '游戏流程';
var gameEnd = '游戏计分';
var players2 = '2人游戏规则';
var players3 = '3人游戏规则';
var players4 = '4人游戏规则';
var players5 = '5人游戏规则';

function setScrollHeader() {
	$('#inittitle').html(players4);
	$('#gameSetup').html(gameSetup);
	$('#gameFlow').html(gameFlow);
	$('#gameEnd').html(gameEnd);
	$('#initlist').html(html1);
};
setScrollHeader();