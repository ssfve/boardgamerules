var header_title = '主题概念';
var table_seg = '<ul class="mui-table-view">%data%</ul>';
var list_seg = '<li class="mui-table-view-cell">%data%</li>';
var list_seg_pre = '<li class="mui-table-view-cell">';
var list_seg_post = '</li>';
var stack_seg = '<li class="mui-table-view-cell mui-collapse">%data%</li>';
var stack_seg_class = 'mui-table-view-cell';
var stack_seg_class = 'mui-table-view-cell mui-collapse';

var orange_text_seg = '<span class="h6-text-orange">%data%</span>';
var grey_text_seg = '<span class="h6-text-grey">%data%</span>';
var img_text_seg = '<img src="../img/%data%" alt="Error!Refresh!" width="100%" data-preview-src="" data-preview-group="1"/>';

var stack_seg_header = '<a class="mui-navigate-right" href="#">%data%</a>';
var stack_seg_content = '<div class="mui-collapse-content">%data%</div>';

var link_seg = '<a id="%link%" class="mui-navigate-right" style="color:#FFFFFF;">%data%</a>';
var address_seg = '../../%data%/gamecover/gameCover.html';
var local_address_seg = '../../%data%/gamecover/gameCover.html';

var array=[];
var part=[];
var list_line = '';
var text_line = '';
var stack_line = '';
var final_html = '';

var change_nameEN = function(name) {
	name_copy = name;
	name = '';
	for(var i = 0; i < name_copy.length; i++) {
		//alert(nameEN_copy.substring(i,i+1))
		if(i === 0) {
			name += name_copy.substring(i, i + 1).toUpperCase();
		} else if(name_copy.substring(i, i + 1) === '-') {
			name += ' ';
			name += name_copy.substring(i + 1, i + 2).toUpperCase();
			i += 1;
		} else {
			name += name_copy.substring(i, i + 1);
		}
		//alert(nameEN);
	}
	return name;
};


var generate = function(array){
	array.forEach(function(val,index){
		//alert(text_line);
		if(val.substr(0,1)==='O'){
			if(val.substr(1,1)==='E'){
				var text = val.substr(2,val.length);
				text_line += orange_text_seg.replace('%data%',text)
				list_line += list_seg.replace('%data%',text_line)
				text_line = ''
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
		
		if(val.substr(0,1)==='S'){
			if(val.substr(1,1)==='E'){
				//alert(list_line);
				re = new RegExp(list_seg_pre,"g");
				list_line = list_line.replace(re,'<p class="add-margin-top add-margin-bottom">');
				re = new RegExp(list_seg_post,"g");
				list_line = list_line.replace(re,'</p>');
				//alert(list_line);
				//alert(stack_seg_content.replace('%data%',list_line))
				stack_line += stack_seg_content.replace('%data%',list_line);
				
				list_line = stack_seg.replace('%data%',stack_line);
				stack_line = '';
			}else{
				var text = val.substr(1,val.length);
				stack_line += stack_seg_header.replace('%data%',text)
			}
		}
	});
	return list_line;
};


var generateside = function(arrayEN,arrayCN){
	arrayEN.forEach(function(val,index){
		nameEN_temp = change_nameEN(arrayEN[index]);
		name_data = arrayCN[index] +' '+ nameEN_temp;
		//link_data = address_seg.replace('%data%',arrayEN[index]);
		//link_data = local_address_seg.replace('%data%',arrayEN[index]);
		//alert(link_data);
		link_seg_temp = link_seg.replace('%link%',arrayEN[index]);
		list_seg_data = link_seg_temp.replace('%data%',name_data);
		list_line += list_seg.replace('%data%',list_seg_data);
	});
	return list_line;
};



var gotoPage = function(nameEN){
	//alert(nameEN);
	//link_data = address_seg.replace('%data%',nameEN);
	//alert(link_data)
	
	//alert(nameEN_temp);
	document.getElementById(nameEN).addEventListener('tap', function() {
		nameEN_temp = document.getElementById(nameEN).id
		//alert(nameEN_temp);
		window.location.href = address_seg.replace('%data%',nameEN_temp);
	});
	
};

var generateSidelink = function(array){
	array.forEach(function(val,index){
		//alert(array[index]);
		gotoPage(array[index]);
	});
}
