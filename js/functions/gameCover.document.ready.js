/*
mui(document.body).on('tap', '.mui-btn', function(e) {
    // set button status to loading
    mui(this).button('loading');
    setTimeout(function() {
        mui(this).button('reset');
    }.bind(this), 2000);
});
 */

let html_ready = function (pageType) {
    if (pageType === 'stuff') {
        //alert('ll')
        $('#introtext').html(intro_html);

        //console.log('radt')
        gotoPage(gameid);
        //collapse_event_gen();
        //console.log(lineImage[2])
        //collapse_img_show(gameid, pageType, lineFlag);
        $('.mui-table-view-cell.mui-collapse').css({
            'background-color': bg_color + lowPR
        });
        collapse_img_show(gameid, pageType, lineFlag);
        collapse_event_gen();
    }

    if (pageType === 'setup') {

        //console.log(document.getElementById('setup_tab').innerHTML)
        //console.log(html1)
        $('#setup_tab').html(html1);
        //console.log('ready')
        collapse_img_show(gameid, pageType, lineFlag);
        collapse_event_gen();
        gotoPage(gameid);
        //collapse_event_gen();
        //collapse_img_show(gameid, pageType, lineFlag);
        $('.mui-table-view-cell.mui-collapse').css({
            'background-color': bg_color + lowPR
        });
        change_tab_theme(theme_color, 0);
        $('#gameSetup').css({
            'color': theme_color
        });


        //change_tab_theme(theme_color, 0);
    }
    if (pageType === 'flow') {
        var item2 = document.getElementById('flow_tab');
        item2.innerHTML = html2;
        change_tab_theme(theme_color, 1);
        collapse_img_show(gameid, pageType, lineFlag);
        collapse_event_gen();
    }
    if (pageType === 'end') {
        //console.log(html3)
        var item3 = document.getElementById('end_tab');
        item3.innerHTML = html3;
        change_tab_theme(theme_color, 2);
        collapse_img_show(gameid, pageType, lineFlag);
        collapse_event_gen();
    }
};

let create_html_txt = function (pageType) {
    $.each(lineFlag, function (index, content) {
        lineNum = index + 1;
        lineType = lineFlag[index];
        if (lineType === 'txt') {
            add_no_collapse_text(pageType);
        }
        if (lineType === 'img') {
            add_collapse(pageType);
        }
        a_with_value = a_template.replace('%value%', lineText[index]);
        add_a(pageType, lineType, lineNum);
    });

    end_data(pageType);
    //console.log(html2)
    //html_ready(pageType)
    //html_ready(pageType);
};

let create_html_img = function (pageType) {
    $.each(lineFlag, function (index, content) {
        lineNum = index + 1
    });
    //console.log(html3);
    //console.log(pageType)
    html_ready(pageType)
    //console.log('finish')
    //console.log(html3)
};

//async function ajax_wait(gameid, pageType) {
function ajax_wait(gameid, pageType) {
    let promise1 = getPageLineNum(gameid, pageType);
    promise1.then(function (data1) {
        lineFlag = data1;
        //console.log(lineFlag)
        ajax_wait_text(gameid, pageType, lineFlag)
    });
}

function ajax_wait_text(gameid, pageType, lineFlag) {
    var promise_array = [];
    var lock = true
    //$.each(lineFlag, function(index, content){
    //console.log('fdadf')

}

async function ajax_wait_subpage(gameid, pageno) {
    subpage_url = await getSubPageUrl(gameid, pageno)
    //console.log(subpage_url)
}

function ajax_wait_img(gameid, pageType, lineFlag) {
    console.log('in ajax img');
    let promise_array = [];
    //$.each(lineFlag, function(index, content){
    let lineNumTotal = lineFlag.length + 1
}

if (current_page === 'gamepic') {
    $('#back_arrow').attr('id', gameid);
    $(document).ready(function () {
        gotoPage(gameid)
    });
}

if (current_page === 'gameintro') {
    mui.previewImage();
    $('#back_arrow').attr('id', gameid);
    pageType = 'stuff';
    // this will create stuff page
    ajax_wait(gameid, pageType);
}

if (current_page === 'gamecover') {
    console.log("at gamecover page");
    console.log(gameid);
    getIfHasSubPage(gameid);
    console.log(hasSubPage_flag);
    if (hasSubPage_flag) {
        button5 = "开盒即玩"
    } else {
        button5 = "欢迎上传规则"
    }
    (function ($, doc) {
        $.init();
        $.ready(function () {
            let modNamePicker = new $.PopPicker();
            modNamePicker.setData([{
                value: '0',
                text: '0-EN-Publisher'
            }, {
                value: '1',
                text: '85-EN-Publisher'
            }, {
                value: '2',
                text: '120-EN-Publisher'
            },{
                value: '3',
                text: '0-CN-SCH-Other'
            },{
                value: '4',
                text: '0-CN-TCH-Other'
            },{
                value: '5',
                text: '0-CN-SCH-Publisher'
            },{
                value: '6',
                text: '0-CN-TCH-Publisher'
            },{
                value: '7',
                text: '0-EN-BGG'
            },{
                value: '8',
                text: '0-EN-Other'
            },{
                value: '9',
                text: '120-CN-SCH-Publisher'
            },{
                value: '10',
                text: '120-CN-TCH-Other'
            },{
                value: '11',
                text: '120-CN-SCH-Other'
            },{
                value: '12',
                text: '0-EN-ENG-Publisher-RulesReference'
            },{
                value: '13',
                text: '85-CN-SCH-Other-非官方中文规则书'
            }]);
            let showModNamePickerButton = doc.getElementById('modNamePicker');
            let modNameResult = doc.getElementById('modNameResult');
            let modNotice = doc.getElementById('modNotice');
            showModNamePickerButton.addEventListener('tap', function (event) {
                modNamePicker.show(function (items) {
                    modNameResult.innerText = items[0].value;
                    modNotice.innerText = '已选pdf样式：'+items[0].text;
                });
            }, false);
        });
    })(mui, document);
    queryFolderInfo();
}

let folder_query_url = 'http://180.76.244.130:3000/folder/getFolderFileList';

let queryFolderInfo=function(folder_query_url){
    $.ajax({
        url: folder_query_url,
        dataType: "json",
        success: function(data) {
            let file_result = '';
            console.log(typeof data);
            console.log(data);
            data.forEach(function (element) {
                console.log(element);
                file_result += element.gstone_id + "\n"
            });
            $('#folderList').html('已上传pdf文件列表:'+file_result);
        },
        error: function(err) {
            console.log('there is error getting progress')
        }
    });
}

if (current_page === 'gamerule') {
    console.log("in document ready gamerule");
    $('#back_arrow').attr('id', gameid);

    lineText = [];
    lineImage = [];
    //var lineNo = []
    lineFlag = [];
    pageType = 'setup'
    // this will create setup page
    //ajax_wait(gameid, pageType);

}
