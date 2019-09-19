// create Page
let fileName = '';
let button_address_seg = "choosePage.html?buttonid=%data%";

// get page_id globally
let index = window.location.href.lastIndexOf("=");
let url_length = window.location.href.length;
let page_id = window.location.href.substring(index + 1, url_length);
console.log('page_id=' + page_id);

let callGetButtonText = function () {
    $.ajax({
        url: 'http://180.76.244.130:3000/page/getButtonInfo',
        type: 'GET',
        data: {
            page_id: page_id
        },
        dataType: "json"
    }).done(function (button_list) {
        console.log('Returning button list');
        getButtonText(button_list)
    });
};

callGetButtonText();

let getButtonText = function (button_list) {
    console.log(button_list);
    for (let element in button_list) {
        //element.hasOwnProperty()
        console.log(element);
        let button_id = button_list[element];
        if (button_id === '' || button_id === null || button_id === undefined) {
            console.log('button is not set');
        } else {
            let index = element.lastIndexOf("_");
            let button_number = element.substring(index - 1, index);
            console.log(button_number);
            let button_old_id = 'default-button-' + button_number;
            let button_new_id = 'button-' + button_id;
            let old_button_element = $(`#${button_old_id}`);
            $.ajax({
                url: 'http://180.76.244.130:3000/database/getAttribute',
                type: 'GET',
                data: {
                    table_name: 'raw_button_table',
                    attribute_name: 'button_text',
                    key_name: 'button_id',
                    key_value: button_id
                }
            }).done(function (button_text) {
                console.log('Returning button text is ' + button_text);
                old_button_element.html(button_text);
                old_button_element.attr("id", button_new_id);
            });
        }
    }
};

let callGetGuideId = function (button_db_name) {
    $.ajax({
        url: 'http://180.76.244.130:3000/page/getPageAttribute',
        type: 'GET',
        data: {
            attribute_name: 'guide_id',
            page_id: page_id
        },
        dataType: "json"
    }).done(function (guide_id) {
        console.log('Returning guide_id=' + guide_id);
        callCreateButton(guide_id, button_db_name);
    });
};

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

let callCreateText = function (button_default_name) {
    let text_value = $('#desc_input').val();
    console.log(text_value);
    if (text_value === '' || text_value === undefined) {
        text_value = 'PG-DFLT-TXT'
    }
    $.ajax({
        url: 'http://180.76.244.130:3000/text/writeTextDB',
        type: 'GET',
        data: {
            text_value: text_value,
            page_id: page_id,
        }
    }).done(function (result) {
        console.log('Returning result is ' + result);
        callGetButtonInfo(button_default_name);
    });
};

let callCreateButton = function (guide_id, button_db_name) {

    $.ajax({
        url: 'http://180.76.244.130:3000/button/writeButtonDB',
        type: 'GET',
        data: {
            page_id: page_id,
            guide_id: guide_id,
            button_db_name: button_db_name
        }
    }).done(function (button_id) {
        console.log('Returning button_id=' + button_id);
        switchPage(button_address_seg, button_id);
    });
};

let callGetButtonInfo = function (button_default_name) {
    $.ajax({
        url: 'http://180.76.244.130:3000/page/getButtonInfo',
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

let callButtonCheck = function (button_list, button_default_name) {
    console.log(button_list);
    console.log(typeof button_list);
    console.log(button_default_name);
    if (!button_default_name.includes('default')) {
        let index = button_default_name.lastIndexOf("-");
        let button_text_length = button_default_name.length;
        let button_id = button_default_name.substring(index + 1, button_text_length);
        switchPage(button_address_seg, button_id);
    } else {
        let index = button_default_name.lastIndexOf("-");
        let button_text_length = button_default_name.length;
        let button_number = button_default_name.substring(index + 1, button_text_length);
        console.log(button_number);
        let button_db_name = 'button' + button_number + '_id';
        callGetGuideId(button_db_name);
    }
};

// if any button click, save text first
$('#default-button-4').on('tap', function () {
    // save textArea here first
    callCreateText(this.id);
});

$('#default-button-3').on('tap', function () {
    callCreateText(this.id);
});
