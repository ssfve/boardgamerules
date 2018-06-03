var table_seg = '<ul class="mui-table-view" >%data%</ul>';
var list_seg_disabled = '<li class="mui-table-view-cell">%data%</li>';
var list_seg_enabled = '<li class="mui-table-view-cell">%data%</li>';
var list_seg_pre = '<li class="mui-table-view-cell">';
var list_seg_post = '</li>';
var stack_seg = '<li class="mui-table-view-cell mui-collapse">%data%</li>';
var stack_seg_class = 'mui-table-view-cell';
var stack_seg_class = 'mui-table-view-cell mui-collapse';

var orange_text_seg = '<span class="h6-text-orange">%data%</span>';
var grey_text_seg = '<span class="h6-text-grey">%data%</span>';
var img_text_seg = '<center><img src="../img/%data%" alt="Please Refresh this Page!" width="100%" data-preview-src="" data-preview-group="1"/></center>';

var stack_seg_header = '<a class="mui-navigate-right" href="#">%data%</a>';
var stack_seg_content = '<div class="mui-collapse-content">%data%</div>';

var link_seg = '<a id="%link%" class="mui-navigate-right" style="color:#FFFFFF;">%data%</a>';
var address_seg = '../%data%/gamecover/gameCover.html';
var new_address_seg = 'gameCover.html?id=%data%';
var local_address_seg = '../%data%/gamecover/gameCover.html';
var local_hotlist_seg = 'hotlist.html';
var a_seg = '<a>%data%</a>';

var index_seg = '<div class="mui-indexed-list-bar">%data%</div>';

var index_class_seg = '<li data-group="%1%" class="mui-table-view-divider mui-indexed-list-group">%0%</li>';
var index_value_seg = '<li data-value="%2%" data-tags="%3%" id="%4%" class="mui-table-view-cell mui-indexed-list-item">%1% %0%</li>';
var row_seg = '<div class="mui-row">%data%</div>'
// use D
var seg_list = []
seg_list[1] = '<div class="mui-col-sm-1 mui-col-xs-1">'
seg_list[2] = '<div class="mui-col-sm-2 mui-col-xs-2">'
seg_list[3] = '<div class="mui-col-sm-3 mui-col-xs-3">'
seg_list[4] = '<div class="mui-col-sm-4 mui-col-xs-4">'
seg_list[5] = '<div class="mui-col-sm-5 mui-col-xs-5">'
seg_list[6] = '<div class="mui-col-sm-6 mui-col-xs-6">'
seg_list[7] = '<div class="mui-col-sm-7 mui-col-xs-7">'
seg_list[8] = '<div class="mui-col-sm-8 mui-col-xs-8">'
seg_list[9] = '<div class="mui-col-sm-9 mui-col-xs-9">'
seg_list[10] = '<div class="mui-col-sm-10 mui-col-xs-10">'
seg_list[11] = '<div class="mui-col-sm-11 mui-col-xs-11">'
seg_list[12] = '<div class="mui-col-sm-12 mui-col-xs-12">'

var mic_seg = '<div class="flex-container"><a id="icon-mic" class="active"><span class="mui-icon mui-icon-mic-filled"></span></a></div>'

var list_line = '';
var text_line = '';
var index_line = '';
var stack_line = '';
var final_html = '';
var list_seg = '';
highPR = 'important'
lowPR = '!important'

var change_nameEN = function(name) {
	name_copy = name;
	name = '';
	for(var i = 0; i < name_copy.length; i++) {
		//alert(nameEN_copy.substring(i,i+1))
		if(i === 0) {
			name += name_copy.substring(i, i + 1).toUpperCase();
		} else if(name_copy.substring(i, i + 1) === '-') {
			name += ' ';
			name += name_copy.substring(i + 1, i + 2).toUpperCase();
			i += 1;
		} else {
			name += name_copy.substring(i, i + 1);
		}
		//alert(nameEN);
	}
	return name;
};

