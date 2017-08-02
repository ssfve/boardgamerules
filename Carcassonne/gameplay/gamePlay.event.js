var header_title = '玩家帮助';

nameEN_temp = change_nameEN(nameEN);
var pageTitle = nameCN + nameEN_temp;
$("title").html(pageTitle);


final_html = ''
part.forEach(function(val,index){
	final_html += part[index]
});
//list_line = generate(array);
var html1 = table_seg.replace('%data%',final_html);

//alert(nameEN)
$('#back_arrow').attr('id',nameEN);
gotoPage(nameEN)
collapse_event_gen()

$(document).ready(function() {
	$('#header_title').html(header_title);
	$('#introtext').html(html1);
	change_theme(theme_color);
});

