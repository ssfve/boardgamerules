function submit_pdf_info() {
    let pdf_name = document.getElementById("pdf_name").value;
    let crop_len = document.getElementById("cropLenResult").innerText;
    let search_name = document.getElementById("search_name").value;
    let gstone_id = document.getElementById("gstone_id").value;
    let rulebook_name = document.getElementById("rulebookNameResult").innerText;
    let lang_name = document.getElementById("langNameResult").innerText;
    let source_name = document.getElementById("sourceNameResult").innerText;
    let source_detail = document.getElementById("source_detail").value;
    if(pdf_name === '') {
        alert('请输入pdf_name');
        return
    }
    let pdf_query_url = 'http://180.76.244.130:3000/games/savePDFInfo';
    $.ajax({
        url: pdf_query_url,
        data: {
            pdf_name: pdf_name,
            crop_len: crop_len,
            search_name: search_name,
            gstone_id: gstone_id,
            rulebook_name: rulebook_name,
            lang_name: lang_name,
            source_name: source_name,
            source_detail: source_detail
        },
        success: function() {
            console.log("savePDFInfo Success");
            alert("savePDFInfo Success");
        },
        error: function() {
            console.log("savePDFInfo Failure");
            alert("savePDFInfo Failure");
        }
    });
}

$("#loading").dialog({
    hide: 'slide',
    show: 'slide',
    autoOpen: false
});

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
    let pdf_upload_url = 'http://180.76.244.130:3000/games/savePDF';
    let pdf_data = new FormData();
    let pdf_file = document.getElementById("pdf_file").files[0];
    pdf_data.append('file-0', pdf_file);
    //let pdf_data = document.getElementById('pdf_file').result;
    $.ajax({
        url: pdf_upload_url,
        method: 'POST',
        contentType: false,
        processData: false,
        data: pdf_data,
        crossDomain : true,
        send: function(){
            $('#upload_button').innerHTML="上传中。。。";
        },
        complete: function(){
            $('#upload_button').innerHTML="开始钓鱼";
        },
        success: function(data) {
            console.log("文件上传成功");
            //alert("savePDFInfo Success");
        },
        error: function(err) {
            console.log("uploadPDF Failure");
            alert("ERROR:开始钓鱼失败，请重试");
        }
    });
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
            alert("钓鱼中。。。请耐心等待邮件(约30分钟)");
        },
        error: function(err) {
            console.log("savePDFInfo Failure");
            alert("ERROR:开始钓鱼失败，请重试");
        }
    });
}
