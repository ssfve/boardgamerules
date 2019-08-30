// create Page
let fileName = '';

$('#upload_background_button').on('click',function () {
	console.log('upload_background_button clicked');
    $('#bg_img_file').click();
});

$("#bg_img_file").on('change', function(e) {
	console.log('bg_img_file changed');
	fileName = e.target.files[0].name;
	console.log(fileName);
	$("#background_submit_form").submit();
});

// intervene submit
$('#background_submit_form').submit(function(e) {
	e.preventDefault(); // Prevent the form from submitting via the browser
	let file_data = $('#bg_img_file').prop('files')[0];
	let form_data = new FormData();
	form_data.append('file', file_data);
	let form = $(this);
	$.ajax({
		type: form.attr('method'),
		url: form.attr('action'),
		data: form_data
	}).done(function(data) {
		$('body').css('background', `url('http://180.76.244.130:18000/${fileName}')no-repeat`);
	}).fail(function(data) {
		// Optionally alert the user of an error here...
	});
});