var header_title = '关注我们';

//list_line = generate(array);
//var html1 = table_seg.replace('%data%',list_line);


mui.previewImage();

part.forEach(function(val,index){
	list_line += part[index]
});

//alert(nameEN)

final_html = '';
var final_html = table_seg.replace('%data%',list_line);

$(document).ready(function() {
	$('#header_title').html(header_title);
	$('#introtext').html(final_html);
});

