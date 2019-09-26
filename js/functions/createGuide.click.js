// create guide

// TODO: get guide list
let page_address_seg = "createPage.html?pageid=%data%";

// get user_id globally
let index = window.location.href.lastIndexOf("=");
let url_length = window.location.href.length;
let user_id = window.location.href.substring(index + 1, url_length);
console.log('user_id=' + user_id);


$("#create_guide_button").on('click', function() {
    console.log('create_guide_button clicked');
    // get guide_id from ajax
    //let guide_id = 0;
    $(`#slot-1`).empty();
    $(`#slot-2`).empty();
    $(`#slot-3`).empty();
    $(`#slot-4`).empty();
    callGetGuideId();
});

let addButtonFunction= function(guide_id){
    let time = Date.now();
    $('#slot-5').empty();
    $('#slot-5').prepend(`<div class="mui-card" id="guide_${guide_id}"></div>`);
    let guide_id_element = $(`#guide_${guide_id}`);
    guide_id_element.prepend(`<div class="mui-card-header mui-card-media" id="guide_${guide_id}_pic" style="height:40vw;background-image:url(../../img/interface/guide-default.png)"></div>`);
    guide_id_element.append(`<div class="mui-card-content" id="guide_${guide_id}_content"></div>`);
    $(`#guide_${guide_id}_content`).prepend(`<div class="mui-card-content-inner" id="guide_${guide_id}_inner_content"></div>`);
    $(`#guide_${guide_id}_inner_content`).append(`<div class="mui-col-sm-12"><div>Posted on ${time}</div></div>`);
    $(`#guide_${guide_id}_inner_content`).append(`<div class="mui-col-sm-12"><input type="text" class="mui-input-clear" id="guide_${guide_id}_name" placeholder="请输入流名称"></div>`);

    // add click response to picture
    // use mui event management here
    //$(`#guide_${guide_id}_pic`).on('click', function(){
    // on cellphone it is tap
    //let guide_pic = `#guide_${guide_id}_pic`;
    let guide_id_pic_element = $(`#guide_${guide_id}_pic`);
    let guide_name_elemnt = $(`#guide_${guide_id}_name`);
    guide_id_pic_element.on('tap',function(){
        //console.log(`${guide_name} tapped`);
        let guide_name = guide_name_elemnt.val();
        if(guide_name === ''||guide_name === undefined||guide_name === null){
            alert('请输入流名称(必填)');
            return
        }
        callSaveGuideName(guide_id, guide_name);
    });
    /*
    guide_id_pic_element.on('click',function(){
        console.log(`${guide_name} tapped`);
        callGetPageId(guide_id);
    });
    */
};

let callSaveGuideName= function(guide_id, guide_name){
    $.ajax({
        url: 'http://180.76.244.130:3000/database/updateAttribute',
        type: 'GET',
        data:{
            table_name: 'guide_table',
            attribute_name: 'guide_name',
            attribute_value: guide_name,
            key_name: 'guide_id',
            key_value: guide_id
        }
    }).done(function(data){
        console.log(data);
        callGetPageId(guide_id);
    });
};

let callGetGuideId = function(){
    $.ajax({
        url: 'http://180.76.244.130:3000/guide/writeGuideDB',
        type: 'GET',
        data:{
            user_id: user_id
        }
    }).done(function(guideId){
        console.log('Going to get GuideId');
        console.log('guide id is '+guideId);
        addButtonFunction(guideId)
    });
};

let callGetPageId = function(guide_id){
    $.ajax({
        url: 'http://180.76.244.130:3000/guide/checkRootPage',
        type: 'GET',
        data: {guide_id: guide_id}
    }).done(function(page_id){
        console.log('Going to get PageId');
        console.log('page_id is '+page_id);
        saveRootPageId(guide_id, page_id);
    });
};

let saveRootPageId = function(guide_id, page_id){
    $.ajax({
        url: 'http://180.76.244.130:3000/database/saveRootPageId',
        type: 'GET',
        data: {
            guide_id: guide_id,
            page_id: page_id
        }
    }).done(function(data){
        console.log('saveRootPageId result is '+data);
        savePageId(guide_id, page_id);
    });
};

let savePageId = function(guide_id, page_id){
    $.ajax({
        url: 'http://180.76.244.130:3000/database/savePageId',
        type: 'GET',
        data: {
            guide_id: guide_id,
            page_id: page_id
        }
    }).done(function(data){
        console.log('savePageId result is '+data);
        switchPage(page_address_seg, page_id);
    });
};

let getRootPageId=function(guide_id){
    $.ajax({
        url: 'http://180.76.244.130:3000/database/getAttribute',
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
        url: 'http://180.76.244.130:3000/guide/getUserGuideList',
        type: 'GET',
        data:{
            user_id: user_id,
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
        addGuideToSlot(slot_count, guide_id, guide_name);

        // add click response to picture
        // use mui event management here
        //$(`#guide_${guide_id}_pic`).on('click', function(){
        // on cellphone it is tap
        let guide_id_pic_element = $(`#guide_${guide_id}_pic`);
        guide_id_pic_element.on('tap', function () {
            console.log(`#guide_${guide_id}_pic tapped`);
            getRootPageId(guide_id);
        });
        slot_count = slot_count + 1;
    }

    /*
    guide_id_pic_element.on('click',function(){
        console.log(`${guide_name} tapped`);
        callGetPageId(guide_id);
    });
    */
};

getUserGuides('');

$('#user_search_button').on('tap',function () {
   let search_word = $('#user_search_input').val();
    $(`#slot-1`).empty();
    $(`#slot-2`).empty();
    $(`#slot-3`).empty();
    $(`#slot-4`).empty();
   getUserGuides(search_word);
});
