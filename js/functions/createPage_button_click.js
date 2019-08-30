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
$('#background_submit_form').on('submit', function(e) {
	e.preventDefault(); // Prevent the form from submitting via the browser
	let form = $(this);
	let form_data = new FormData();
	let file_data = $('#bg_img_file').prop('files')[0];
	form_data.append('file', file_data);
	$.ajax({
		url: form.attr('action'),
		type: form.attr('method'),
		data: form_data,
		processData: false,
		contentType: false,
	}).done(function(data){
		console.log('Going to change background');
		$('body').css('background-image',`url(http://180.76.244.130:18000/${fileName})`);
	});

});