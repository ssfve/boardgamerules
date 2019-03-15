function submit_pdf_info() {
    let pdf_name = document.getElementById("pdf_name").value;
    let crop_len = document.getElementById("cropLenResult").innerText;
    let search_name = document.getElementById("search_name").value;
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
            rulebook_name: rulebook_name,
            lang_name: lang_name,
            source_name: source_name,
            source_detail: source_detail
        },
        success: function(data) {
            console.log("savePDFInfo Success");
            alert("Well Done");
        }
    });
}