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