var header_title = '主题背景';

//list_line = generate(array);
//var html1 = table_seg.replace('%data%',list_line);

nameEN_temp = change_nameEN(nameEN);
var pageTitle = nameCN + nameEN_temp;
$("title").html(pageTitle);




part.forEach(function(val,index){
	list_line += part[index]
});

final_html = '';
var final_html = table_seg.replace('%data%',list_line);

//alert(nameEN)
$('#back_arrow').attr('id',nameEN);
gotoPage(nameEN)


$(document).ready(function() {
	$('#header_title').html(header_title);
	$('#introtext').html(final_html);
	
	collapse_event_gen();
	change_theme(theme_color);
	//$('#gameSetup').css({'color': theme_color});
	$('.mui-table-view-cell.mui-collapse').css({'background-color': bg_color + lowPR});
});

