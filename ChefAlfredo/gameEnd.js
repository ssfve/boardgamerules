var array = [];

array[0] = 'OE4人游戏准备:';
array[1] = 'O1.';
array[2] = 'G大厨阿尔弗雷多的"西红柿"'
array[3] = 'O2.';
array[4] = 'G游戏中能够准确记住"汤锅"的位置'
array[5] = 'GE第二个选项卡子项'
array[6] = 'OE4人游戏准备:';
array[7] = 'IChefAlfredo/setup.jpg';

var table_seg = '<ul class="mui-table-view">%data%</ul>';
var list_seg = '<li class="mui-table-view-cell">%data%</li>';
var orange_text_seg = '<span class="h6-text-orange">%data%</span>';
var grey_text_seg = '<span class="h6-text-grey">%data%</span>';
var img_text_seg = '<img src="../img/%data%" alt="Error!Refresh!" width="100%" data-preview-src="" data-preview-group="1"/>';

var list_line = '';
var text_line = '';

array.forEach(function(val,index){
	//alert(text_line);
	if(val.substr(0,1)==='O'){
		if(val.substr(1,1)==='E'){
			var text = val.substr(2,val.length);
			text_line = orange_text_seg.replace('%data%',text)
			list_line += list_seg.replace('%data%',text_line)
		}else{
			var text = val.substr(1,val.length);
			text_line = orange_text_seg.replace('%data%',text)
		}
	}
	if(val.substr(0,1)==='G'){
		if(val.substr(1,1)==='E'){
			var text = val.substr(2,val.length);
			text_line = grey_text_seg.replace('%data%',text)
			list_line += list_seg.replace('%data%',text_line)
		}else{
			var text = val.substr(1,val.length);
			text_line += grey_text_seg.replace('%data%',text)
			list_line += list_seg.replace('%data%',text_line)
		}
	}
	if(val.substr(0,1)==='I'){
		var text = val.substr(1,val.length);
		text_line = img_text_seg.replace('%data%',text)
		list_line += list_seg.replace('%data%',text_line)
	}
});


var html3 = table_seg.replace('%data%',list_line);