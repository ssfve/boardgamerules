var table_seg = '<ul class="mui-table-view" >%data%</ul>';
var list_seg_disabled = '<li class="mui-table-view-cell">%data%</li>';
var list_seg_enabled = '<li class="mui-table-view-cell">%data%</li>';
var list_seg_pre = '<li class="mui-table-view-cell">';
var list_seg_post = '</li>';
var stack_seg = '<li class="mui-table-view-cell mui-collapse">%data%</li>';
var stack_seg_class = 'mui-table-view-cell';
var stack_seg_class = 'mui-table-view-cell mui-collapse';

var orange_text_seg = '<span class="h6-text-orange">%data%</span>';
var grey_text_seg = '<span class="h6-text-grey">%data%</span>';
var img_text_seg = '<center><img src="../img/%data%" alt="Please Refresh this Page!" width="100%" data-preview-src="" data-preview-group="1"/></center>';

var stack_seg_header = '<a class="mui-navigate-right" href="#">%data%</a>';
var stack_seg_content = '<div class="mui-collapse-content">%data%</div>';

var link_seg = '<a id="%link%" class="mui-navigate-right" style="color:#FFFFFF;">%data%</a>';
var address_seg = '../%data%/gamecover/gameCover.html';
var new_address_seg = 'gameCover.html?id=%data%';
var local_address_seg = '../%data%/gamecover/gameCover.html';
var local_hotlist_seg = 'index.html';
var a_seg = '<a>%data%</a>';

var index_seg = '<div class="mui-indexed-list-bar">%data%</div>';

var index_class_seg = '<li data-group="%1%" class="mui-table-view-divider mui-indexed-list-group">%0%</li>';
var index_value_seg = '<li data-value="%2%" data-tags="%3%" id="%4%" class="mui-table-view-cell mui-indexed-list-item">%1% %0%</li>';
var row_seg = '<div class="mui-row">%data%</div>'
// use D
var seg_list = []
seg_list[1] = '<div class="mui-col-sm-1 mui-col-xs-1">'
seg_list[2] = '<div class="mui-col-sm-2 mui-col-xs-2">'
seg_list[3] = '<div class="mui-col-sm-3 mui-col-xs-3">'
seg_list[4] = '<div class="mui-col-sm-4 mui-col-xs-4">'
seg_list[5] = '<div class="mui-col-sm-5 mui-col-xs-5">'
seg_list[6] = '<div class="mui-col-sm-6 mui-col-xs-6">'
seg_list[7] = '<div class="mui-col-sm-7 mui-col-xs-7">'
seg_list[8] = '<div class="mui-col-sm-8 mui-col-xs-8">'
seg_list[9] = '<div class="mui-col-sm-9 mui-col-xs-9">'
seg_list[10] = '<div class="mui-col-sm-10 mui-col-xs-10">'
seg_list[11] = '<div class="mui-col-sm-11 mui-col-xs-11">'
seg_list[12] = '<div class="mui-col-sm-12 mui-col-xs-12">'

var mic_seg = '<div class="flex-container"><a id="icon-mic" class="active"><span class="mui-icon mui-icon-mic-filled"></span></a></div>'

var list_line = '';
var text_line = '';
var index_line = '';
var stack_line = '';
var final_html = '';
var list_seg = '';
highPR = 'important';
lowPR = '!important';

var change_nameEN = function (name) {
    name_copy = name;
    name = '';
    for (var i = 0; i < name_copy.length; i++) {
        //alert(nameEN_copy.substring(i,i+1))
        if (i === 0) {
            name += name_copy.substring(i, i + 1).toUpperCase();
        } else if (name_copy.substring(i, i + 1) === '-') {
            name += ' ';
            name += name_copy.substring(i + 1, i + 2).toUpperCase();
            i += 1;
        } else {
            name += name_copy.substring(i, i + 1);
        }
        //alert(nameEN);
    }
    return name;
};

let addGuideToSlot=function(slot_number, guide_id, guide_name){
    let time = Date.now();
    let slot_element = $(`#slot-${slot_number}`);
    slot_element.empty();
    slot_element.prepend(`<div class="mui-card" id="guide_${guide_id}"></div>`);
    let guide_id_element = $(`#guide_${guide_id}`);
    guide_id_element.prepend(`<div class="mui-card-header mui-card-media" id="guide_${guide_id}_pic" style="height:40vw;background-image:url(../../img/interface/vertical-flow.png)"></div>`);
    guide_id_element.append(`<div class="mui-card-content" id="guide_${guide_id}_content"></div>`);
    $(`#guide_${guide_id}_content`).prepend(`<div class="mui-card-content-inner" id="guide_${guide_id}_inner_content"></div>`);
    $(`#guide_${guide_id}_inner_content`).append(`<div>${time}<div style="color: #333;" id="guide_${guide_id}_text">${guide_name}</div></div>`);
};

