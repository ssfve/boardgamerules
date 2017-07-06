var table_seg = '<ul class="mui-table-view">%data%</ul>';
var list_seg = '<li class="mui-table-view-cell">%data%</li>';
var list_seg_pre = '<li class="mui-table-view-cell">';
var list_seg_post = '</li>';
var stack_seg = '<li class="mui-table-view-cell mui-collapse">%data%</li>';
var stack_seg_class = 'mui-table-view-cell';
var stack_seg_class = 'mui-table-view-cell mui-collapse';

var orange_text_seg = '<span class="h6-text-orange">%data%</span>';
var grey_text_seg = '<span class="h6-text-grey">%data%</span>';
var img_text_seg = '<img src="../../img/%data%" alt="Error!Refresh!" width="100%" data-preview-src="" data-preview-group="1"/>';

var stack_seg_header = '<a class="mui-navigate-right" href="#">%data%</a>';
var stack_seg_content = '<div class="mui-collapse-content">%data%</div>';

var link_seg = '<a id="%link%" class="mui-navigate-right" style="color:#FFFFFF;">%data%</a>';
var address_seg = '../../%data%/gamecover/gameCover.html';
var local_address_seg = '../../%data%/gamecover/gameCover.html';
var local_hotlist_seg = '../../js/page/hotlist.html';

var index_seg = '<div class="mui-indexed-list-bar">%data%</div>';
var a_seg = '<a>%data%</a>';

var index_class_seg = '<li data-group="%1%" class="mui-table-view-divider mui-indexed-list-group">%0%</li>';
var index_value_seg = '<li data-value="%2%" data-tags="%3%" id="%4%" class="mui-table-view-cell mui-indexed-list-item">%1% %0%</li>';

var array=[];
var part=[];
var list_line = '';
var text_line = '';
var index_line = '';
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
		if (nameEN_temp === 'rulebook-list'){
			window.location.href = local_hotlist_seg;
		}
			
	});
	
};

var generateSidelink = function(array){
	array.forEach(function(val,index){
		//alert(array[index]);
		gotoPage(array[index]);
	});
}


var index_gen = function(array){
	var html_line = ''
	array.forEach(function(val,index){
		html_line += a_seg.replace('%data%',val) 
	});
	return html_line
}


var index_games_gen = function(array){
	var html_line = ''
	array.forEach(function(val,index){
		//alert(type(val))
		if (val.length === 2){
			temp_line = index_class_seg.replace('%0%',val[0]);
			html_line += temp_line.replace('%1%',val[1]);
		}
		if (val.length === 3){
			temp_line = index_value_seg.replace('%0%',change_nameEN(val[0]));
			temp_line = temp_line.replace('%1%',val[1]);
			temp_line = temp_line.replace('%2%',val[2]);
			temp_line = temp_line.replace('%3%',val[0]);
			html_line += temp_line.replace('%4%',val[0]);
		}
		
		
	});
	//html_line = html_line.replace('>"','>');
	//html_line = html_line.replace('"<','<');
	return html_line
}

var generateIndexlink = function(array){
	array.forEach(function(val,index){
		if(val.length === 3){
			gotoPage(val[0]);
		}
		
	});
}
