function btn5_click() {
    //alert('hello');
    //Page = plus.webview.getWebviewById('gameRule.html');
    //mui.fire(Page, 'show', {
    //id: gameid
    //});
    let url_page = "id=" + gameid;
    let storage = window.localStorage;

    getSubPageUrl(gameid, 1);
    console.log(subpage_url);

    storage.setItem("subpage_url", subpage_url);
    storage.setItem("subpage_id", "1");
    mui.openWindow({
        url: "gameRule.html?" + url_page,
        id: "rule",
        createNew: false,
        show: {
            autoShow: true
        },
        waiting: {
            autoShow: true, //自动显示等待框，默认为true
            title: '正在加载...' //等待对话框上显示的提示内容
        }
    })
}

$('#upload_background_button').on('click',function () {
	console.log('upload_background_button clicked');
    $('#bg_img_file').click();
});

$("#bg_img_file").on('change', function() {
	console.log('bg_img_file changed');
	$("#background_submit_form").submit();
});

// create guide
$("#create_guide_button").on('click', function() {
    console.log('create_guide_button clicked');
    // get guide_id from ajax
    let guide_id = 0;
    let time = "20190816";
    $('#mui_content_area').prepend(`<div class="mui-card" id="guide_${guide_id}"></div>`);
    let guide_id_element = $(`#guide_${guide_id}`);
    guide_id_element.prepend(`<div class="mui-card-header mui-card-media" id="guide_${guide_id}_pic" style="height:40vw;background-image:url(../../img/interface/guide-default.png)"></div>`);
    guide_id_element.append(`<div class="mui-card-content" id="guide_${guide_id}_content"></div>`);
    $(`#guide_${guide_id}_content`).prepend(`<div class="mui-card-content-inner" id="guide_${guide_id}_inner_content"></div>`);
    $(`#guide_${guide_id}_inner_content`).append(`<div>Posted on ${time}<div style="color: #333;">你的第一个流</div></div>`);

    // add click response to picture
    $(`#guide_${guide_id}_pic`).on('click', function(){
        // get page_id from ajax
        let page_id = 0;
        switchPage(page_id)
    });
});

let page_address_seg = "createPage.html/?pageid=%data%";

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