// create guide

// TODO: get guide list
let page_address_seg = "showPage.html?pageid=%data%";

$("#create_guide_button").on('click', function () {
    console.log('create_guide_button clicked');
    // get guide_id from ajax
    //let guide_id = 0;
    callGetGuideId();
});

let addButtonFunction = function (guide_id) {
    let time = Date.now();
    $('#mui_content_area').prepend(`<div class="mui-card" id="guide_${guide_id}"></div>`);
    let guide_id_element = $(`#guide_${guide_id}`);
    guide_id_element.prepend(`<div class="mui-card-header mui-card-media" id="guide_${guide_id}_pic" style="height:40vw;background-image:url(../../img/interface/guide-default.png)"></div>`);
    guide_id_element.append(`<div class="mui-card-content" id="guide_${guide_id}_content"></div>`);
    $(`#guide_${guide_id}_content`).prepend(`<div class="mui-card-content-inner" id="guide_${guide_id}_inner_content"></div>`);
    $(`#guide_${guide_id}_inner_content`).append(`<div>Posted on ${time}<div style="color: #333;">你的第一个流</div></div>`);

    // add click response to picture
    // use mui event management here
    //$(`#guide_${guide_id}_pic`).on('click', function(){
    // on cellphone it is tap
    guide_name = `#guide_${guide_id}_pic`;
    let guide_id_pic_element = $(`#guide_${guide_id}_pic`);
    guide_id_pic_element.on('tap', function () {
        console.log(`${guide_name} tapped`);
        callGetPageId(guide_id);
    });
    /*
    guide_id_pic_element.on('click',function(){
        console.log(`${guide_name} tapped`);
        callGetPageId(guide_id);
    });
    */
};

let callGetGuideId = function () {
    $.ajax({
        url: `https://${serverDomain}/node/database/writeGuideDB`,
        type: 'GET',
    }).done(function (guideId) {
        console.log('Going to get GuideId');
        console.log('guide id is ' + guideId);
        addButtonFunction(guideId)
    });
};

let callGetPageId = function (guide_id) {
    $.ajax({
        url: `https://${serverDomain}/node/guide/checkRootPage`,
        type: 'GET',
        data: {guide_id: guide_id}
    }).done(function (page_id) {
        console.log('Going to get PageId');
        console.log('page_id is ' + page_id);
        saveRootPageId(guide_id, page_id);
    });
};

let saveRootPageId = function (guide_id, page_id) {
    $.ajax({
        url: `https://${serverDomain}/node/database/saveRootPageId`,
        type: 'GET',
        data: {
            guide_id: guide_id,
            page_id: page_id
        }
    }).done(function (data) {
        console.log('saveRootPageId result is ' + data);
        savePageId(guide_id, page_id);
    });
};

let savePageId = function (guide_id, page_id) {
    $.ajax({
        url: `https://${serverDomain}/node/database/savePageId`,
        type: 'GET',
        data: {
            guide_id: guide_id,
            page_id: page_id
        }
    }).done(function (data) {
        console.log('savePageId result is ' + data);
        switchPage(page_address_seg, page_id);
    });
};

let getRecommendedGuides = function () {
    // recommendation should be location focused
    // recommendation should be user focused
    // recommendation rely on good content
    $.ajax({
        url: `https://${serverDomain}/node/page/getValidGuides`,
        type: 'GET',
        dataType: 'json'
    }).done(function (guide_id_list) {
        console.log(guide_id_list);
        addGuide(guide_id_list)
    });
};

let getRootPageId=function(guide_id){
    $.ajax({
        url: `https://${serverDomain}/node/database/getAttribute`,
        type: 'GET',
        data:{
            table_name: 'guide_table',
            attribute_name: 'root_page_id',
            key_name: 'guide_id',
            key_value: guide_id
        }
    }).done(function (root_page_id) {
        console.log(root_page_id);
        switchPage(page_address_seg, root_page_id);
    });
};

let getUserGuides = function (search_word) {
    // recommendation should be location focused
    // recommendation should be user focused
    // recommendation rely on good content
    $.ajax({
        url: `https://${serverDomain}/node/guide/getGuideList`,
        type: 'GET',
        data:{
            search_word: search_word
        },
        dataType: 'json'
    }).done(function (guide_id_list) {
        console.log(guide_id_list);
        addGuide(guide_id_list)
    });
};

let addGuide = function (guide_id_list) {
    let time = Date.now();
    let slot_count = 1;
    for (let i in guide_id_list) {
        let guide_id = guide_id_list[i]['guide_id'];
        let guide_name = guide_id_list[i]['guide_name'];
        console.log(guide_id);
        console.log(slot_count);
        let o = {
            slot_count: slot_count,
            guide_id: guide_id,
            guide_name: guide_name,
            page_id: '',
            image_id: ''
        };
        getPageIdOnLoad(o);

        // add click response to picture
        // use mui event management here
        //$(`#guide_${guide_id}_pic`).on('click', function(){
        // on cellphone it is tap
        slot_count = slot_count + 1;
    }

    /*
    guide_id_pic_element.on('click',function(){
        console.log(`${guide_name} tapped`);
        callGetPageId(guide_id);
    });
    */
};

$('#user_search_button').on('tap',function () {
    let search_word = $('#user_search_input').val();
    $(`#slot-1`).empty();
    $(`#slot-2`).empty();
    $(`#slot-3`).empty();
    $(`#slot-4`).empty();
    getUserGuides(search_word);
});

getRecommendedGuides();