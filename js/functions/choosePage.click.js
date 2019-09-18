// create Page
let fileName = '';
let button_address_seg = "choosePage.html?buttonid=%data%";
let page_address_seg = "choosePage.html?pageid=%data%";

// get button_id globally
let index = window.location.href.lastIndexOf("=");
let url_length = window.location.href.length;
let button_id = window.location.href.substring(index + 1, url_length);
console.log('button_id='+button_id);

let callGetGuideId=function(button_id) {
	$.ajax({
		url: 'http://180.76.244.130:3000/button/getGuideId',
		type: 'GET',
		data: {
            button_id: button_id
		},
		dataType: "json"
	}).done(function (guide_id) {
		console.log('Returning guide_id='+guide_id);
        getPageList(guide_id);
	});
};

let getPageList=function (guide_id) {
    $.ajax({
        url: 'http://180.76.244.130:3000/guide/getPageList',
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
        url: 'http://180.76.244.130:3000/button/getPreviousPageId',
        type: 'GET',
        data: {
            button_id: button_id
        }
    }).done(function (prev_page_id) {
        console.log('Returning prev_page_id='+prev_page_id);
        switchPage(page_address_seg, prev_page_id);
    });
};

let addSwitchCheck=function(page_id){
    document.getElementById(`#page_${page_id}`).addEventListener('tap', function() {
        let btnArray = ['否', '是'];
        mui.confirm('是否跳转至选择页面？(不跳转将直接返回)', 'Hello MUI', btnArray, function(e) {
            if (e.index === 1) {
                console.log('你刚确认跳转');
                switchPage(page_address_seg, page_id);
            } else {
                console.log('你没有选择跳转，将返回');
                // get previous page id first then switch
                getPreviousPageId(page_address_seg, button_id);
            }
        })
    });
};

let saveBranchPageId=function(guide_id, page_id){
    $.ajax({
        url: 'http://180.76.244.130:3000/guide/savePageId',
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

let saveButtonAttribute=function(attribute_name, attribute_value, button_id){
    $.ajax({
        url: 'http://180.76.244.130:3000/button/saveButtonAttribute',
        type: 'GET',
        data: {
            attribute_name: attribute_name,
            button_id: button_id,
            attribute_value : attribute_value
        }
    }).done(function(data){
        console.log('returning result is '+data);
    });
};

let saveAttribute=function(table_name, attribute_name, attribute_value, key_name, key_value){
    $.ajax({
        url: 'http://180.76.244.130:3000/database/saveAttribute',
        type: 'GET',
        data: {
            table: table_name,
            attribute_name: attribute_name,
            attribute_value : attribute_value,
            key_name: key_name,
            key_value: key_value
        }
    }).done(function(data){
        console.log('returning result is '+data);
    });
};

let createBranchPage=function(guide_id){
    $.ajax({
        url: 'http://180.76.244.130:3000/page/createBranchPage',
        type: 'GET',
        data: {
            guide_id: guide_id
        }
    }).done(function(page_id){
        console.log('returning new branch pageid='+page_id);
        saveButtonAttribute('button_to_page_id', page_id, button_id);
        saveBranchPageId(guide_id, page_id);
    });
};

let getTextContent=function(text_id){
    $.ajax({
        url: 'http://180.76.244.130:3000/text/getTextAttribute',
        type: 'GET',
        data: {
            attribute_name: 'textContent',
            text_id: text_id
        }
    }).done(function(text_content){
        console.log('returning text content is '+text_content);
        return text_content;
    });
};

let getTextInfo=function(page_id){
    // get text id from specific page id
    $.ajax({
        url: 'http://180.76.244.130:3000/page/getPageAttribute',
        type: 'GET',
        data: {
            attribute_name: 'text1_id',
            page_id: page_id
        }
    }).done(function(text_id){
        console.log('returning text_id='+text_id);
        getTextContent(text_id);
    });
};

let addListElement= function(guide_id, page_list){
    let list_element = $("#guide_page_list");
    let page_array = page_list.split(",");
    console.log(page_array);
    page_array.forEach(function (element) {
        console.log(element);

        // get text Content from text id
        let textContent = getTextInfo();
        list_element.append(`<li class="mui-table-view-cell" id="page_${element}"><a class="mui-navigate-right">跳转页面编号${element}-${textContent}</a></li>`);

        // add tap listener for list element
        $(`#page_${element}`).on('tap',function(){
            //first to do is to save button info
            let button_text = $('#desc_input').value;
            saveAttribute('raw_button_table', 'button_text', button_text, 'button_id', button_id);
            saveButtonAttribute('button_to_page_id', page_id, button_id);
            addSwitchCheck(page_id);
        });
    });
    // add last create new page
    list_element.append(`<li class="mui-table-view-cell" id="default_new_page"><a class="mui-navigate-right">创建新页面</a></li>`);
    $("#default_new_page").on('tap',function(){
        console.log("default_new_page tapped");
        let button_text = $('#desc_input').value;
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