var generate = function(array) {
	list_seg = list_seg_disabled
	array.forEach(function(val, index) {
		//alert(array[index]);
		if(val.substr(0, 1) === 'O') {
			if(val.substr(1, 1) === 'E') {
				var text = val.substr(2, val.length);
				text_line += orange_text_seg.replace('%data%', text)
				list_line += list_seg.replace('%data%', text_line)
				text_line = ''
			} else if(val.substr(1, 1) === '%') {
				var text = val.substr(2, val.length);
				text_line += orange_text_seg.replace('%data%', text)
			} else {
				var text = val.substr(1, val.length);
				text_line += orange_text_seg.replace('%data%', text)
			}
		}
		if(val.substr(0, 1) === 'G') {
			if(val.substr(1, 1) === 'E') {
				var text = val.substr(2, val.length);
				text_line += grey_text_seg.replace('%data%', text)
				list_line += list_seg.replace('%data%', text_line)
				text_line = ''
			} else {
				var text = val.substr(1, val.length);
				text_line += grey_text_seg.replace('%data%', text)
				//list_line += list_seg.replace('%data%',text_line)
			}
		}
		if(val.substr(0, 1) === 'I') {
			//alert('asdf')
			var text = val.substr(1, val.length);
			text_line = img_text_seg.replace('%data%', text)
			list_line += list_seg.replace('%data%', text_line)
			text_line = ''
		}
		if(val.substr(0, 1) === 'D') {
			//alert('asdf')
			if(val.substr(1, val.length) === 'A') {
				text_line += seg_list[10];
			} else if(val.substr(1, val.length) === 'B') {
				text_line += seg_list[11];
			} else if(val.substr(1, val.length) === 'E') {
				//alert(val)
				//alert('in')
				text_line += '</div>';
				text_line = row_seg.replace('%data%', text_line)
				list_line += list_seg.replace('%data%', text_line)
				text_line = ''
			} else {
				text_line += '</div>';
				text_line += seg_list[val.substr(1, val.length)];
			}
		}
		if(val.substr(0, 1) === 'M') {
			//alert('asdf')
			text_line += mic_seg;
		}
		if(val.substr(0, 1) === 'S') {
			if(val.length === 2 && val.substr(0, 2) === 'SE') {
				list_seg = list_seg_disabled
				//alert(list_line);
				re = new RegExp(list_seg_pre, "g");
				list_line = list_line.replace(re, '<p class="add-margin-top add-margin-bottom">');
				re = new RegExp(list_seg_post, "g");
				list_line = list_line.replace(re, '</p>');
				//alert(list_line);
				//alert(stack_seg_content.replace('%data%',list_line))
				stack_line += stack_seg_content.replace('%data%', list_line);

				list_line = stack_seg.replace('%data%', stack_line);
				stack_line = '';
			} else {
				list_seg = list_seg_enabled
				var text = val.substr(1, val.length);
				stack_line += stack_seg_header.replace('%data%', text)
			}
		}
	});
	return list_line;
};

