var nameCN = '';
var pageTitle = '';
var headerTitle = '配件介绍';

//nameEN
var nameEN = '';

//color
var theme_color = '';
var content_color = '';
var default_color = '';
var bg_color = '';

//page
var current_page = 'gameintro';
var href = location.href;
var gameid = href.split("?id=")[1];
//alert(gameid)

var data_template = "<ul class=\"mui-table-view\">%data%</ul>"
//var collapse_template = "<li class=\"mui-table-view-cell mui-collapse\">%a%%b%</li>%data%"
var collapse_template = "<li class=\"mui-table-view-cell mui-collapse\">%a%"
+"<div class=\"mui-collapse-content\">%img%</div>"
+"</li>%data%"

//var no_collapse_template = "<li class=\"mui-table-view-cell\">%img%</li>%data%"
var no_collapse_img = "<li class=\"mui-table-view-cell\">%img%</li>%data%"
var no_collapse_text = "<li class=\"mui-table-view-cell\">%a%</li>%data%"

var a_img_template = "<a id=\"%id%\" class=\"mui-navigate-right\" href=\"#\">%value%</a>%img%"
var a_template = "<a id=\"%id%\" class=\"mui-navigate-right\" href=\"#\">%value%</a>"
var b_template = "<div class=\"mui-collapse-content\">%img%</div>"

var no_pic_text = "\"服务器宕机了，请在\'桌游怎么玩\'公众号内回复\'重启\'，督促管理员大叔重启服务器:)\""
var img_template = "<img id=\"%id%\" src=\"%value%\" alt=" + no_pic_text + " width=\"100%\" data-preview-src=\"\" data-preview-group=\"1\">%img%"

var a_img_with_value = a_img_template
var a_with_value = a_template
var img_with_src = img_template

var intro_html = data_template
//var intro_html = ''

var lineNo = []
var lineFlag = []
var lineText = []
var lineImage = []