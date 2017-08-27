var html_ready = function(pageType){
	
	if (pageType === 'stuff'){
		$('#introtext').html(intro_html);
		$(document).ready(function() {
			gotoPage(gameid);
			collapse_event_gen();
			$('.mui-table-view-cell.mui-collapse').css({'background-color': bg_color + lowPR});
		});
	}
	
	if (pageType === 'setup'){
		$('#setup_tab').html(html1);
		$(document).ready(function() {
			gotoPage(gameid);		
			collapse_event_gen();
			collapse_img_show(gameid, pageType, lineFlag);
			$('.mui-table-view-cell.mui-collapse').css({'background-color': bg_color + lowPR});
			
			change_tab_theme(theme_color,0);
			$('#gameSetup').css({'color': theme_color});
			
		});
	}
	
}

var create_html = function(pageType){
	
		$.each(lineFlag, function(index, content){
			
			lineType = lineFlag[index]
			if (lineType === 'txt'){
				add_no_collapse_text(pageType);
			}
			if (lineType === 'img'){
				add_collapse(pageType);
			}
			a_with_value = a_template.replace('%value%',lineText[index])
    		add_a(pageType, lineType, index);
    		
		})
		end_data(pageType);
		
		html_ready(pageType);
}

//async function ajax_wait(gameid, pageType) {
function ajax_wait(gameid, pageType) {
    var promise1 = getPageLineNum(gameid, pageType)
    promise1.then(function (data1) {
		lineFlag = data1
	    //alert(lineFlag)
	  	ajax_wait_text(gameid, pageType, lineFlag)
	  	//ajax_wait_img(gameid, pageType, 2)
  	
	});
};



function ajax_wait_text(gameid, pageType, lineFlag) {
	var promise_array = []
	//$.each(lineFlag, function(index, content){
	for (let lineNum=0; lineNum<lineFlag.length; lineNum++){
		promise_array[lineNum] = setTextContent(gameid, pageType, lineNum+1)
		promise_array[lineNum].then(function (data1) {
			//alert('afda')
			//alert(data1)
			//console.log(lineText)
			if(lineText.length === lineFlag.length){
    			console.log(lineText)
    			create_html(pageType)
    		}
		});
	}
};
/*
async function ajax_wait_img(gameid, pageType,lineNum) {
	
  	lineImage = await setImagePath(gameid, pageType, lineNum)
    console.log(lineImage)
    //create_intro(lineText);
};
*/
function ajax_wait_img(gameid, pageType, lineNum) {
	//var promise_array = []
	//$.each(lineFlag, function(index, content){
	var promise_img = setImagePath(gameid, pageType, lineNum+1)
	promise_img.then(function (data1) {
		lineImage = data1
		console.log(lineImage)
    	$.each(lineImage,function(index, content){
    		imageID = pageType+ '_' + 'img' + '_' + lineNum + '_' + index
    		console.log(imageID)
    		var img_part = document.getElementsByID(imageID);
    		img_part.attr('src',content);
    	});
    }
};

if (current_page === 'gamepic'){
    $('#back_arrow').attr('id',gameid);
    $(document).ready(function() {
		gotoPage(gameid)
	});
}

if (current_page === 'gameintro'){
	mui.previewImage();
    $('#back_arrow').attr('id',gameid);
    
    pageType = 'stuff'
    
    // this will create stuff page
	ajax_wait(gameid, pageType);
}

if (current_page === 'gamecover'){
	$(document).ready(function() {		
		setTimeout(function(){
			valueRates_w = $('#valueRates').width();
			valueRates_h = $('#valueRates').height();
			//vertical align middle
			$('#valueRates').css({'line-height': valueRates_h + pixels});
			svg1_w = $('#svg1').width();
			svg1_h = $('#svg1').height();
			//position inner image
			yearsvg_w = $('#yearsvg').width() * cover_img_scale_factor;
			yearsvg_h = $('#yearsvg').height() * cover_img_scale_factor;
			
			left_position =(svg1_w - yearsvg_w + 16) / 2 + pixels;
			top_position =(svg1_h - yearsvg_h) / 2 + pixels;
			svg_width = yearsvg_w;
			svg_height = yearsvg_h;
			$('#yearsvg').css({'left': left_position});
			$('#yearsvg').css({'top': top_position});
			$('#yearsvg').css({'width': svg_width});
			$('#yearsvg').css({'height': svg_height});
			
			$('#weightsvg').css({'left': left_position});
			$('#weightsvg').css({'top': top_position});
			$('#weightsvg').css({'width': svg_width});
			$('#weightsvg').css({'height': svg_height});
			
			$('#agesvg').css({'left': left_position});
			$('#agesvg').css({'top': top_position});
			$('#agesvg').css({'width': svg_width});
			$('#agesvg').css({'height': svg_height});
			
			$('#playerssvg').css({'left': left_position});
			$('#playerssvg').css({'top': top_position});
			$('#playerssvg').css({'width': svg_width});
			$('#playerssvg').css({'height': svg_height});
		
			$('#clocksvg').css({'left': left_position});
			$('#clocksvg').css({'top': top_position});
			$('#clocksvg').css({'width': svg_width});
			$('#clocksvg').css({'height': svg_height});
		},50);
	});

}

if (current_page === 'gamerule'){
	$('#back_arrow').attr('id',gameid);
	
	pageType = 'setup'
	
    // this will create setup page
	ajax_wait(gameid, pageType);
	
}


var generate_html2 = function(){
	
	pageType = 'flow'
	
    // this will create flow page
	ajax_wait(gameid, pageType);
}

var generate_html3 = function(){
	
    pageType = 'end'
    
    // this will create end page
	ajax_wait(gameid, pageType);
}
