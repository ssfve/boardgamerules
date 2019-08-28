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
            showModNamePickerButton.addEventListener('tap', function (event) {
                modNamePicker.show(function (items) {
                    modNameResult.innerText = items[0].value;
                });
            }, false);

            setTimeout(function () {
                let value_rates = $('#valueRates');
                let valueRates_w = value_rates.width;
                let valueRates_h = value_rates.height;
                //vertical align middle
                value_rates.lineHeight = valueRates_h + pixels;
                let svg1_w = $('#svg1').width;
                let svg1_h = $('#svg1').height;
                //position inner image
                let year_svg = $('#year_svg');
                let yearsvg_w = year_svg.width * cover_img_scale_factor;
                let yearsvg_h = year_svg.height * cover_img_scale_factor;

                let left_position = (svg1_w - yearsvg_w + 16) / 2 + pixels;
                let top_position = (svg1_h - yearsvg_h) / 2 + pixels;
                let svg_width = yearsvg_w;
                let svg_height = yearsvg_h;
                year_svg.left = left_position;
                year_svg.top = top_position;
                year_svg.width = svg_width;
                year_svg.height = svg_height;
                let weight_svg = $('#weight_svg');
                weight_svg.left = left_position;
                weight_svg.top = top_position;
                weight_svg.width = svg_width;
                weight_svg.height = svg_height;
                let age_svg = $('#age_svg');
                age_svg.left = left_position;
                age_svg.top = top_position;
                age_svg.width = svg_width;
                age_svg.height = svg_height;
                let players_svg = $('#players_svg');
                players_svg.left = left_position;
                players_svg.top = top_position;
                players_svg.width = svg_width;
                players_svg.height = svg_height;
                let clock_svg = $('#clock_svg');
                clock_svg.left = left_position;
                clock_svg.top = top_position;
                clock_svg.width = svg_width;
                clock_svg.height = svg_height;
            }, 50);
        });
    })(mui, document);

    console.log('get Unfinished Entries');
    let entry_query_url = 'http://180.76.244.130:3000/database/getEntryInProgress';
    $.ajax({
        url: entry_query_url,
        success: function(data) {
            let mod_result = '';
            console.log(type(data));
            for(i in data){
                console.log(data[i]);
                mod_result += data[i].gstone_id + "\n"
            }
            $('#ProgressResult').html(mod_result);
        },
        error: function(err) {
            console.log('there is error')
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