let addEditGuideToSlot=function(o){
    let slot_number = o.slot_count;
    let guide_id = o.guide_id;
    let guide_name = o.guide_name;
    let image_id = o.image_id;
    console.log('inner image_id is '+image_id);
    let slot_element = $(`#slot-${slot_number}`);
    slot_element.empty();
    slot_element.prepend(`<div class="mui-card" id="guide_${guide_id}"></div>`);
    let guide_id_element = $(`#guide_${guide_id}`);
    guide_id_element.prepend(`<div class="mui-card-header mui-card-media" id="guide_${guide_id}_pic" style="height:40vw;background-image:url(../../img/interface/vertical-flow.png)"></div>`);
    guide_id_element.append(`<div class="mui-card-content" id="guide_${guide_id}_content"></div>`);
    $(`#guide_${guide_id}_content`).prepend(`<div class="mui-card-content-inner" id="guide_${guide_id}_inner_content"></div>`);
    $(`#guide_${guide_id}_inner_content`).append(`<form class="mui-input-group"><div class="mui-input-row" id="mui_guide_${guide_id}_row"></div></div>`);
    $(`#mui_guide_${guide_id}_row`).append(`<input type="text" class="mui-input-clear" placeholder="请输入流名称" id="guide_${guide_id}_text">`);

    if( image_id !== '0' && image_id !== ''){
        $('<img alt="" src=""/>').attr('src', `https://${serverDomain}/img-compressed/${image_id}.jpg`).on('load', function() {
            console.log('blurred and compressed img is downloaded');
            $(this).remove(); // prevent memory leaks as @between suggested
            $(`#guide_${guide_id}_pic`).css('background-image', `url(https://${serverDomain}/img-compressed/${image_id}.jpg)`);
        });
    }

    let guide_text_ele = $(`#guide_${guide_id}_text`);
    let guide_id_pic_element = $(`#guide_${guide_id}_pic`);
    // set guide name
    guide_text_ele.val(guide_name);
    console.log('the text is set to '+guide_name);
    // dynamically initialize
    mui(`#guide_${guide_id}_text`).input();
    guide_text_ele.on('input', function (){
        let guide_name = $(`#guide_${guide_id}_text`).val();
        console.log('text changed to '+guide_name);
        let o = {
            table_name: 'guide_table',
            attribute_name: 'guide_name',
            attribute_value: guide_name,
            key_name: 'guide_id',
            key_value: guide_id
        };
        callSaveAttribute(o);
    });

    guide_id_pic_element.on('tap', function () {
        console.log(`#guide_${guide_id}_pic tapped`);
        getRootPageId(guide_id);
    });
};

let callSaveAttribute= function(o){
    $.ajax({
        url: `https://${serverDomain}/node/database/updateAttribute`,
        type: 'GET',
        data:{
            table_name: o.table_name,
            attribute_name: o.attribute_name,
            attribute_value: o.attribute_value,
            key_name: o.key_name,
            key_value: o.key_value
        }
    }).done(function(data){
        console.log(data);
    });
};

let getPageIdOnLoad = function(o){
    $.ajax({
        url: `https://${serverDomain}/node/database/getAttribute`,
        type: 'GET',
        data: {
            table_name: 'guide_table',
            attribute_name: 'root_page_id',
            key_name: 'guide_id',
            key_value: o.guide_id
        }
    }).done(function(page_id){
        console.log('page_id is '+page_id);
        if(page_id === ''){
            addEditGuideToSlot(o);
        }else{
            o.page_id = page_id;
            getImageId(o);
        }
    });
};

let getImageId=function(o){
    $.ajax({
        url: `https://${serverDomain}/node/database/getAttribute`,
        type: 'GET',
        data:{
            table_name: 'raw_control_table',
            attribute_name: 'image1_id',
            key_name: 'page_id',
            key_value: o.page_id
        }
    }).done(function (image_id) {
        console.log('Returning image_id is ' + image_id);
        o.image_id = image_id;
        addEditGuideToSlot(o);
    });
};

