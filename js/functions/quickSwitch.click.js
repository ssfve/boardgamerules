// create Page
let fileName = '';
let button_address_seg = "choosePage.html?buttonid=%data%";
let page_address_seg = "createPage.html?pageid=%data%";

// get button_id globally
let index = window.location.href.lastIndexOf("=");
let url_length = window.location.href.length;
let guide_id = window.location.href.substring(index + 1, url_length);
console.log('guide_id=' + guide_id);

let getPageList = function (guide_id) {
    $.ajax({
        url: `https://${serverDomain}/node/guide/getPageList`,
        type: 'GET',
        dataType: "json",
        data: {
            guide_id: guide_id
        }
    }).done(function (page_list) {
        console.log(page_list);
        addListElement(guide_id, page_list);
    });
};

let getPreviousPageId = function (page_address_seg, button_id) {
    $.ajax({
        url: `https://${serverDomain}/node/button/getPreviousPageId`,
        type: 'GET',
        data: {
            button_id: button_id
        }
    }).done(function (prev_page_id) {
        console.log('Returning prev_page_id=' + prev_page_id);
        switchPage(page_address_seg, prev_page_id);
    });
};

let addSwitchCheck = function (page_id) {
    let btnArray = ['返回', '编辑'];
    mui.confirm('按钮跳转已指定，是否编辑跳转页面？(不编辑则将返回按钮所在页)', '你好，指客！', btnArray, function (e) {
        if (e.index === 1) {
            console.log('你刚确认跳转');
            switchPage(page_address_seg, page_id);
        } else {
            console.log('你没有选择跳转，将返回');
            // get previous page id first then switch
            getPreviousPageId(page_address_seg, button_id);
        }
    })
};

let saveBranchPageId = function (guide_id, page_id) {
    $.ajax({
        url: `https://${serverDomain}/node/guide/savePageId`,
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

let createBranchPage = function (guide_id) {
    $.ajax({
        url: `https://${serverDomain}/node/page/createBranchPage`,
        type: 'GET',
        data: {
            guide_id: guide_id
        }
    }).done(function (page_id) {
        console.log('returning new branch pageid=' + page_id);
        updateAttribute('raw_button_table', 'button_to_page_id', page_id, 'button_id', button_id);
        saveBranchPageId(guide_id, page_id);
    });
};

let addListEvent = function (page_id) {
    let page_entry = $(`#page_${page_id}`);
    page_entry.on('tap', page_entry, function () {
        //first to do is to save button info
        //element is to page id
        let button_text = $('#desc_input').val();
        if (button_text === '' || button_text === undefined) {
            button_text = '下一步'
        }
        console.log(button_text);
        updateAttribute('raw_button_table', 'button_text', button_text, 'button_id', button_id);
        updateAttribute('raw_button_table', 'button_to_page_id', page_id, 'button_id', button_id);
        console.log(page_id);
        addSwitchCheck(page_id);
    });
};

let addListElementCheck = function (page_id, text_content) {
    let list_element = $("#guide_page_list");
    list_element.append(`<li class="mui-table-view-cell" id="page_${page_id}"><a class="mui-navigate-right">页面编号${page_id}${text_content}</a></li>`);
    // return only after this is appended
    addListEvent(page_id);
};

let getTextContent = function (text_id, page_id) {
    $.ajax({
        url: `https://${serverDomain}/node/text/getTextAttribute`,
        type: 'GET',
        data: {
            attribute_name: 'textContent',
            text_id: text_id
        }
    }).done(function (text_content) {
        console.log('returning text_content=' + text_content);
        addListElementCheck(page_id, text_content)
    });
};

let getTextContentCheck = function (page_id, text_id) {
    if (text_id === null || text_id === '' || text_id === undefined) {
        addListElementCheck(page_id, page_id);
    } else {
        getTextContent(text_id, page_id);
    }
};

let getTextInfo = function (page_id) {
    // get text id from specific page id
    $.ajax({
        url: `https://${serverDomain}/node/page/getPageAttribute`,
        type: 'GET',
        data: {
            attribute_name: 'text1_id',
            page_id: page_id
        }
    }).done(function (text_id) {
        console.log('returning text_id=' + text_id);
        getTextContentCheck(page_id, text_id);
    });
};

let addListElement = function (guide_id, page_list) {
    let page_array = page_list.split(",");
    page_array.forEach(function (element) {
        console.log('processing page_' + element);
        getTextInfo(element);
    });
};

let callGetButtonText = function () {
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
        $('#desc_input').val(button_text);
    });
};

getPageList();