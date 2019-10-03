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


let changeButtonText=function(button_id, button_number){
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
        url: `https://${serverDomain}/node/database/getAttribute`,
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
        //console.log(element);
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
        url: `https://${serverDomain}/node/page/getPageAttribute`,
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

let getImageForPage=function(){
    $.ajax({
        url: `https://${serverDomain}/node/database/getAttribute`,
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

let changeStyle=function(){
    console.log('start to change style');
    $('#dummy-button-1').css('opacity','0').css('disabled',true);
    $('#dummy-button-2').css('opacity','0').css('disabled',true);
    $('#default-add-button').css('opacity','0').css('disabled',true);
    $('#default-sub-button').css('opacity','0').css('disabled',true);
};

let returnQRUrl=function() {
    let size = 100;
    let QRPrefix = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=`;
    let QRSuffix = window.location.href;
    return QRPrefix+QRSuffix;
};

let toggleQRCode=function(){
    let share_btn_ele = $('#share-button');
    let text = share_btn_ele.val();
    console.log(text);
    if (text === '取消') {
        $('#qr-image').attr('src', '');
        share_btn_ele.val('分享');
    }else{
        $('#qr-image').attr('src', returnQRUrl());
        share_btn_ele.val('取消');
        mui.toast('截屏后分享图片||让小伙伴扫码',{ duration:'long', type:'div' })
    }
};


let htmlBody = $('body');
let startX, startY, moveEndX, moveEndY, X, Y;
let headerFlag = false;
htmlBody.on('touchstart', function(e) {
    e.preventDefault();
    startX = e.touches[0].pageX;
    startY = e.touches[0].pageY;
});

htmlBody.on('touchmove', function(e) {
    e.preventDefault();
    moveEndX = e.changedTouches[0].pageX;
    moveEndY = e.changedTouches[0].pageY;
    X = moveEndX - startX;
    Y = moveEndY - startY;
    //if ( X > 0 ) {alert(‘向右’);}
    //else if ( X < 0 ) {alert(‘向左’);}
    let header_bar_ele = $('#mui-row-0');
    if ( Y > 0 && !headerFlag) {
        console.log('touch pull down');
        header_bar_ele.append(`<div class="mui-col-sm-2"><button type="button" class="mui-btn mui-btn-royal" id="back-button">返回</button></div>`);
        header_bar_ele.append(`<div class = "mui-col-sm-2"><button type = "button" class="mui-btn mui-btn-royal" id = "fullscreen-button">全屏</button></div>`);
        header_bar_ele.append(`<div class="mui-col-sm-2"><button type="button" class="mui-btn mui-btn-royal" id="share-button">分享</button></div>`);
        $('#back-button').on('tap',function(){history.back()});
        $('#fullscreen-button').on('tap', goToFullScreen);
        $('#share-button').on('tap', toggleQRCode);
        headerFlag = true;
    } else if ( Y < 0 && headerFlag) {
        console.log('touch pull up');
        header_bar_ele.empty();
        headerFlag = false;
    }
});



changeStyle();
callGetButtonText();
callGetPageText();
getImageForPage();