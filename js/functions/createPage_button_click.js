// create Page
let fileName = '';
let button_address_seg = "choosePage.html?buttonid=%data%";

// get page_id globally
let index = window.location.href.lastIndexOf("=");
let url_length = window.location.href.length;
let page_id = window.location.href.substring(index + 1, url_length);
console.log('page_id='+page_id);

let callGetGuideId = function () {
	$.ajax({
		url: 'http://180.76.244.130:3000/page/getGuideId',
		type: 'GET',
		data: {
			page_id: page_id
		},
		dataType: "json"
	}).done(function (guide_id) {
		console.log('Returning guide_id='+guide_id);
		return guide_id
	});
};
// get guide_id globally
let guide_id = callGetGuideId();

$('#upload_background_button').on('click', function () {
    console.log('upload_background_button clicked');
    $('#bg_img_file').click();
});

$("#bg_img_file").on('change', function (e) {
    console.log('bg_img_file changed');
    fileName = e.target.files[0].name;
    console.log(fileName);
    $("#background_submit_form").submit();
});

// intervene submit
$('#background_submit_form').on('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting via the browser
    let form = $(this);
    let form_data = new FormData();
    let file_data = $('#bg_img_file').prop('files')[0];
    form_data.append('file', file_data);
    callChangeBackground(form, form_data);
});


let callChangeBackground = function (form, form_data) {
    $.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        data: form_data,
        processData: false,
        contentType: false,
    }).done(function (data) {
        console.log('Going to change background');
        $('body').css('background-image', `url(http://180.76.244.130:18000/${fileName})`);
    });
};

$('#default-add-button').on('tap', function () {
    let db3 = $('#default-button-3');
    if (db3.css('opacity') === '0') {
        db3.css('opacity', 100);
        $('#default-sub-button').css('opacity', 100);
        return;
    }
    let db2 = $('#default-button-2');
    if (db2.css('opacity') === '0') {
        db2.css('opacity', 100);
        $('#default-sub-button').css('opacity', 100);
        return;
    }
    let db1 = $('#default-button-1');
    if (db1.css('opacity') === '0') {
        db1.css('opacity', 100);
        $('#default-add-button').css('opacity', 0);
        $('#default-sub-button').css('opacity', 100);
    }
});

$('#default-sub-button').on('tap', function () {
    let db1 = $('#default-button-1');
    if (db1.css('opacity') === '1') {
        db1.css('opacity', 0);
        $('#default-add-button').css('opacity', 100);
        return;
    }
    let db2 = $('#default-button-2');
    if (db2.css('opacity') === '1') {
        db2.css('opacity', 0);
        return;
    }
    let db3 = $('#default-button-3');
    if (db3.css('opacity') === '1') {
        db3.css('opacity', 0);
        $('#default-sub-button').css('opacity', 0);
    }
});

$('#default-add-button-2').on('click', function (e) {
    $('#default-button-1').css('opacity', 100);
    $('#default-add-button-3').css('opacity', 100);
});

let callCreateButton = function (button_db_name) {
    $.ajax({
        url: 'http://180.76.244.130:3000/button/writeButtonDB',
        type: 'GET',
		data: {
			page_id: page_id,
			guide_id: guide_id,
			button_db_name: button_db_name
		}
    }).done(function (button_id) {
        console.log('Returning button_id='+button_id);
		//switchPage(button_address_seg, button_id);
    });
};

let callGetButtonInfo = function (button_default_name) {
    $.ajax({
        url: 'http://180.76.244.130:3000/database/getButtonInfo',
        type: 'GET',
        data: {
            page_id: page_id
        },
        dataType: "json"
    }).done(function (button_list) {
        console.log('Returning button list');
        callButtonCheck(button_list, button_default_name)
    });
};

$('#default-button-4').on('tap', function () {
    callGetButtonInfo('default-button-4');
});

$('#default-button-3').on('tap', function () {
	callGetButtonInfo('default-button-3');
});

let callButtonCheck = function (button_list, button_default_name) {
    console.log(button_list);
    console.log(typeof button_list);
    let index = button_default_name.lastIndexOf("-");
    let button_text_length = button_default_name.length;
    let button_number = button_default_name.substring(index + 1, button_text_length);
    console.log(button_number);
    let button_db_name = 'button' + button_number + '_id';
	let button_id = button_list[button_db_name];
    console.log(button_id);
    if (button_id === null) {
        callCreateButton(button_db_name);
    } else {
		//switchPage(button_address_seg, button_id);
    }
};
