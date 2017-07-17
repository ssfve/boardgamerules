var header_title = '主题概念';

//list_line = generate(array);
//var html1 = table_seg.replace('%data%',list_line);

nameEN = change_nameEN(nameEN);
var pageTitle = nameCN + nameEN;
$("title").html(pageTitle);




part.forEach(function(val,index){
	list_line += part[index]
});

final_html = '';
var final_html = table_seg.replace('%data%',list_line);

$(document).ready(function() {
	$('#header_title').html(header_title);
	$('#introtext').html(final_html);
});