let switchPage = function (address_seg, seg_replacement) {
    let index = window.location.href.lastIndexOf("\/");
    let address_prefix = window.location.href.substring(0, index + 1);
    console.log(address_prefix);

    let address_postfix = address_seg.replace("%data%", seg_replacement);
    console.log(address_postfix);

    let new_address = address_prefix + address_postfix;
    console.log(new_address);

    location.href = new_address;
    //window.location.reload();
    //$("meta[property='pageid']").attr("content", page_id);
};

let gotoPage = function (Id) {
    //alert(document.getElementById(Id))
    document.getElementById(Id).addEventListener('tap', function () {
        gameid = document.getElementById(Id).id;
        //alert(window.location.href)
        //alert(window.location.href.replace('gameRule','gameCover'))
        let index = window.location.href.lastIndexOf("\/");
        let address_prefix = window.location.href.substring(0, index + 1);
        let address_postfix = new_address_seg.replace('%data%', Id);
        let new_address = address_prefix + address_postfix;

        location.href = new_address;
        //window.location.reload();
        if (gameid === 'rulebook-list') {
            window.location.href = local_hotlist_seg;
        }

    });

};

let showBackground = function (file_name) {
    // show blurred or compressed version first
    $('<img src="" alt=""/>').attr('src', `https://${serverDomain}/img-compressed/${file_name}`).on('load', function () {
        console.log('blurred and compressed img is downloaded');
        $(this).remove();// prevent memory leaks
        $('body').css('background-image', `url(https://${serverDomain}/img-compressed/${file_name})`);
        showBlurBackground(file_name);
    });
};

let showBlurBackground = function(file_name){
    $('<img src="" alt=""/>').attr('src', `https://${serverDomain}/img-blurred/${file_name}`).on('load', function () {
        console.log('original img is downloaded');
        $(this).remove();// prevent memory leaks
        $('body').css('background-image', `url(https://${serverDomain}/img-blurred/${file_name})`);
        //showTrueBackground(file_name);
        getImageFromNodejs(file_name);
    });
};

let showTrueBackground = function(file_name){
    $('<img src="" alt=""/>').attr('src', `https://${serverDomain}/img/${file_name}`).on('load', function () {
        console.log('original img is downloaded');
        $(this).remove();// prevent memory leaks
        $('body').css('background-image', `url(https://${serverDomain}/img/${file_name})`);
    });
};

let getImageFromNodejs = function (fileName) {
    mui.toast('原图加载中，请稍候...', {duration: 'long', type: 'div'});
    let data = {'file_name': fileName};
    if ( xhr_global instanceof XMLHttpRequest){
        console.log('another xhr is destroyed');
        xhr_global.abort();
    }
    xhr_global = new XMLHttpRequest();
    let url_action = `https://${serverDomain}/node/image/getImageStream/?file_name=` + fileName;
    xhr_global.responseType = 'blob';
    console.log(url_action);
    xhr_global.open('GET', url_action, true);
    xhr_global.withCredentials = true;
    let progress_element = $('#progress');
    mui("#progress").progressbar({progress:0}).show();
    $("#progress").css("opacity",100);
    let downloadProgress = function (evt) {
        if (evt.lengthComputable) {
            let percentComplete = Math.round(evt.loaded * 100 / evt.total);
            //progress_element.val(percentComplete - 1);
            mui("#progress").progressbar().setProgress(percentComplete - 1);
        }
    };
    let downloadComplete = function (evt) {
        mui("#progress").progressbar().setProgress(0);
        $("#progress").css("opacity",0);
        //mui("#progress").progressbar().hide();
        console.log('background should have downloaded');
        let res = xhr_global.response;
        let blob = new Blob([res],{type: "mime"});
        let imgUrl = window.URL.createObjectURL(blob);
        console.log(imgUrl);
        let body_ele = $('body');
        body_ele.css('background-image', `url(${imgUrl})`);
        body_ele.on('transitionend', function () {
            console.log('memory released');
            window.URL.revokeObjectURL(imgUrl);
            body_ele.off('transitionend');
        });
    };

    let downloadFailed = function () {
        progress_element.val(0);
    };
    xhr_global.addEventListener("progress", downloadProgress, false);
    xhr_global.addEventListener("load", downloadComplete, false);
    xhr_global.addEventListener("error", downloadFailed, false);
    xhr_global.send(data);
};

