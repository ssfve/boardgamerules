// create Page
let fileName = '';
let button_address_seg = "choosePage.html?buttonid=%data%";
let page_address_seg = "createPage.html?pageid=%data%";

// get button_id globally
let index = window.location.href.lastIndexOf("=");
let url_length = window.location.href.length;
let button_id = window.location.href.substring(index + 1, url_length);
console.log('button_id=' + button_id);

let callGetGuideId = function (button_id) {
    $.ajax({
        url: 'http://180.76.244.130:3000/button/getGuideId',
        type: 'GET',
        data: {
            button_id: button_id
        },
        dataType: "json"
    }).done(function (guide_id) {
        console.log('Returning guide_id=' + guide_id);
        getButtonToPageId(button_id, guide_id);
    });
};

let getButtonToPageId = function (button_id, guide_id) {
    $.ajax({
        url: 'http://180.76.244.130:3000/database/getAttribute',
        type: 'GET',
        data: {
            table_name: 'raw_button_table',
            attribute_name: 'button_to_page_id',
            key_name: 'button_id',
            key_value: button_id
        }
    }).done(function (to_page_id) {
        console.log(to_page_id);
        getPageList(to_page_id, guide_id);
    });
};

let getPageList = function (to_page_id, guide_id) {
    $.ajax({
        url: 'http://180.76.244.130:3000/guide/getPageList',
        type: 'GET',
        dataType: "json",
        data: {
            guide_id: guide_id
        }
    }).done(function (page_list) {
        console.log(page_list);
        addListElement(guide_id, page_list, to_page_id);
    });
};

let getPreviousPageId = function (page_address_seg, button_id) {
    $.ajax({
        url: 'http://180.76.244.130:3000/button/getPreviousPageId',
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
    let btnArray = ['否', '是'];
    mui.confirm('是否跳转至选择页面？(不跳转将直接返回)', 'Hello MUI', btnArray, function (e) {
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
        url: 'http://180.76.244.130:3000/guide/savePageId',
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

let saveButtonAttribute = function (attribute_name, attribute_value, button_id) {
    $.ajax({
        url: 'http://180.76.244.130:3000/button/saveButtonAttribute',
        type: 'GET',
        data: {
            attribute_name: attribute_name,
            attribute_value: attribute_value,
            button_id: button_id
        }
    }).done(function (data) {
        console.log('returning result is ' + data);
    });
};

let saveAttribute = function (table_name, attribute_name, attribute_value, key_name, key_value) {
    $.ajax({
        url: 'http://180.76.244.130:3000/database/updateAttribute',
        type: 'GET',
        data: {
            table_name: table_name,
            attribute_name: attribute_name,
            attribute_value: attribute_value,
            key_name: key_name,
            key_value: key_value
        }
    }).done(function (data) {
        console.log('returning result is ' + data);
    });
};

let createBranchPage = function (guide_id) {
    $.ajax({
        url: 'http://180.76.244.130:3000/page/createBranchPage',
        type: 'GET',
        data: {
            guide_id: guide_id
        }
    }).done(function (page_id) {
        console.log('returning new branch pageid=' + page_id);
        saveButtonAttribute('button_to_page_id', page_id, button_id);
        saveBranchPageId(guide_id, page_id);
    });
};

let addListEvent = function (page_id) {
    let list_element = $(`#page_${page_id}`);
    list_element.on('tap', list_element, function () {
        //first to do is to save button info
        //element is to page id
        let button_text = $('#desc_input').val();
        if (button_text === '' || button_text === undefined) {
            button_text = 'BTN-DFT-TXT'
        }
        console.log(button_text);
        saveAttribute('raw_button_table', 'button_text', button_text, 'button_id', button_id);
        saveButtonAttribute('button_to_page_id', page_id, button_id);
        console.log(page_id);
        addSwitchCheck(page_id);
    });
};

let getTextContent = function (list_element, page_id, text_id, to_page_id) {
    if (text_id === null || text_id === '' || text_id === undefined) {
        list_element.append(`<li class="mui-table-view-cell" id="page_${page_id}"><a class="mui-navigate-right">跳转页面编号${page_id}</a></li>`);
        addListEvent(page_id);
    } else {
        $.ajax({
            url: 'http://180.76.244.130:3000/text/getTextAttribute',
            type: 'GET',
            data: {
                attribute_name: 'textContent',
                text_id: text_id
            }
        }).done(function (text_content) {
            console.log('returning text content is ' + text_content);
            list_element.append(`<li class="mui-table-view-cell" id="page_${page_id}"><a class="mui-navigate-right">跳转页面编号${page_id}-${text_content}</a></li>`);
            // return only after this is appended
            addListEvent(page_id);
        });
    }
    if(page_id === to_page_id){
        $(`#page_${page_id}`).css("color", "red")
    }
};

let getTextInfo = function (list_element, page_id, to_page_id) {
    // get text id from specific page id
    $.ajax({
        url: 'http://180.76.244.130:3000/page/getPageAttribute',
        type: 'GET',
        data: {
            attribute_name: 'text1_id',
            page_id: page_id
        }
    }).done(function (text_id) {
        console.log('returning text_id=' + text_id);
        getTextContent(list_element, page_id, text_id, to_page_id);
    });
};

let addListElement = function (guide_id, page_list, to_page_id) {
    let list_element = $("#guide_page_list");
    let page_array = page_list.split(",");
    console.log(page_array);
    page_array.forEach(function (element) {
        console.log('processing page_' + element);
        // there are two page_id here
        // get text Content from text id
        getTextInfo(list_element, element, to_page_id);
        // add tap listener for list element

    });
    // add events
    // add last create new page
    list_element.append(`<li class="mui-table-view-cell" id="default_new_page"><a class="mui-navigate-right">创建新页面</a></li>`);
    $("#default_new_page").on('tap', function () {
        console.log("default_new_page tapped");
        let button_text = $('#desc_input').val();
        if (button_text === '' || button_text === undefined) {
            button_text = 'BTN-DFT-TXT'
        }
        console.log(button_text);
        saveButtonAttribute('button_text', button_text, button_id);
        //saveButtonAttribute('button_to_page_id', page_id, button_id); to page id is saved to db after new page created
        createBranchPage(guide_id);
    });
    // todo: get page name, now only page id

    // add click response to picture
    // use mui event management here
    //$(`#guide_${guide_id}_pic`).on('click', function(){
    // on cellphone it is tap

    /*
    guide_id_pic_element.on('click',function(){
        console.log(`${guide_name} tapped`);
        callGetPageId(guide_id);
    });
    */
};

callGetGuideId(button_id);



