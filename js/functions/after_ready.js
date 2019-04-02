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
        success: function(data) {
            console.log("savePDFInfo Success");
            alert("savePDFInfo Success");
        },
        error: function(err) {
            console.log("savePDFInfo Failure");
            alert("savePDFInfo Failure");
        }
    });
}

function submit_translate_info() {
    let pdf_path = document.getElementById("pdf_file").value;
    let pdf_name = pdf_path.split("\\")[2];
    console.log(pdf_name);
    let receiver_email = document.getElementById("receiver_email").value;
    console.log(receiver_email);
    if(pdf_name === '') {
        alert('请选择pdf_file');
        return
    }
    if(receiver_email === '') {
        alert('请输入receiver_email');
        return
    }
    let pdf_query_url = 'http://180.76.244.130:3000/games/saveTranslateInfo';
    $.ajax({
        url: pdf_query_url,
        data: {
            pdf_name: pdf_name,
            receiver_email: receiver_email
        },
        success: function(data) {
            console.log("savePDFInfo Success");
            alert("savePDFInfo Success");
        },
        error: function(err) {
            console.log("savePDFInfo Failure");
            alert("savePDFInfo Failure");
        }
    });
}