var header_title = '玩家帮助';
list_line = generate(array);
var html1 = table_seg.replace('%data%',list_line);

nameEN = nameEN.substring(0,1).toUpperCase()+nameEN.substring(1);
var pageTitle = nameCN + nameEN;
$("title").html(pageTitle);

$(document).ready(function() {
	$('#header_title').html(header_title);
	$('#introtext').html(html1);
});

