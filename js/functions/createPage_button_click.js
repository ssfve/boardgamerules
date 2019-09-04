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
	callChangeBackground(form, form_data);
});


let callChangeBackground=function(form, form_data){
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
};

$('#default-add-button').on('tap', function() {
	let db3 = $('#default-button-3');
	if (db3.css('opacity') === '0'){
		db3.css('opacity',100);
		$('#default-sub-button').css('opacity',100);
		return;
	}
	let db2 = $('#default-button-2');
	if (db2.css('opacity') === '0'){
		db2.css('opacity',100);
		return;
	}
	let db1 = $('#default-button-1');
	if (db1.css('opacity') === '0'){
		db1.css('opacity',100);
		$('#default-add-button').css('opacity',0);
		return;
	}
});

$('#default-sub-button').on('tap', function() {
	let db1 = $('#default-button-1');
	if (db1.css('opacity') === '1'){
		db1.css('opacity',0);
		$('#default-add-button').css('opacity',100);
		return;
	}
	let db2 = $('#default-button-2');
	if (db2.css('opacity') === '1'){
		db2.css('opacity',0);
		return;
	}
	let db3 = $('#default-button-3');
	if (db3.css('opacity')=== '1'){
		db3.css('opacity',0);
		$('#default-sub-button').css('opacity',0);
		return;
	}
});

$('#default-add-button-2').on('click', function(e) {
	$('#default-button-1').css('opacity',100);
	$('#default-add-button-3').css('opacity',100);
});