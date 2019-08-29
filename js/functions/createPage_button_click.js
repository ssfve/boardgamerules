// create Page
$('#upload_background_button').on('click',function () {
	console.log('upload_background_button clicked');
    $('#bg_img_file').click();
});

$("#bg_img_file").on('change', function() {
	console.log('bg_img_file changed');
	$("#background_submit_form").submit();
});