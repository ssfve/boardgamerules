nameEN = change_nameEN(nameEN);
var pageTitle = nameCN + nameEN
var header_title = nameCN + nameEN


$("title").html(pageTitle);

$(document).ready(function() {
	$('#header_title').html(header_title);
	
	change_theme(theme_color);
	$('#gameSetup').css({'color': theme_color});
	$('.mui-table-view-cell.mui-collapse').css({'background-color': bg_color + lowPR});
});


