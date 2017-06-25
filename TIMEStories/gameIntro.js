var page_title = '时间守望T.I.M.E.'
$(document).attr("title",page_title);
$("title").html(page_title);

var header_title = '主题概念'
var array = [];

array[0]='G欢迎来到';
array[1]='O时间守望T.I.M.E.';
array[2]='GE管理机构。';
array[3]='G我们的科技是';
array[4]='O绝对安全';
array[5]='GE的。';
array[6]='GE你的意识将被投射到过去，未来，或平行宇宙中。';
array[7]='G你们将进入精心挑选的';
array[8]='OE载体，';
array[9]='G并控制它们共同完成一项艰巨的';
array[10]='OE任务。';
array[11]='G在进入';
array[12]='O时空巢';
array[13]='GE之前，你们需要完成基本的训练。';
array[14]='G每个人都能成为优秀的';
array[15]='OE时间特工。';
array[16]='GE时空的连续性就靠你来守护了!'
array[17]='GE你准备好了吗？';



var table_seg = '<ul class="mui-table-view">%data%</ul>';
var list_seg = '<li class="mui-table-view-cell">%data%</li>';
var orange_text_seg = '<span class="h6-text-orange">%data%</span>';
var grey_text_seg = '<span class="h6-text-grey">%data%</span>';
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

$(document).ready(function() {
	$('#headr_title').html(header_title);
	$('#introtext').html(html1);
});
