
console.log('get Unfinished Entries');
let entry_query_url = 'http://180.76.244.130:3000/database/getEntryInProgress';
$.ajax({
    url: entry_query_url,
    dataType: "json",
    success: function(data) {
        let mod_result = '';
        console.log(typeof data);
        data.forEach(function (element) {
            console.log(element);
            mod_result += element.gstone_id + "\n"
        });
        $('#ProgressResult').html('以下规则正在上传集石中(号码重复不影响)：'+mod_result);
    },
    error: function(err) {
        console.log('there is error getting progress')
    }
});

function submit_pdf_info() {
    let gstone_id = document.getElementById("gstone_id").value;
    let mod_name = document.getElementById("modNameResult").innerText;
    let source_detail = document.getElementById("source_detail").value;
    if(gstone_id === '') {
        alert('请输入gstone_id');
        return
    }
    if(mod_name === '' || mod_name === undefined) {
        alert('请选择pdf样式');
        return
    }
    saveUploadInfo(gstone_id, mod_name, source_detail);
    let modNotice = document.getElementById('modNotice');
    modNotice.innerText = "";
}

let saveUploadInfo=function(gstone_id, mod_name, source_detail){
    let pdf_query_url = 'http://180.76.244.130:3000/games/savePDFInfo';
    $.ajax({
        url: pdf_query_url,
        data: {
            gstone_id: gstone_id,
            mod_name: mod_name,
            source_detail: source_detail
        },
        success: function() {
            console.log("savePDFInfo Success");
            alert("pdf信息提交成功");
        },
        error: function() {
            console.log("savePDFInfo Failure");
            alert("ERROR：pdf信息提交失败");
        }
    });
};

function upload_pdf() {
    let pdf_upload = {
        url : 'http://180.76.244.130:3000/games/savePDF',
        text_area : $('#uploadNotice'),
        file_element_name : $('#pdf_file'),
        file_not_found_msg: "请选择文件",
        button_inprogress_text: "文件上传中",
        button_text: "点击上传",
        before_send_msg: "文件上传中。。。请勿关闭浏览器",
        success_msg:"文件已上传，可继续上传其他pdf",
        success_alert_msg:"文件上传成功",
        error_msg:"文件上传失败，请重试",
        error_alert_msg:"文件上传失败",
        button: $('#upload_button'),
        progressbar: $('#progress')
    };
    uploadFile(pdf_upload);
}
