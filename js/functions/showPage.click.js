// create Page
let fileName = '';
let button_address_seg = "choosePage.html?buttonid=%data%";
let page_address_seg = "showPage.html?pageid=%data%";

// get page_id globally
let index = window.location.href.lastIndexOf("=");
let url_length = window.location.href.length;
let page_id = window.location.href.substring(index + 1, url_length);
console.log('page_id=' + page_id);

let callGetButtonText = function () {
    $.ajax({
        url: `http://${serverDomain}:${serverPort}/page/getButtonInfo',
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


let changeButtonText=function(button_id, button_number){
    $.ajax({
        url: `http://${serverDomain}:${serverPort}/database/getAttribute',
        type: 'GET',
        data: {
            table_name: 'raw_button_table',
            attribute_name: 'button_text',
            key_name: 'button_id',
            key_value: button_id
        }
    }).done(function (button_text) {
        console.log('Returning button text is ' + button_text);
        let button_old_id = 'default-button-' + button_number;
        let button_new_id = 'button-' + button_id;
        let old_button_element = $(`#${button_old_id}`);
        old_button_element.html(button_text);
        old_button_element.attr("id", button_new_id);
        addButtonEvent(button_id);
    });
};

let addButtonEvent=function(button_id){
    $.ajax({
        url: `http://${serverDomain}:${serverPort}/database/getAttribute',
        type: 'GET',
        data: {
            table_name: 'raw_button_table',
            attribute_name: 'button_to_page_id',
            key_name: 'button_id',
            key_value: button_id
        }
    }).done(function (button_to_page_id) {
        console.log('button_to_page_id=' + button_to_page_id);
        let button_new_id = 'button-' + button_id;
        let button_element = $(`#${button_new_id}`);
        button_element.on('tap',function () {
            switchPage(page_address_seg, button_to_page_id);
        });
    });
};

let getButtonText = function (button_list) {
    console.log(button_list);
    for (let element in button_list) {
        //element.hasOwnProperty()
        console.log(element);
        let button_id = button_list[element];
        if (button_id === '' || button_id === null || button_id === undefined) {
            console.log('button is not set');
            let index = element.indexOf('_');
            let button_number = element.substring(index-1, index);
            console.log('null button id is '+button_number);
            let null_button_element = $(`#default-button-${button_number}`);
            null_button_element.css('opacity','0');
            null_button_element.css('disabled',true);
        } else {
            let index = element.lastIndexOf("_");
            let button_number = element.substring(index - 1, index);
            changeButtonText(button_id, button_number);
        }
    }
};

