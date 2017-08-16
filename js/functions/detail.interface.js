var gameSetup = '初始设置';
var gameFlow = '回合流程';

if (document.getElementById('gameOther') !== null){
	var gameEnd = '其它规则';
	var gameOther = '胜利条件';
}else{
	var gameEnd = '胜利条件';
	var gameOther = '其它规则';
}


var players2 = '2人游戏规则';
var players3 = '3人游戏规则';
var players4 = '4人游戏规则';
var players5 = '5人游戏规则';



header_height = $('#mui_header').outerHeight(true);
//alert(header_height);
//alert(navigation_bar_height);
screen_height = $(window).outerHeight(true);
//alert(screen_height);
document_height = screen_height-header_height-50+'px'
//alert(document_height);

//alert($("#mui-group").css("min-height"));
//$("#two").addClass("divClass2")为ID为two的对象追加样式divClass2
//alert($("#item1mobile").css("min-height"));

$('#item1mobile').css({'min-height': document_height});
$('#item2mobile').css({'min-height': document_height});
$('#item3mobile').css({'min-height': document_height});
$('#item4mobile').css({'min-height': document_height});

//alert(getImagePath(gameid,'setup','a'))
