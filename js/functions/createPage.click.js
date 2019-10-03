// create Page
let fileName = '';
let button_address_seg = "choosePage.html?buttonid=%data%";
let guide_address_seg = "createGuide.html?userid=%data%";

// get page_id globally
let index = window.location.href.lastIndexOf("=");
let url_length = window.location.href.length;
let page_id = window.location.href.substring(index + 1, url_length);
console.log('page_id=' + page_id);

let button_map = {
    button1: 'default-button-1',
    button2: 'default-button-2',
    button3: 'default-button-3',
    button4: 'default-button-4',
};

let callGetButtonText = function () {
    $.ajax({
        url: `https://${serverDomain}/node/page/getButtonInfo`,
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

let getButtonText = function (button_list) {
    console.log(button_list);
    for (let element in button_list) {
        //element.hasOwnProperty()
        //console.log(element);
        let index = element.lastIndexOf("_");
        let button_number = element.substring(index - 1, index);
        console.log(button_number);
        let button_id = button_list[element];
        if (button_id === '' || button_id === null || button_id === undefined) {
            console.log('button is not set switch event off');
            // $(`#default-button-${button_number}`).off('tap');
        } else {
            let button_old_id = 'default-button-' + button_number;
            let button_new_id = 'button-' + button_id;
            let button_map_key = 'button' + button_number;
            let old_button_element = $(`#${button_old_id}`);
            $.ajax({
                url: `https://${serverDomain}/node/database/getAttribute`,
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
                console.log(button_map[button_map_key]);
                button_map[button_map_key] = button_new_id;
                console.log(button_map);
                // add event for new button
                $(`#${button_new_id}`).on('tap', function () {
                    callCreateText(this.id);
                });
            });
        }
    }
};

let callGetGuideId = function (button_db_name) {
    $.ajax({
        url: `https://${serverDomain}/node/database/getAttribute`,
        type: 'GET',
        data: {
            table_name: 'raw_control_table',
            attribute_name: 'guide_id',
            key_name: 'page_id',
            key_value: page_id
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
    // when submit create new image id
    // automatically save image id to page
    createImageId();
});

let createImageId = function () {
    $.ajax({
        url: `https://${serverDomain}/node/image/writeImageDB`,
        type: 'GET',
        data: {
            page_id: page_id
        }
    }).done(function (image_id) {
        console.log('Returning image_id is ' + image_id);
        fileName = image_id + '.jpg';
        let form = $('#background_submit_form');
        let form_data = new FormData();
        let file_data = $('#bg_img_file').prop('files')[0];
        form_data.append('file', file_data);
        //form_data.append('filename', fileName);
        callChangeBackground(form, form_data);
    });
};

let getImageForBackground = function () {
    $.ajax({
        url: `https://${serverDomain}/node/database/getAttribute`,
        type: 'GET',
        data: {
            table_name: 'raw_control_table',
            attribute_name: 'image1_id',
            key_name: 'page_id',
            key_value: page_id
        }
    }).done(function (image_id) {
        console.log('Returning image_id is ' + image_id);
        fileName = image_id + '.jpg';
        if (fileName !== '0.jpg') {
            showBackground(fileName);
        }
    });
};

let callChangeBackground = function (form, form_data) {
    let xhr = new XMLHttpRequest();
    let url_action = form.attr('action') + "/?file_name=" + fileName;
    console.log(url_action);
    xhr.open(form.attr('method'), url_action, true);
    xhr.withCredentials = true;
    let progress_element = $('#progress');
    let uploadProgress = function (evt) {
        //console.log(evt);
        if (evt.lengthComputable) {
            let percentComplete = Math.round(evt.loaded * 100 / evt.total);
            progress_element.val(percentComplete - 1);
        }
    };
    let uploadComplete = function () {
        progress_element.val(0);
        console.log('Going to change background');
        // wait for blurred image
        // show blurred minimized image here first
        // todo: play blurring magic first wait 2 seconds after upload response is received
        showBackground(fileName);
    };

    let uploadFailed = function () {
        progress_element.val(0);
    };
    xhr.upload.addEventListener("progress", uploadProgress, false);
    xhr.addEventListener("load", uploadComplete, false);
    xhr.addEventListener("error", uploadFailed, false);
    xhr.send(form_data);

};

let createTextHandler = function () {
    callCreateText(this.id)
};

let default_add_button_event = function () {
    let db4 = $(`#${button_map.button4}`);
    let sub_btn_ele = $('#default-sub-button');
    let add_btn_ele = $('#default-add-button');
    if (db4.css('opacity') === '0') {
        db4.css('opacity', 100);
        db4.on('tap', createTextHandler);
        sub_btn_ele.css('opacity', 100);
        sub_btn_ele.on('tap', default_sub_button_event);
        return;
    }
    let db3 = $(`#${button_map.button3}`);
    if (db3.css('opacity') === '0') {
        db3.css('opacity', 100);
        db3.on('tap', createTextHandler);
        return;
    }
    let db2 = $(`#${button_map.button2}`);
    if (db2.css('opacity') === '0') {
        db2.css('opacity', 100);
        db2.on('tap', createTextHandler);
        return;
    }
    let db1 = $(`#${button_map.button1}`);
    if (db1.css('opacity') === '0') {
        db1.css('opacity', 100);
        db1.on('tap', createTextHandler);
        add_btn_ele.css('opacity', 0);
        add_btn_ele.off('tap');
    } else {
        add_btn_ele.css('opacity', 0);
        add_btn_ele.off('tap');
    }
};

let performDelete = function (element, button_number) {
    if (!element.includes('default')) {
        // remove to page id
        let button_id = element.split('-')[1];
        let o = {
            table_name: 'raw_button_table',
            attribute_name: 'button_to_page_id',
            attribute_value: '',
            key_name: 'button_id',
            key_value: button_id
        };
        callSaveAttribute(o);
        let p = {
            table_name: 'raw_control_table',
            attribute_name: 'button' + button_number + '_id',
            attribute_value: '',
            key_name: 'page_id',
            key_value: page_id
        };
        callSaveAttribute(p);
        button_map['button' + button_number] = 'default-button-' + button_number;
        console.log(button_map);
    }
};

let default_sub_button_event = function () {
    let db1 = $(`#${button_map.button1}`);
    let add_btn_ele = $('#default-add-button');
    let sub_btn_ele = $('#default-sub-button');
    if (db1.css('opacity') === '1') {
        db1.css('opacity', 0);
        db1.off('tap');
        performDelete(button_map.button1, 1);
        add_btn_ele.css('opacity', 100);
        add_btn_ele.on('tap', default_add_button_event);
        return;
    }
    let db2 = $(`#${button_map.button2}`);
    if (db2.css('opacity') === '1') {
        db2.css('opacity', 0);
        db2.off('tap');
        performDelete(button_map.button2, 2);
        return;
    }
    let db3 = $(`#${button_map.button3}`);
    if (db3.css('opacity') === '1') {
        db3.css('opacity', 0);
        db3.off('tap');
        performDelete(button_map.button3, 3);
        return;
    }
    let db4 = $(`#${button_map.button4}`);
    if (db4.css('opacity') === '1') {
        db4.css('opacity', 0);
        db4.off('tap');
        performDelete(button_map.button4, 4);
        sub_btn_ele.css('opacity', 0);
        sub_btn_ele.off('tap');
    }
};

$('#default-sub-button').on('tap', default_sub_button_event);
$('#default-add-button').on('tap', default_add_button_event);

$('#default-add-button-2').on('click', function () {
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
        url: `https://${serverDomain}/node/text/writeTextDB`,
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
        url: `https://${serverDomain}/node/button/writeButtonDB`,
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
        url: `https://${serverDomain}/node/page/getButtonInfo`,
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
    callCreateText(this.id);
});
$('#default-button-3').on('tap', function () {
    callCreateText(this.id);
});
$('#default-button-2').on('tap', function () {
    callCreateText(this.id);
});
$('#default-button-1').on('tap', function () {
    callCreateText(this.id);
});


let callGetPageText = function () {
    $.ajax({
        url: `https://${serverDomain}/node/database/getAttribute`,
        type: 'GET',
        data: {
            table_name: 'raw_control_table',
            attribute_name: 'text1_id',
            key_name: 'page_id',
            key_value: page_id
        }
    }).done(function (text1_id) {
        console.log('Returning page_text is ' + text1_id);
        getTextContent(text1_id)
    });
};

let getTextContent = function (text_id) {
    $.ajax({
        url: `https://${serverDomain}/node/text/getTextAttribute`,
        type: 'GET',
        data: {
            attribute_name: 'textContent',
            text_id: text_id
        }
    }).done(function (text_content) {
        console.log('returning text content is ' + text_content);
        $('#desc_input').val(text_content)
    });
};

let callReturnHome = function () {
    $.ajax({
        url: `https://${serverDomain}/node/database/getAttribute`,
        type: 'GET',
        data: {
            table_name: 'raw_control_table',
            attribute_name: 'guide_id',
            key_name: 'page_id',
            key_value: page_id
        },
        dataType: "json"
    }).done(function (guide_id) {
        console.log('Returning guide_id=' + guide_id);
        callGetUser(guide_id);
    });
};

let callGetUser = function (guide_id) {
    $.ajax({
        url: `https://${serverDomain}/node/database/getAttribute`,
        type: 'GET',
        data: {
            table_name: 'guide_table',
            attribute_name: 'creator',
            key_name: 'guide_id',
            key_value: guide_id
        },
        dataType: "json"
    }).done(function (user_id) {
        console.log('Returning user_id=' + user_id);
        switchPage(guide_address_seg, user_id);
    });
};

$('#home-button').on('tap', function () {
    console.log('page_id=' + page_id);
    callReturnHome()
});

$('#fullscreen-button').on('tap', goToFullScreen);
$('#delete-button').on('tap', checkIfRoot);


callGetButtonText();
callGetPageText();
getImageForBackground();