let callGetGuideId = function (button_db_name) {
    $.ajax({
        url: `http://${serverDomain}:${serverPort}/page/getPageAttribute',
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
    let xhr = new XMLHttpRequest();
    xhr.open(form.attr('method'), form.attr('action'), true);
    xhr.withCredentials = true;
    let progress_element = $('#progress');
    let uploadProgress = function (evt) {
        //console.log(evt);
        if (evt.lengthComputable) {
            let percentComplete = Math.round(evt.loaded * 100 / evt.total);
            progress_element.val(percentComplete - 1);
        }
    };
    let uploadComplete = function (evt) {
        progress_element.val(0);
        console.log('Going to change background');
        // wait for blurred image
        // show blurred minimized image here first
        // todo: play blurring magic first wait 2 seconds after upload response is received
        /*
        const canvas = $('#canvas');
        canvas.css("opacity", "1");
        let canvasWidth = document.body.clientWidth; //document.width is obsolete
        let canvasHeight = document.body.clientHeight; //document.height is obsolete
        canvas.css('width', canvasWidth);
        canvas.css('height', canvasHeight);

        const context = document.getElementById('canvas').getContext('2d');
        let img_blur = new Image();
        img_blur.src = `http://serverDomain:18002/${fileName}`;
        img_blur.onload = () => {
            context.drawImage(img_blur, 0, 0, canvasWidth, canvasHeight);
        };
        */
        //$('#background-image-cache').attr('src', `url(http://serverDomain:18000/${fileName})`).on('load', function() {
        //const context = document.getElementById('canvas').getContext('2d');
        /*
        let img = new Image();
        img.src = `http://serverDomain:18000/${fileName}`;
        img.onload = () => {
            context.drawImage(img, 0, 0);
        };
         */
        $('<img/>').attr('src', `http://serverDomain:18001/${fileName}`).on('load', function() {
            console.log('original img is downloaded');
            $(this).remove(); // prevent memory leaks as @benweet suggested
            // hide canvas here
            //$('#canvas').css("opacity","0");
            //$('body').css('background-image', $(this).attr("src"));
            $('body').css('background-image', `url(http://serverDomain:18001/${fileName})`);
        });
        $('<img/>').attr('src', `http://serverDomain:18000/${fileName}`).on('load', function() {
            console.log('original img is downloaded');
            $(this).remove(); // prevent memory leaks as @benweet suggested
            // hide canvas here
            //$('#canvas').css("opacity","0");
            $('body').css('background-image', `url(http://serverDomain:18000/${fileName})`);
        });
    };

    let uploadFailed = function (evt) {
        progress_element.val(0);
    };
    xhr.upload.addEventListener("progress", uploadProgress, false);
    xhr.addEventListener("load", uploadComplete, false);
    xhr.addEventListener("error", uploadFailed, false);
    xhr.send(form_data);

};

let callCreateText = function (button_default_name) {
    let text_value = $('#desc_input').val();
    console.log(text_value);
    if (text_value === '' || text_value === undefined) {
        text_value = 'PG-DFLT-TXT'
    }
    $.ajax({
        url: `http://${serverDomain}:${serverPort}/text/writeTextDB',
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
        url: `http://${serverDomain}:${serverPort}/button/writeButtonDB',
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
        url: `http://${serverDomain}:${serverPort}/page/getButtonInfo',
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

let callGetPageText = function () {
    $.ajax({
        url: `http://${serverDomain}:${serverPort}/database/getAttribute',
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
        url: `http://${serverDomain}:${serverPort}/text/getTextAttribute',
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

let getImageForPage=function(){
    $.ajax({
        url: `http://${serverDomain}:${serverPort}/database/getAttribute',
        type: 'GET',
        data:{
            table_name: 'raw_control_table',
            attribute_name: 'image1_id',
            key_name: 'page_id',
            key_value: page_id
        }
    }).done(function (image_id) {
        console.log('Returning image_id is ' + image_id);
        fileName = image_id + '.jpg';
        showBackground(fileName);
    });
};

let showBackground=function(file_name){
    $('<img/>').attr('src', `http://serverDomain:18001/${file_name}`).on('load', function() {
        console.log('blurred and compressed img is downloaded');
        $(this).remove(); // prevent memory leaks as @benweet suggested
        $('body').css('background-image', `url(http://serverDomain:18001/${file_name})`);
    });
    $('<img/>').attr('src', `http://serverDomain:18000/${file_name}`).on('load', function() {
        console.log('original img is downloaded');
        $(this).remove(); // prevent memory leaks as @benweet suggested
        $('body').css('background-image', `url(http://serverDomain:18000/${file_name})`);
    });
};

let changeStyle=function(){
    console.log('start to change style');
    $('#dummy-button-1').css('opacity','0');
    $('#dummy-button-2').css('opacity','0');
    $('#default-add-button').css('opacity','0');
    $('#default-sub-button').css('opacity','0');
    $('#dummy-button-1').css('disabled',true);
    $('#dummy-button-2').css('disabled',true);
    $('#default-add-button').css('disabled',true);
    $('#default-sub-button').css('disabled',true);
};

$('#back-button').on('tap',function(){
    history.back()
});

$('#fullscreen-button').on('tap', goToFullScreen);

changeStyle();
callGetButtonText();
callGetPageText();
getImageForPage();