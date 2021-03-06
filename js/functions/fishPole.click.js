function submit_translate_info() {
    let pdf_path = document.getElementById("pdf_file").value;
    let pdf_name_suffix = pdf_path.split("\\")[2];
    if(pdf_name_suffix === undefined) {
        alert('请选择上传文件');
        return
    }
    let pdf_name = pdf_name_suffix.split(".")[0];
    let file_suffix = pdf_name_suffix.split(".")[1];
    if(file_suffix !== 'pdf') {
        alert('请上传pdf格式文件');
        return
    }
    console.log(pdf_name);
    let receiver_email = document.getElementById("receiver_email").value;
    if(receiver_email === '') {
        alert('请输入邮箱地址');
        return
    }
    if(!receiver_email.includes('@')){
        alert('邮箱格式有误，请重新输入');
        return
    }
    console.log(receiver_email);
    saveTranslatePdf();
    saveTranslateInfo(pdf_name, receiver_email);
}

let saveTranslatePdf=function(){
    let pdf_upload = {
        url : `https://${serverDomain}:${serverPort}/games/saveTranslatePDF`,
        text_area : $('#uploadNotice'),
        file_element_name : $('#pdf_file'),
        file_not_found_msg: "请选择鱼饵（pdf规则文件）",
        button_inprogress_text: "抛竿中（文件上传中）",
        button_text: "开始钓鱼",
        before_send_msg: "请勿关闭浏览器",
        success_msg:"可继续抛竿钓鱼",
        success_alert_msg:"钓鱼（英译中）开始了，请耐心等待邮件送达(最快5分钟，慢的话可能1周)",
        error_msg:"等待30秒，然后尝试重新抛竿",
        error_alert_msg:"抛竿钓鱼失败",
        button: $('#upload_button'),
        progressbar: $('#progress')
    };
    uploadFile(pdf_upload);
};

let saveTranslateInfo=function(pdf_name, receiver_email) {
    let pdf_query_url = `https://${serverDomain}:${serverPort}/games/saveTranslateInfo`;
    let d = new Date();
    $.ajax({
        url: pdf_query_url,
        data: {
            pdf_name: pdf_name,
            receiver_email: receiver_email,
            upload_time: d.getTime()
        },
        success: function(data) {
            console.log("savePDFInfo Success");
            //$('#upload_button').innerHTML="开始钓鱼";
            //alert("钓鱼中。。。请耐心等待邮件(约30分钟)");
        },
        error: function(err) {
            console.log("savePDFInfo Failure");
            alert("ERROR:开始钓鱼失败，请重试");
        }
    });
};