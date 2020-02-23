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

    let selectorMap = {
        0:{value: '0', text: '0-EN-Publisher'},
        1:{value: '1', text: '85-EN-Publisher'},
        2:{value: '2', text: '120-EN-Publisher'},
        3:{value: '3', text: '0-EN-Publisher-NoSplit'},
        4:{value: '4', text: '0-CN-SCH-Publisher'},
        5:{value: '5', text: '85-CN-SCH-Publisher'},
        6:{value: '6', text: '120-CN-SCH-Publisher'},
        7:{value: '7', text: '0-CN-TCH-Publisher'},
        8:{value: '8', text: '85-CN-TCH-Publisher'},
        9:{value: '9', text: '120-CN-TCH-Publisher'},
        10:{value: '10', text: '0-EN-Publisher-RulesReference'},
        11:{value: '11', text: '85-EN-Publisher-RulesReference'},
        12:{value: '12', text: '120-EN-Publisher-RulesReference'},
        13:{value: '13', text: '0-CN-SCH-Publisher-其他规则'},
        14:{value: '14', text: '85-CN-SCH-Publisher-其他规则'},
        15:{value: '15', text: '120-CN-SCH-Publisher-其他规则'},
        16:{value: '16', text: '0-CN-TCH-Publisher-其他规则'},
        17:{value: '17', text: '85-CN-TCH-Publisher-其他规则'},
        18:{value: '18', text: '120-CN-TCH-Publisher-其他规则'},

        19:{value: '19', text: '0-CN-SCH-Other-非官方中文规则书'},
        20:{value: '20', text: '85-CN-SCH-Other-非官方中文规则书'},
        21:{value: '21', text: '120-CN-SCH-Other-非官方中文规则书'},
        22:{value: '22', text: '0-CN-TCH-Other-非官方中文规则书'},
        23:{value: '23', text: '85-CN-TCH-Other-非官方中文规则书'},
        24:{value: '24', text: '120-CN-TCH-Other-非官方中文规则书'},
        25:{value: '25', text: '0-EN-Other-UnofficialRulebook'},
        26:{value: '26', text: '85-EN-Other-UnofficialRulebook'},
        27:{value: '27', text: '120-EN-Other-UnofficialRulebook'},
        28:{value: '28', text: '0-CN-SCH-Other-其他规则'},
        29:{value: '29', text: '85-CN-SCH-Other-其他规则'},
        30:{value: '30', text: '120-CN-SCH-Other-其他规则'},

        31:{value: '31', text: '0-EN-BGG-UnofficialRulebook'},
        32:{value: '32', text: '85-EN-BGG-UnofficialRulebook'},
        33:{value: '33', text: '120-EN-BGG-UnofficialRulebook'},
        34:{value: '34', text: '0-CN-SCH-Other-非官方中文规则书-NoSplit'},
        35:{value: '35', text: '0-CN-SCH-Other-官方中文规则书-NoSplit'}
    };
    let get_rank_url = `https://${serverDomain}/node/database/getSelectorRank`;
    let modNamePickerArray = [];
    $.ajax({
        url: get_rank_url,
        dataType: "json",
        success: function(data) {
            for(let index in data){
                if(data.hasOwnProperty(index)){
                    modNamePickerArray[index] = selectorMap[data[index]["mode_no"]]
                }
            }
            (function ($, doc) {
                $.init();
                $.ready(function () {
                    let modNamePicker = new $.PopPicker();
                    modNamePicker.setData(modNamePickerArray);
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
        },
        error: function(err) {
            console.log('there is error getting selector rank')
        }
    });

    let folder_query_url = `https://${serverDomain}/node/folder/getFolderFileList`;
    let folder_path = '/opt/mount/pdf-upload';
    queryFolderInfo(folder_query_url, folder_path);
}

