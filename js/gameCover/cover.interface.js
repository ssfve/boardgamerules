//alternations();
//toast_alter();
let pageTitle = '集石桌游规则上传';
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
//generateSidelink(hot_arrayID);