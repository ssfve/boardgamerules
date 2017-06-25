nameEN = nameEN.substring(0,1).toUpperCase()+nameEN.substring(1);
var pageTitle = nameCN + nameEN
$("title").html(pageTitle);

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
