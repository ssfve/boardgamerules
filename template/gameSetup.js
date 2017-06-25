var array = [];

array[0]='O1 - ';
array[1]='GE把游戏板放在桌子中间。';
array[2]='O2 - ';
array[3]='GE游戏板上有物品卡区，任务成功/失败卡区，还有状态卡区，行动区，牌堆区，场景卡区。';
array[4]='O3 - ';
array[5]='G中间是时间条，';
array[6]='O时间指示物';
array[7]='G的起始位置由';
array[8]='O任务';
array[9]='GE决定。';
array[10]='O4 - ';
array[11]='G左上是平面图区，';
array[12]='O团队指示物';
array[13]='G起始位置也由';
array[14]='O任务';
array[15]='GE决定。';
array[16]='O5 - ';
array[17]='G玩家挑选自己的颜色，拿取大小';
array[18]='O2';
array[19]='G个';
array[20]='OE玩家指示物。';
array[21]='O6 - ';
array[22]='G把';
array[23]='O5';
array[24]='G种';
array[25]='O盾牌指示物';
array[26]='GE放在一边。';
array[27]='O7 - ';
array[28]='G把';
array[29]='O6';
array[30]='G个';
array[31]='O行动骰子';
array[32]='G和';
array[33]='O时间队长骰子';
array[34]='GE放在一边。';
array[35]='O8 - ';
array[36]='G把';
array[37]='O生命，资源，状态';
array[38]='GE指示物放在一边。';
array[39]='O9 - ';
array[40]='GE打开基地区域依次阅读基地卡规则，然后放一边备查';






var table_seg = '<ul class="mui-table-view">%data%</ul>';
var list_seg = '<li class="mui-table-view-cell">%data%</li>';
var orange_text_seg = '<span class="h6-text-orange add-margin-top add-margin-bottom">%data%</span>';
var grey_text_seg = '<span class="h6-text-grey add-margin-top add-margin-bottom">%data%</span>';
var img_text_seg = '<img src="../img/%data%" alt="Error!Refresh!" width="100%" data-preview-src="" data-preview-group="1"/>';

var list_line = '';
var text_line = '';

array.forEach(function(val,index){
	//alert(val.substr(0,3));
	if(val.substr(0,1)==='O'){
		if(val.substr(1,1)==='E'){
			var text = val.substr(2,val.length);
			text_line += orange_text_seg.replace('%data%',text)
			list_line += list_seg.replace('%data%',text_line)
			text_line = ''
			//alert(list_line);
		}else{
			var text = val.substr(1,val.length);
			text_line += orange_text_seg.replace('%data%',text)
		}
	}
	if(val.substr(0,1)==='G'){
		if(val.substr(1,1)==='E'){
			var text = val.substr(2,val.length);
			text_line += grey_text_seg.replace('%data%',text)
			list_line += list_seg.replace('%data%',text_line)
			text_line = ''
		}else{
			var text = val.substr(1,val.length);
			text_line += grey_text_seg.replace('%data%',text)
			//list_line += list_seg.replace('%data%',text_line)
		}
	}
	if(val.substr(0,1)==='I'){
		var text = val.substr(1,val.length);
		text_line = img_text_seg.replace('%data%',text)
		list_line += list_seg.replace('%data%',text_line)
	}
});


var html1 = table_seg.replace('%data%',list_line);