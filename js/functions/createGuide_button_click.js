// create guide
$("#create_guide_button").on('click', function() {
    console.log('create_guide_button clicked');
    // get guide_id from ajax
    //let guide_id = 0;
    callGetGuideId();
});

let addButtonFunction= function(guide_id){
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
    guide_id_pic_element.on('tap',function(){
        console.log(`${guide_name} tapped`);
        callGetPageId(guide_id);
    });
    guide_id_pic_element.on('click',function(){
        console.log(`${guide_name} tapped`);
        callGetPageId(guide_id);
    });
};

let callGetGuideId = function(){
    $.ajax({
        url: 'http://180.76.244.130:3000/database/writeGuideDB',
        type: 'GET',
    }).done(function(guideId){
        console.log('Going to get GuideId');
        console.log('guide id is '+guideId);
        addButtonFunction(guideId)
    });
};

let callGetPageId = function(guide_id){
    $.ajax({
        url: 'http://180.76.244.130:3000/database/writePageDB',
        type: 'GET',
        data: {guide_id: guide_id}
    }).done(function(page_id){
        console.log('Going to get PageId');
        console.log('guide id is '+page_id);
        switchPage(page_id);
    });
};

let page_address_seg = "createPage.html?pageid=%data%";

let switchPage = function(page_id) {
        let index = window.location.href.lastIndexOf("\/");
        let address_prefix = window.location.href.substring(0, index + 1);
        console.log(address_prefix);

        let address_postfix = page_address_seg.replace("%data%", page_id);
        console.log(address_postfix);

        let new_address = address_prefix + address_postfix;
        console.log(new_address);

        location.href = new_address;
        //window.location.reload();
        //$("meta[property='pageid']").attr("content", page_id);
};