var index_games_gen = function (array) {
    var html_line = ''
    array.forEach(function (val, index) {
        //alert(type(val))
        if (val.length === 2) {
            temp_line = index_class_seg.replace('%0%', val[0]);
            html_line += temp_line.replace('%1%', val[1]);
        }
        if (val.length === 4) {
            temp_line = index_value_seg.replace('%0%', change_nameEN(val[1]));
            temp_line = temp_line.replace('%1%', val[2]);
            temp_line = temp_line.replace('%2%', val[3]);
            temp_line = temp_line.replace('%3%', val[1]);
            html_line += temp_line.replace('%4%', val[0]);
        }

    });
    //html_line = html_line.replace('>"','>');
    //html_line = html_line.replace('"<','<');
    return html_line
}

var generateIndexlink = function (array) {
    array.forEach(function (val, index) {
        if (val.length === 4) {
            // 0 is gameid
            gotoPage(val[0]);
        }

    });
};

var change_theme = function (color) {
    $('.h6-text-orange').css({
        'color': color
    });
    $('.background-color-orange').css({
        'background-color': color
    });
    $('.bs-wo').css({
        'background-color': color
    });
    //alert('../img/interface/'+color+'.svg')
    $("#svg1").attr('src', '../img/interface/' + color.substr(1, 6) + '.svg');
    $("#svg2").attr('src', '../img/interface/' + color.substr(1, 6) + '.svg');
    $("#svg3").attr('src', '../img/interface/' + color.substr(1, 6) + '.svg');
    $("#svg4").attr('src', '../img/interface/' + color.substr(1, 6) + '.svg');
    $("#svg5").attr('src', '../img/interface/' + color.substr(1, 6) + '.svg');
    $("#svg6").attr('src', '../img/interface/' + color.substr(1, 6) + '.svg');
};

