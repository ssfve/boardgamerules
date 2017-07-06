list_line = generate(array);
var html1 = table_seg.replace('%data%',list_line);

$("title").html(pageTitle);
$(document).ready(function() {
	$('#headr_title').html(header_title);
	$('#introtext').html(html1);
});
