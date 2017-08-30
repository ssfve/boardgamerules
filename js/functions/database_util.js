var queryGameInfoSimpleCN = function(json) {
	try {
		//alert('hello')
		//gameid = json.gameid
		data = json.nameCN
		resolve(data)
	} catch(e) {
		alert(e)
		//document.write(e.description); 
	} finally {

	}
};

var queryGameInfoCN = function(json) {
	try {
		//alert('hello')
		gameid = json.gameid
		yearpublished = json.yearpublished
		age = json.age
		suggested_playerage = json.suggested_playerage
		usersrated = json.usersrated
		rank_subtype = json.rank_subtype
		rank_type = json.rank_type
		numweights = json.numweights
		minplayers = json.minplayers
		maxplayers = json.maxplayers
		minplaytime = json.minplaytime
		maxplaytime = json.maxplaytime
		language_dependence = json.language_dependence
		average = json.average
		bayesaverage_subtype = json.bayesaverage_subtype
		bayesaverage_type = json.bayesaverage_type
		averageweight = json.averageweight
		suggested_numplayers = json.suggested_numplayers
		nameCN = json.nameCN
		expansionsCN = json.expansionsCN
		typeCN = json.typeCN
		categorysCN = json.categorysCN
		//alert(categorysCN)
		mechanicsCN = json.mechanicsCN
		familysCN = json.familysCN
		subdomainCN = json.subdomainCN
		designersCN = json.designersCN
		//alert(designersCN)
		artistsCN = json.artistsCN
		publishersCN = json.publishersCN
		//alert(averageweight)
		//alert(suggested_numplayers)
		//data = list(records[0])
		alternations();
		toast_alter();

		//var index = window.location.href.lastIndexOf("index");  
		//var address_prefix = window.location.href.substring(0,index)
		//alert(address_prefix)
		//alert(address_prefix)
		imgCaption = '\'../img/' + gameid + '/caption.jpg\'';

		$(document).ready(function() {
			$('#numRates').html(usersrated);
			$('#valueRates').html(average);
			$('#yearPub').html(yearpublished);
			$('#yearPubMea').html(yearMea);
			$('#weight').html(averageweight);
			$('#weightLimit').html(weightLimit);
			$('#weightExp').html(weightExp);
			$('#age').html(age);
			$('#ageMea').html(ageMea);
			$('#ageMeaPlus').html(ageMeaPlus);
			$('#players').html(players);
			$('#playersMea').html(playersMea);
			$('#playersBest').html(playersBest);
			$('#playtime').html(playtime);
			$('#designerTitle').html(designerTitle);
			$('#designerName').html(designers_temp);
			$('#langTitleHigh').html(langTitleHigh);
			$('#langTitleLow').html(langTitleLow);
			$('#langLvl0').html(langLvl0);
			$('#langLvl1').html(langLvl1);
			$('#langLvl2').html(langLvl2);
			$('#langLvl3').html(langLvl3);
			$('#langLvl4').html(langLvl4);
			$('#categoryTitle').html(categoryTitle);
			$('#categorys').html(categorysCN);
			$('#button1').html(button1);
			$('#button2').html(button2);
			$('#button3').html(button3);
			$('#button4').html(button4);
			$('#button5').html(button5);
			$('#button6').html(button6);
			$('#caption-pic').css({
				'background-image': 'url(' + imgCaption + ')'
			})
			$('#caption-pic').css({
				'height': slide_height
			})
			$('#gameName').html(gameName);
			$('#nameCN').html(nameCN);
			$('#subText').html(subText);
			$('#subName').html(subName);
			$('#sideHeader').html(sideHeader);
			//$('#langLvl'+language_dependence).addClass('color-orange');
		});

	} catch(e) {
		alert(e)
		//document.write(e.description); 
	} finally {

	}
};

var queryGameInfoEN = function(json) {
	try {
		//alert('hello')
		data = json.name
		resolve(data)
		//imgCaption = '../img/'+nameEN+'/caption.jpg';
		//alert(imgCaption)
		//$('#caption-pic').css({'background-image': imgCaption})
		//alert(averageweight)
		//alert(suggested_numplayers)
		//data = list(records[0])
		//alert(current_page)

	} catch(e) {
		alert(e)
		//document.write(e.description); 
	} finally {

	}
};

var queryStyleInfo = function(json) {
	try {
		//alert(json.theme_color)
		theme_color = json.theme_color
		content_color = json.content_color
		default_color = json.default_color
		bg_color = json.bg_color
		//alert(averageweight)
		//alert(suggested_numplayers)
		//data = list(records[0])
		//alert(theme_color)
		change_theme(theme_color);
		if(current_page === 'gamecover') {
			$(document).ready(function() {
				console.log(theme_color)
				$('#langLvl' + language_dependence).addClass('color-orange');
				//modify after class is added
				$('.color-orange').css({
					'color': theme_color
				});
			});
		}

	} catch(e) {
		alert(e)
		//document.write(e.description); 
	} finally {

	}
};

var queryImageInfo = function(json, obj) {
	try {
		if(json.image_path !== null) {
			img_with_src = img_template.replace('%value%', json.image_path)
			add_img(obj);
		} else {
			//$(obj).attr('height',0); 
		}
	} catch(e) {
		alert(e)
	} finally {

	}
};

var queryTextInfo = function(json, obj) {
	try {
		if(json.text_content !== null) {
			//alert(obj.split('_')[2])
			if(obj.split('_')[2] === '0') {
				a_with_value = a_template.replace('%value%', json.text_content)
				add_a(obj);
			} else if(obj.split('_')[2] !== undefined) {
				a_img_with_value = a_img_template.replace('%value%', json.text_content)
				add_a_where_img(obj);
			} else {
				a_with_value = a_template.replace('%value%', json.text_content)
				add_a(obj);
			}
		}
	} catch(e) {
		//alert('error')
		alert(e)
	} finally {

	}
};