let updateAttribute = function (table_name, attribute_name, attribute_value, key_name, key_value) {
	$.ajax({
		url: `https://${serverDomain}/node/database/updateAttribute`,
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

let saveAttribute = function (table_name, attribute_name, attribute_value, key_name, key_value) {
	$.ajax({
		url: `https://${serverDomain}/node/database/updateAttribute`,
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

var collapse_event_gen = function () {
    var active_sec = document.getElementsByClassName("mui-table-view-cell mui-collapse");
    //alert(active_sec.length)
    for (var i = 0; i < active_sec.length; i++) {
        //alert('in')
        //alert(i)
        active_sec[i].addEventListener('tap', function (e) {
            //alert('in')
            setTimeout(function () {
                $('.mui-table-view-cell.mui-collapse').css({
                    'background-color': bg_color
                });
                $('.mui-table-view-cell.mui-collapse.mui-active').css({
                    'background-color': theme_color
                });
                $('.mui-table-view-cell.mui-collapse.mui-active .mui-collapse-content').css({
                    'background-color': content_color
                });
            }, 10);

        });
        //index = index+1
        //alert('out');
    }
    ;
};

var collapse_img_show = function (gameid, pageType, lineFlag) {
    //console.log(pageType)
    var active_sec = []
    if (pageType === 'setup') {
        var item1 = document.getElementById('item1mobile');
        //console.log(item1.innerHTML)
        active_sec = item1.getElementsByClassName("mui-table-view-cell");
        //console.log(active_sec)
    }
    if (pageType === 'flow') {
        var item2 = document.getElementById('item2mobile');
        active_sec = item2.getElementsByClassName("mui-table-view-cell");
    }
    if (pageType === 'end') {
        var item3 = document.getElementById('item3mobile');
        active_sec = item3.getElementsByClassName("mui-table-view-cell");
    }
    if (pageType === 'stuff') {
        var item4 = document.getElementById('introtext');
        //console.log(item4.innerHTML)
        active_sec = item4.getElementsByClassName("mui-table-view-cell");
    }

    //console.log(active_sec)
    $.each(lineFlag, function (key, value) {
        //console.log(lineFlag)
        lineNum = key + 1
    });
};

var alternations = function () {

    average = average.toFixed(1);
    averageweight = averageweight.toFixed(2);
    designersCN = designersCN.replace('|', ',').replace('|', ',')
    if (designersCN === '(Uncredited)') {
        designersCN = '匿名'
    }

    artistsCN = artistsCN.replace('|', '')
    if (artistsCN === '(Uncredited)' || artistsCN === 'None') {
        artistsCN = '匿名'
    }
    if (artistsCN === '') {
        designers_temp = designersCN
    } else {
        designers_temp = designersCN + artistsCN
    }

    //alert(categorysCN[categorysCN.length-1])
    // remove the last pipeline
    //alert(categorysCN)
    categorysCN = categorysCN.substr(0, categorysCN.length - 1)
    //alert(categorysCN)
    //alert(suggested_numplayers)
    if (suggested_numplayers === 'None') {
        playersBest = ''
    } else {
        suggested_numplayers = suggested_numplayers.replace('-', '~');
        playersBest = '[' + suggested_numplayers + ']';
    }

    if (maxplayers === 'None' || maxplayers === minplayers) {
        players = minplayers;
    } else {
        players = minplayers + '~' + maxplayers;
    }

    //alert(players)
    if (playersBest === '') {
        playersMea = '游戏人数: ' + players + '人'
    } else {
        playersMea = '游戏人数[最佳人数]: ' + players + playersBest + '人'
    }

    // rate number to k
    if (usersrated >= 1000) {
        usersrated = (usersrated / 1000).toFixed(1) + 'k';
    }
    // minplaytime and maxplaytime
    if (maxplaytime === '' || maxplaytime === 'None' || maxplaytime === '0' || maxplaytime === minplaytime) {
        playtime = minplaytime + '’'
    } else {
        playtime = minplaytime + '’~' + maxplaytime + '’'
    }
    playtimeMea = '游戏时间: ' + playtime.replace('’', '').replace('’', '') + '分钟'

    //weight = averageweight+'/5';
    nameEN_mod = change_nameEN(nameEN);
    pageTitle = nameCN + ' ' + nameEN_mod

    button2 = '>>' + pageTitle + '<<';

};

var toast_alter = function () {
    if (average === 'N/A') {
        numRatesMea = '评分: ' + average + '  数量: ' + usersrated + '条'
    } else {
        numRatesMea = '评分: ' + average + '/10  数量: ' + usersrated + '条'
    }
    //icon2
    yearMea = '出版时间: ' + yearpublished + '年'
    weightExp = '复杂度(重度): ' + averageweight + '/5'
    ageMea = '适合年龄: ' + age + '岁' + ageMeaPlus
    if (playersBest === '') {
        playersMea = '游戏人数: ' + players + '人'
    } else {
        playersMea = '游戏人数[最佳人数]: ' + players + playersBest + '人'
    }
    playtimeMea = '游戏时间: ' + playtime.replace('’', '').replace('’', '') + '分钟'
};

let uploadFile = function (file_object) {
	console.log(file_object.file_element_name.val());
    if (file_object.file_element_name.val() === "") {
        file_object.text_area.html(file_object.file_not_found_msg);
        //console.log('hello');
    } else {
        let xhr = new XMLHttpRequest();
        let form_data = new FormData();
        let file = file_object.file_element_name.prop('files')[0];
        form_data.append('file-0', file);

        let inner_text_area = file_object.text_area;
        let inner_button = file_object.button;

		inner_button.attr("disabled", true);
		inner_button.html(file_object.button_inprogress_text);
		inner_text_area.html(file_object.before_send_msg);

        xhr.open("POST", file_object.url, true);
        xhr.withCredentials = true;

		let uploadProgress=function(evt) {
			//console.log(evt);
			if (evt.lengthComputable) {
				let percentComplete = Math.round(evt.loaded * 100 / evt.total);
				file_object.progressbar.val(percentComplete-1);
			}
		};
		let uploadComplete = function (evt) {
			inner_button.attr("disabled", false);
			inner_button.html(file_object.button_text);
			file_object.progressbar.val(0);
			inner_text_area.html(file_object.success_msg);
			alert(file_object.success_alert_msg);
		};

		let uploadFailed = function (evt) {
			inner_button.attr("disabled", false);
			inner_button.html(file_object.button_text);
			file_object.progressbar.val(0);
			inner_text_area.html(file_object.error_msg);
			alert(file_object.error_alert_msg);
		};

		xhr.upload.addEventListener("progress", uploadProgress, false);
		xhr.addEventListener("load", uploadComplete, false);
		xhr.addEventListener("error", uploadFailed, false);
		xhr.send(form_data);
    }
};

let goToFullScreen=function(){
    let element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
    let fullscreenElement = $('#fullscreen-button');
    fullscreenElement.off('tap');
    fullscreenElement.on('tap', escFullScreen);
    fullscreen_global = "半屏";
    fullscreenElement.html(fullscreen_global);
};

let escFullScreen=function(){
    let fullscreenElement = $('#fullscreen-button');
    let element = document.documentElement;
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    fullscreenElement.off('tap');
    fullscreenElement.on('tap', goToFullScreen);
    fullscreen_global = "全屏";
    fullscreenElement.html(fullscreen_global);
};
