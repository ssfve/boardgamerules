nameEN_temp = change_nameEN(nameEN);
var pageTitle = nameCN + nameEN_temp
var header_title = nameCN + nameEN_temp

//alert(nameEN)
$('#back_arrow').attr('id',nameEN);
gotoPage(nameEN)


$("title").html(pageTitle);
$(document).ready(function() {
	
	$('#header_title').html(header_title);
	change_theme(theme_color);
	$('#gameSetup').css({'color': theme_color});
	$('.mui-table-view-cell.mui-collapse').css({'background-color': bg_color + lowPR});
});