/*
mui(document.body).on('tap', '.mui-btn', function(e) {
    // set button status to loading
    mui(this).button('loading');
    setTimeout(function() {
        mui(this).button('reset');
    }.bind(this), 2000);
});
 */

let create_html_img = function (pageType) {
    $.each(lineFlag, function (index, content) {
        lineNum = index + 1
    });
    html_ready(pageType)
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
    let promise_array = [];
    let lock = true
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

let queryFolderInfo=function(folder_query_url, folder_path){
    console.log('going to query folder file list');
    $.ajax({
        url: folder_query_url,
        data:{
            uploadFolder: folder_path
        },
        dataType: "json",
        success: function(data) {
            let file_result = '';
            console.log(typeof data);
            console.log(data);
            data.forEach(function (element) {
                console.log(element);
                file_result += element + "\n"
            });
            $('#folderList').html('以下规则pdf文件已上传(包含即可)：'+file_result);
        },
        error: function(err) {
            console.log('there is error getting progress')
        }
    });
};

let currentPage = 'gameCover';
if (currentPage === 'gameCover') {
    console.log("at gameCover page");
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
                    modNotice.innerText = '已选择pdf样式：'+items[0].text;
                });
            }, false);
        });
    })(mui, document);

    let folder_query_url = `https://${serverDomain}/node/folder/getFolderFileList`;
    let folder_path = '/var/tmp/pdf-upload';
    queryFolderInfo(folder_query_url, folder_path);
}

