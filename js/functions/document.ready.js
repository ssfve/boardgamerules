var html_ready = function(pageType) {

	if(pageType === 'stuff') {
		//alert('ll')
		$('#introtext').html(intro_html);
		
		//console.log('radt')
		gotoPage(gameid);
		//collapse_event_gen();
		//console.log(lineImage[2])
		//collapse_img_show(gameid, pageType, lineFlag);
		$('.mui-table-view-cell.mui-collapse').css({
			'background-color': bg_color + lowPR
		});
		collapse_img_show(gameid, pageType, lineFlag);
		collapse_event_gen();
	}

	if(pageType === 'setup') {
		
		//console.log(document.getElementById('setup_tab').innerHTML)
		//console.log(html1)
		$('#setup_tab').html(html1);
		//console.log('ready')
		collapse_img_show(gameid, pageType, lineFlag);
		collapse_event_gen();
		gotoPage(gameid);
		//collapse_event_gen();
		//collapse_img_show(gameid, pageType, lineFlag);
		$('.mui-table-view-cell.mui-collapse').css({
			'background-color': bg_color + lowPR
		});
		change_tab_theme(theme_color, 0);
		$('#gameSetup').css({
			'color': theme_color
		});
		
		
		//change_tab_theme(theme_color, 0);
	}
	if(pageType === 'flow') {
		var item2 = document.getElementById('flow_tab');
		item2.innerHTML = html2;
		change_tab_theme(theme_color, 1);
		collapse_img_show(gameid, pageType, lineFlag);
		collapse_event_gen();
	}
	if(pageType === 'end') {
		//console.log(html3)
		var item3 = document.getElementById('end_tab');
		item3.innerHTML = html3;
		change_tab_theme(theme_color, 2);
		collapse_img_show(gameid, pageType, lineFlag);
		collapse_event_gen();
	}
	//if (pageType === 'setup'){
	//change_tab_theme(theme_color,0);
	//}
	//console.log('html1')
	
	/*
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
	*/
}

var create_html_txt = function(pageType) {
	//console.log('fa')
	$.each(lineFlag, function(index, content) {
		lineNum = index + 1
		lineType = lineFlag[index]
		if(lineType === 'txt') {
			add_no_collapse_text(pageType);
		}
		if(lineType === 'img') {
			add_collapse(pageType);
		}
		a_with_value = a_template.replace('%value%', lineText[index])
		add_a(pageType, lineType, lineNum);
	});

	end_data(pageType);
	//console.log(html2)
	//html_ready(pageType)
	//html_ready(pageType);
};

var create_html_img = function(pageType) {
	$.each(lineFlag, function(index, content) {
		lineNum = index + 1
	});
	//console.log(html3);
	//console.log(pageType)
	html_ready(pageType)
	//console.log('finish')
	//console.log(html3)
}

//async function ajax_wait(gameid, pageType) {
function ajax_wait(gameid, pageType) {
	var promise1 = getPageLineNum(gameid, pageType)
	promise1.then(function(data1) {
		lineFlag = data1
		//console.log(lineFlag)
		ajax_wait_text(gameid, pageType, lineFlag)
	});
};

function ajax_wait_text(gameid, pageType, lineFlag) {
	var promise_array = []
	var lock = true
	//$.each(lineFlag, function(index, content){
	//console.log('fdadf')

};

async function ajax_wait_subpage(gameid, pageno) {
	subpage_url = await getSubPageUrl(gameid, pageno)
	//console.log(subpage_url)
};
	
function ajax_wait_img(gameid, pageType, lineFlag) {
	console.log('in ajax img')
	var promise_array = []
	//$.each(lineFlag, function(index, content){
	var lineNumTotal = lineFlag.length + 1
};

if(current_page === 'gamepic') {
	$('#back_arrow').attr('id', gameid);
	$(document).ready(function() {
		gotoPage(gameid)
	});
}

if(current_page === 'gameintro') {
	mui.previewImage();
	$('#back_arrow').attr('id', gameid);

	pageType = 'stuff'

	// this will create stuff page
	ajax_wait(gameid, pageType);
}

if(current_page === 'gamecover') {
	$(document).ready(function() {
		setTimeout(function() {
			valueRates_w = $('#valueRates').width();
			valueRates_h = $('#valueRates').height();
			//vertical align middle
			$('#valueRates').css({
				'line-height': valueRates_h + pixels
			});
			svg1_w = $('#svg1').width();
			svg1_h = $('#svg1').height();
			//position inner image
			yearsvg_w = $('#yearsvg').width() * cover_img_scale_factor;
			yearsvg_h = $('#yearsvg').height() * cover_img_scale_factor;

			left_position = (svg1_w - yearsvg_w + 16) / 2 + pixels;
			top_position = (svg1_h - yearsvg_h) / 2 + pixels;
			svg_width = yearsvg_w;
			svg_height = yearsvg_h;
			$('#yearsvg').css({
				'left': left_position
			});
			$('#yearsvg').css({
				'top': top_position
			});
			$('#yearsvg').css({
				'width': svg_width
			});
			$('#yearsvg').css({
				'height': svg_height
			});

			$('#weightsvg').css({
				'left': left_position
			});
			$('#weightsvg').css({
				'top': top_position
			});
			$('#weightsvg').css({
				'width': svg_width
			});
			$('#weightsvg').css({
				'height': svg_height
			});

			$('#agesvg').css({
				'left': left_position
			});
			$('#agesvg').css({
				'top': top_position
			});
			$('#agesvg').css({
				'width': svg_width
			});
			$('#agesvg').css({
				'height': svg_height
			});

			$('#playerssvg').css({
				'left': left_position
			});
			$('#playerssvg').css({
				'top': top_position
			});
			$('#playerssvg').css({
				'width': svg_width
			});
			$('#playerssvg').css({
				'height': svg_height
			});

			$('#clocksvg').css({
				'left': left_position
			});
			$('#clocksvg').css({
				'top': top_position
			});
			$('#clocksvg').css({
				'width': svg_width
			});
			$('#clocksvg').css({
				'height': svg_height
			});
		}, 50);
		/*
		if(langLvl0 === langDepLvl) {
			$('#langLvl0').addClass('color-orange');
		}
		if(langLvl1 === langDepLvl) {
			$('#langLvl1').addClass('color-orange');
		}
		if(langLvl2 === langDepLvl) {
			$('#langLvl2').addClass('color-orange');
		}
		if(langLvl2 === langDepLvl) {
			$('#langLvl2').addClass('color-orange');
		}
		if(langLvl3 === langDepLvl) {
			$('#langLvl3').addClass('color-orange');
		}
		*/
	});

}

if(current_page === 'gamerule') {
	console.log("in document ready gamerule");
	$('#back_arrow').attr('id', gameid);

	lineText = []
	lineImage = []
	//var lineNo = []
	lineFlag = []
	pageType = 'setup'
	// this will create setup page
	//ajax_wait(gameid, pageType);

}

var generate_html = function(pageType) {

	lineText = []
	lineImage = []
	//var lineNo = []
	lineFlag = []
	//pageType = 'flow'
	//console.log(pageType)
	//console.log(lineFlag)
	// this will create flow page
	ajax_wait(gameid, pageType);
	//console.log(html2)
}

var generate_html3 = function() {

	//pageType = 'end'

	// this will create end page
	ajax_wait(gameid, pageType);

	//return html3;
}