var queryControlInfo = function(json, obj) {
	try {
		//alert(json.text_content)
		flag = json.flag
		pageType = json.pageType
		if(json.text_content !== null) {
			document.getElementById(obj.replace('#', '')).innerHTML = json.text_content
		}
	} catch(e) {
		alert(e)
	} finally {

	}
};

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

id = getQueryString('id')
//alert(gameid)
var gameURL = 'http://180.76.244.130:3000/games/getGameInfo'
var styleURL = 'http://180.76.244.130:3000/games/getStyleInfo'
var controlURL = 'http://180.76.244.130:3000/games/getControlInfo'
//alert(age)

//alert(URL)

var lang_cn = 'cn'
var lang_en = 'en'

if(current_page === 'gamecover') {
	$.ajax({
		url: gameURL,
		data: {
			gameid: id,
			lang: lang_cn
		},
		success: queryGameInfoCN,
		dataType: 'json'
	});
}

var imageURL = 'http://180.76.244.130:3000/games/getImageInfo'

var getSimpleCN = function(id) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: gameURL,
			data: {
				gameid: id,
				lang: 'cn'
			},
			dataType: 'json',
			success: function(data){
				temp_name = data.nameCN
				resolve(temp_name)
			},
			error: function(data) {}
		});
	});
};

var getSimpleEN = function(id) {
	//var imageURL = 'http://180.76.244.130:3000/games/getImageInfo'
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: gameURL,
			data: {
				gameid: id,
				lang: 'en'
			},
			dataType: 'json',
			success: function(data){
				temp_name = data.name
				resolve(temp_name)
			},
			error: function(data) {}
		});
	});
};

var change_names = function(nameEN, nameCN) {
	if(current_page === 'gameintro') {
		nameEN_temp = change_nameEN(nameEN);
		pageTitle = nameCN + nameEN_temp;
		$("title").html(pageTitle);
		$('#headerTitle').html(headerTitle);
	}

	if(current_page === 'gamerule') {
		nameEN_temp = change_nameEN(nameEN);
		pageTitle = nameCN + nameEN_temp;
		headerTitle = nameCN + nameEN_temp;
		console.log(headerTitle)
		$("title").html(pageTitle);
		$("#headerTitle").html(headerTitle);
		//alert(headerTitle)
	}
}

function ajax_wait_name(id) {
	var promise1 = getSimpleCN(id)
	var promise2 = getSimpleEN(id)
	promise1.then(function(data1) {
		nameCN = data1
		//console.log(lineFlag)
		change_names(nameEN, nameCN)
	});
	promise2.then(function(data1) {
		nameEN = data1
		//console.log(lineFlag)
		change_names(nameEN, nameCN)
	});
};

if(current_page === 'gamerule') {
	ajax_wait_name(id)
};

if(current_page === 'gamepic') {
	ajax_wait_name(id)
};

if(current_page === 'gameintro') {
	ajax_wait_name(id)
};

/*
var queryGameInfoSimpleCN = function(id, lang_cn){
	if (current_page === 'gamerule'){
		$.ajax({
			url: gameURL,
			data:{gameid:id,
			lang:lang_cn},
			success:queryGameInfoSimpleCN,
			dataType:'json'
			});
	}
	
};
*/

//if (cuurent_page === 'gamecover' or )
$.ajax({
	url: styleURL,
	data: {
		gameid: id
	},
	success: queryStyleInfo,
	dataType: 'json'
});

var setImagePath = function(id, type, loc) {
	var imageURL = 'http://180.76.244.130:3000/games/getImageInfo'
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: imageURL,
			data: {
				gameid: id,
				pageType: type,
				lineNum: loc
			},
			dataType: 'json',
			success: function(data, loc) {
				//alert(loc.split('_')[1])
				//if (loc.split('_')[1] === '0'){
				//add_no_collapse_img(type);
				//}
				//queryImageInfo(data,obj)
				//lineImage[loc] = []
				var temp = []
				$.each(data, function(index, content) {
					temp[index] = content.image_path;
				});
				resolve(temp)
			},
			error: function(data) {
				//end_img(obj)
			}
		});

	});
};

var setTextContent = function(id, type, loc) {
	//$(obj).text(text)
	var textURL = 'http://180.76.244.130:3000/games/getTextInfo'
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: textURL,
			data: {
				gameid: id,
				pageType: type,
				lineNum: loc
			},
			dataType: 'json',
			success: function(data, loc) {
				//if (loc.split('_')[1] === '0'){
				//add_no_collapse_text(type);
				//}else if (loc.split('_')[1] === undefined){
				//add_collapse(type);
				//}
				//queryTextInfo(data,obj)
				//alert(data.text_content)
				var temp = []
				temp[loc] = data.text_content
				resolve(temp[loc])
			},
			error: function(data) {
				//end_a(obj)
			}
		});
	});
};

var getPageLineNum = function(id, page) {
	//$(obj).text(text)
	var textURL = 'http://180.76.244.130:3000/games/getPageLineNum'
	//alert(obj)
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: textURL,
			data: {
				gameid: id,
				pageType: page
			},
			dataType: 'json',
			success: function(data) {
				$.each(data, function(index, content) {
					//alert(index)
					//alert(content)
					lineNo[index] = content.lineNum;
					lineFlag[index] = content.flag;
				});
				//alert('dfas')
				resolve(lineFlag)
			},
			error: function(data) {}
		});
	});
	//return p
};