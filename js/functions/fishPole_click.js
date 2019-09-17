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
    let pdf_upload_url = 'http://180.76.244.130:3000/games/saveTranslatePDF';
    let pdf_data = new FormData();
    let pdf_file = document.getElementById("pdf_file").files[0];
    pdf_data.append('file-0', pdf_file);
    let button = $('#upload_button');
    $.ajax({
        url: pdf_upload_url,
        method: 'POST',
        contentType: false,
        processData: false,
        data: pdf_data,
        crossDomain : true,
        beforeSend: function(){
            button.attr("disabled", true);
            button.html("悬挂鱼饵中（文件上传中）。。。请勿关闭窗口");
        },
        complete: function(){
            button.attr("disabled", false);
            button.html("重新抛竿钓鱼");
        },
        success: function(data) {
            $('#upload_button').html("文件上传成功");
            console.log("文件上传成功");
            alert("钓鱼开始了，请耐心等待邮件送达(最快5分钟，慢的话可能1周)");
            //alert("savePDFInfo Success");
        },
        error: function(err) {
            console.log("uploadPDF Failure");
            alert("ERROR:开始钓鱼失败，请重试");
        }
    });
};

let saveTranslateInfo=function(pdf_name, receiver_email) {
    let pdf_query_url = 'http://180.76.244.130:3000/games/saveTranslateInfo';
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