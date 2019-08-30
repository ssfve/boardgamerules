// create Page
$('#upload_background_button').on('click',function () {
	console.log('upload_background_button clicked');
    $('#bg_img_file').click();
});

$("#bg_img_file").on('change', function(e) {
	console.log('bg_img_file changed');
	$("#background_submit_form").submit();

	let fileName = e.target.files[0].name;
	$('body').css('background', `url('http://180.76.244.130:18000/${fileName}')no-repeat`);

});

// intervene submit
$('#background_submit_form').submit(function(e) {
	e.preventDefault(); // Prevent the form from submitting via the browser
	let form = $(this);
	$.ajax({
		type: form.attr('method'),
		url: form.attr('action'),
		data: form.serialize()
	}).done(function(data) {
		// Optionally alert the user of success here...
	}).fail(function(data) {
		// Optionally alert the user of an error here...
	});
});