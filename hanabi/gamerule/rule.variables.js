nameEN_temp = change_nameEN(nameEN);
var pageTitle = nameCN + nameEN_temp
var header_title = nameCN + nameEN_temp
		
$("title").html(pageTitle);
$(document).ready(function() {
	$('#header_title').html(header_title);
	change_theme(theme_color);
});