var array = [];

array[0]='OE注意事项：';
array[1]='O状态指示物';
array[2]='G使用后仍然';
array[3]='OE保留。';
array[4]='G1个或多个骷髅骰子都只结算';
array[5]='O1';
array[6]='GE次';
array[7]='G离开版图(变换区域时)或者在同一区域时可以';
array[8]='OE交换道具';
array[9]='O规则优先级';
array[10]='G：载体';
array[11]='O > ';
array[12]='G物品';
array[13]='O > ';
array[14]='G区域';
array[15]='O > ';
array[16]='G基地卡';
array[17]='O > ';
array[18]='GE说明书';
array[19]='G离开试炼或者变换区域时，进行中的试炼自动';
array[20]='OE重置';
array[21]='GE变换区域可以是平面图中任意区域，不必相邻';
array[22]='G游戏中不要做破坏';
array[23]='O氛围';
array[24]='G的事情';
array[25]='OE:)';
array[26]='OE任务失败,有3种：';
array[27]='O1 - ';
array[28]='G时间指示物到达';
array[29]='O0';
array[30]='GE的位置';
array[31]='O2 - ';
array[32]='G所有时间特工';
array[33]='OE死亡';
array[34]='O3 - ';
array[35]='GE任务特殊失败条件达成';
array[36]='G如果任务失败，请阅读';
array[37]='OE任务失败卡。';
array[38]='G如果任务成功，请阅读';
array[39]='OE任务成功卡。';




var table_seg = '<ul class="mui-table-view">%data%</ul>';
var list_seg = '<li class="mui-table-view-cell">%data%</li>';
var orange_text_seg = '<span class="h6-text-orange add-margin-top add-margin-bottom">%data%</span>';
var grey_text_seg = '<span class="h6-text-grey add-margin-top add-margin-bottom">%data%</span>';
var img_text_seg = '<img src="../img/%data%" alt="Error!Refresh!" width="100%" data-preview-src="" data-preview-group="1"/>';

var list_line = '';
var text_line = '';

array.forEach(function(val,index){
	//alert(text_line);
	if(val.substr(0,1)==='O'){
		if(val.substr(1,1)==='E'){
			var text = val.substr(2,val.length);
			text_line += orange_text_seg.replace('%data%',text)
			list_line += list_seg.replace('%data%',text_line)
			text_line = '';
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
			text_line = '';
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


var html3 = table_seg.replace('%data%',list_line);