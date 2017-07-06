var header_title = '主题概念';

list_line = generate(array);
var html1 = table_seg.replace('%data%',list_line);

nameEN_temp = change_nameEN(nameEN);
var pageTitle = nameCN + nameEN_temp;
$("title").html(pageTitle);

$(document).ready(function() {
	$('#header_title').html(header_title);
	$('#introtext').html(html1);
});

