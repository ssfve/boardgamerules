//alternations();
//toast_alter();
$("title").html(pageTitle);

let generateside = function (arrayEN, arrayCN, arrayID) {
    list_seg = list_seg_disabled;
    arrayEN.forEach(function (val, index) {
        nameEN_temp = change_nameEN(arrayEN[index]);
        name_data = arrayCN[index] + ' ' + nameEN_temp;
        //link_data = address_seg.replace('%data%',arrayEN[index]);
        //link_data = local_address_seg.replace('%data%',arrayEN[index]);
        //alert(link_data);
        link_seg_temp = link_seg.replace('%link%', arrayID[index]);
        list_seg_data = link_seg_temp.replace('%data%', name_data);
        list_line += list_seg.replace('%data%', list_seg_data);
    });
    return list_line;
};

let sideContent = generateside(hot_arrayEN, hot_arrayCN, hot_arrayID);
$('#sideContent').html(sideContent);
generateSidelink(hot_arrayID);

//侧滑容器父节点
var offCanvasWrapper = mui('#offCanvasWrapper');
//主界面容器
var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
//菜单容器
var offCanvasSide = document.getElementById("offCanvasSide");

/*if(!mui.os.android) {
	document.getElementById("move-togger").classList.remove('mui-hidden');
	var spans = document.querySelectorAll('.android-only');
	for(var i = 0, len = spans.length; i < len; i++) {
		spans[i].style.display = "none";
	}
}*/

//移动效果是否为整体移动
var moveTogether = false;
//侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果；
var classList = offCanvasWrapper[0].classList;
//变换侧滑动画移动效果；


var slider = mui("#slider");