var generateside = function(arrayEN, arrayCN, arrayID) {
	list_seg = list_seg_disabled
	arrayEN.forEach(function(val, index) {
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

var gotoPage = function(Id) {
	//alert(document.getElementById(Id))
	document.getElementById(Id).addEventListener('tap', function() {
		gameid = document.getElementById(Id).id
		//alert(window.location.href)
		//alert(window.location.href.replace('gameRule','gameCover'))
		var index = window.location.href.lastIndexOf("\/");
		var address_prefix = window.location.href.substring(0, index + 1)
		//alert(address_prefix)

		var address_postfix = new_address_seg.replace('%data%', Id)
		//alert(address_postfix)

		var new_address = address_prefix + address_postfix
		//alert(new_address)

		location.href = new_address;
		//window.location.reload();
		if(gameid === 'rulebook-list') {
			window.location.href = local_hotlist_seg;
		}

	});

};

var generateSidelink = function(array) {
	array.forEach(function(val, index) {
		//alert(array[index]);
		gotoPage(array[index]);
	});
}

var index_gen = function(array) {
	var html_line = ''
	array.forEach(function(val, index) {
		html_line += a_seg.replace('%data%', val)
	});
	return html_line
}

var index_games_gen = function(array) {
	var html_line = ''
	array.forEach(function(val, index) {
		//alert(type(val))
		if(val.length === 2) {
			temp_line = index_class_seg.replace('%0%', val[0]);
			html_line += temp_line.replace('%1%', val[1]);
		}
		if(val.length === 4) {
			temp_line = index_value_seg.replace('%0%', change_nameEN(val[1]));
			temp_line = temp_line.replace('%1%', val[2]);
			temp_line = temp_line.replace('%2%', val[3]);
			temp_line = temp_line.replace('%3%', val[1]);
			html_line += temp_line.replace('%4%', val[0]);
		}

	});
	//html_line = html_line.replace('>"','>');
	//html_line = html_line.replace('"<','<');
	return html_line
}

var generateIndexlink = function(array) {
	array.forEach(function(val, index) {
		if(val.length === 4) {
			// 0 is gameid
			gotoPage(val[0]);
		}

	});
}

var change_theme = function(color) {
	$('.h6-text-orange').css({
		'color': color
	});
	$('.background-color-orange').css({
		'background-color': color
	});
	$('.bs-wo').css({
		'background-color': color
	});
	//alert('../img/interface/'+color+'.svg')
	$("#svg1").attr('src', '../img/interface/' + color.substr(1, 6) + '.svg');
	$("#svg2").attr('src', '../img/interface/' + color.substr(1, 6) + '.svg');
	$("#svg3").attr('src', '../img/interface/' + color.substr(1, 6) + '.svg');
	$("#svg4").attr('src', '../img/interface/' + color.substr(1, 6) + '.svg');
	$("#svg5").attr('src', '../img/interface/' + color.substr(1, 6) + '.svg');
	$("#svg6").attr('src', '../img/interface/' + color.substr(1, 6) + '.svg');
};

var change_tab_theme = function(color, number) {
	$('.mui-segmented-control.mui-segmented-control-inverted~.mui-slider-progress-bar').css({
		'background-color': color
	});
	$('.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active').css({
		'color': color
	});
	//$('.mui-segmented-control.mui-segmented-control-inverted .mui-control-item').css({'color': color + priority});
	console.log(color+lowPR);
	$('.mui-segmented-control.mui-segmented-control-inverted .mui-control-item').css({
		'color': color + lowPR
	});
	$('.mui-table-view-cell.mui-active').css({
		'background-color': color
	});
	//$('.mui-table-view-cell.mui-active').css({'background-color': color});
	$('.mui-table-cell.mui-active').css({
		'background-color': color
	});

	if(number === 0) {
		$('#gameSetup').css({
			'color': theme_color
		});
		$('#gameFlow').css({
			'color': default_color
		});
		$('#gameOther').css({
			'color': default_color
		});
		$('#gameEnd').css({
			'color': default_color
		});
	}
	if(number === 1) {
		console.log("in number 1");
		$('#gameSetup').css({
			'color': default_color
		});
		$('#gameFlow').css({
			'color': theme_color
		});
		$('#gameOther').css({
			'color': default_color
		});
		$('#gameEnd').css({
			'color': default_color
		});
	}
	if(number === 2) {
		$('#gameSetup').css({
			'color': default_color
		});
		$('#gameFlow').css({
			'color': default_color
		});
		$('#gameOther').css({
			'color': default_color
		});
		$('#gameEnd').css({
			'color': theme_color
		});
	}
	if(number === 3) {
		$('#gameSetup').css({
			'color': default_color
		});
		$('#gameFlow').css({
			'color': default_color
		});
		$('#gameEnd').css({
			'color': default_color
		});
	}

};

var collapse_event_gen = function() {
	var active_sec = document.getElementsByClassName("mui-table-view-cell mui-collapse");
	//alert(active_sec.length)
	for(var i = 0; i < active_sec.length; i++) {
		//alert('in')
		//alert(i)
		active_sec[i].addEventListener('tap', function(e) {
			//alert('in')
			setTimeout(function() {
				$('.mui-table-view-cell.mui-collapse').css({
					'background-color': bg_color
				});
				$('.mui-table-view-cell.mui-collapse.mui-active').css({
					'background-color': theme_color
				});
				$('.mui-table-view-cell.mui-collapse.mui-active .mui-collapse-content').css({
					'background-color': content_color
				});
			}, 10);

		});
		//index = index+1
		//alert('out');
	};
};

var collapse_img_show = function(gameid, pageType, lineFlag) {
	//console.log(pageType)
	var active_sec = []
	if(pageType === 'setup') {
		var item1 = document.getElementById('item1mobile');
		//console.log(item1.innerHTML)
		active_sec = item1.getElementsByClassName("mui-table-view-cell");
		//console.log(active_sec)
	}
	if(pageType === 'flow') {
		var item2 = document.getElementById('item2mobile');
		active_sec = item2.getElementsByClassName("mui-table-view-cell");
	}
	if(pageType === 'end') {
		var item3 = document.getElementById('item3mobile');
		active_sec = item3.getElementsByClassName("mui-table-view-cell");
	}
	if(pageType === 'stuff') {
		var item4 = document.getElementById('introtext');
		//console.log(item4.innerHTML)
		active_sec = item4.getElementsByClassName("mui-table-view-cell");
	}

	//console.log(active_sec)
	$.each(lineFlag, function(key, value) {
		//console.log(lineFlag)
		lineNum = key + 1
	});
};

var alternations = function() {

	average = average.toFixed(1);
	averageweight = averageweight.toFixed(2);
	designersCN = designersCN.replace('|', ',').replace('|', ',')
	if(designersCN === '(Uncredited)') {
		designersCN = '匿名'
	}

	artistsCN = artistsCN.replace('|', '')
	if(artistsCN === '(Uncredited)' || artistsCN === 'None') {
		artistsCN = '匿名'
	}
	if(artistsCN === '') {
		designers_temp = designersCN
	} else {
		designers_temp = designersCN + artistsCN
	}
	
	//alert(categorysCN[categorysCN.length-1])
	// remove the last pipeline
	//alert(categorysCN)
	categorysCN = categorysCN.substr(0,categorysCN.length-1)
	//alert(categorysCN)
	//alert(suggested_numplayers)
	if(suggested_numplayers === 'None') {
		playersBest = ''
	} else {
		suggested_numplayers = suggested_numplayers.replace('-', '~');
		playersBest = '[' + suggested_numplayers + ']';
	}

	if(maxplayers === 'None' || maxplayers === minplayers) {
		players = minplayers;
	} else {
		players = minplayers + '~' + maxplayers;
	}

	//alert(players)
	if(playersBest === '') {
		playersMea = '游戏人数: ' + players + '人'
	} else {
		playersMea = '游戏人数[最佳人数]: ' + players + playersBest + '人'
	}

	// rate number to k
	if(usersrated >= 1000) {
		usersrated = (usersrated / 1000).toFixed(1) + 'k';
	}
	// minplaytime and maxplaytime
	if(maxplaytime === '' || maxplaytime === 'None' || maxplaytime === '0' || maxplaytime === minplaytime) {
		playtime = minplaytime + '’'
	} else {
		playtime = minplaytime + '’~' + maxplaytime + '’'
	}
	playtimeMea = '游戏时间: ' + playtime.replace('’', '').replace('’', '') + '分钟'

	//weight = averageweight+'/5';
	nameEN_mod = change_nameEN(nameEN);
	pageTitle = nameCN + ' ' + nameEN_mod

	button2 = '>>' + pageTitle + '<<';

};

var toast_alter = function() {
	if(average === 'N/A') {
		numRatesMea = '评分: ' + average + '  数量: ' + usersrated + '条'
	} else {
		numRatesMea = '评分: ' + average + '/10  数量: ' + usersrated + '条'
	}
	//icon2
	yearMea = '出版时间: ' + yearpublished + '年'
	weightExp = '复杂度(重度): ' + averageweight + '/5'
	ageMea = '适合年龄: ' + age + '岁' + ageMeaPlus
	if(playersBest === '') {
		playersMea = '游戏人数: ' + players + '人'
	} else {
		playersMea = '游戏人数[最佳人数]: ' + players + playersBest + '人'
	}
	playtimeMea = '游戏时间: ' + playtime.replace('’', '').replace('’', '') + '分钟'
}