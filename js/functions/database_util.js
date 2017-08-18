var queryGameInfoSimple = function(json) {
    try { 
    	//alert('hello')
    	gameid = json.gameid
		nameCN = json.nameCN
   
    } catch (e) { 
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
		imgCaption = '\'../img/'+gameid+'/caption.jpg\'';
		
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
			$('#caption-pic').css({'background-image': 'url('+imgCaption+')'})
			$('#caption-pic').css({'height': slide_height})
			$('#gameName').html(gameName);
			$('#nameCN').html(nameCN);
			$('#subText').html(subText);
			$('#subName').html(subName);
			$('#sideHeader').html(sideHeader);
			//$('#langLvl'+language_dependence).addClass('color-orange');
		});

    } catch (e) { 
    	alert(e)
        //document.write(e.description); 
    } finally { 
    	
    } 
};

var queryGameInfoEN = function(json) {
    try { 
    	//alert('hello')
		nameEN = json.name
		//imgCaption = '../img/'+nameEN+'/caption.jpg';
		//alert(imgCaption)
		//$('#caption-pic').css({'background-image': imgCaption})
        //alert(averageweight)
        //alert(suggested_numplayers)
        //data = list(records[0])
        //alert(current_page)
        if (current_page === 'gameintro'){
        	nameEN_temp = change_nameEN(nameEN);
        	pageTitle = nameCN + nameEN_temp;
        	$("title").html(pageTitle);
			$('#headerTitle').html(headerTitle);
        }
		
        if (current_page === 'gamerule'){
        	nameEN_temp = change_nameEN(nameEN);
			pageTitle = nameCN + nameEN_temp;
			headerTitle = nameCN + nameEN_temp;
			$("title").html(pageTitle);
			$('#headerTitle').html(headerTitle);
			//alert(headerTitle)
        }
        
    } catch (e) { 
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
        if (current_page === 'gamecover'){
        	$(document).ready(function() {
	        	//alert(theme_color)
				$('#langLvl'+language_dependence).addClass('color-orange');
				//modify after class is added
				$('.color-orange').css({'color': theme_color});
			});
        }
        
        
    } catch (e) { 
    	alert(e)
        //document.write(e.description); 
    } finally { 
    	
    } 
};

var queryImageInfo = function(json,obj) {
    try { 
		$(obj).attr('src',json.image_path); 
    } catch (e) { 
    	alert(e)
    } finally { 
    	
    } 
};

var queryTextInfo = function(json,obj) {
    try { 
    	//alert(json.text_content)
    	if(json.text_content !== null){
    		document.getElementById(obj.replace('#','')).innerHTML = json.text_content
    	}
    } catch (e) { 
    	alert(e)
    } finally {
    	
    } 
};

function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]);
	return null;
} 



id = getQueryString('id')
//alert(gameid)
var gameURL = 'http://180.76.244.130:3000/games/getGameInfo'
var styleURL = 'http://180.76.244.130:3000/games/getStyleInfo'

//alert(URL)

var lang_cn = 'cn'
var lang_en = 'en'

if (current_page === 'gamecover'){
	$.ajax({
			url: gameURL,
			data:{gameid:id,
			lang:lang_cn},
			success:queryGameInfoCN,
			dataType:'json'
		});
}

if (current_page === 'gamerule'){
		$.ajax({
			url: gameURL,
			data:{gameid:id,
			lang:lang_cn},
			success:queryGameInfoSimple,
			dataType:'json'
			});
	}
if (current_page === 'gamepic'){
		$.ajax({
			url: gameURL,
			data:{gameid:id,
			lang:lang_cn},
			success:queryGameInfoSimple,
			dataType:'json'
		});
	}
if (current_page === 'gameintro'){
		$.ajax({
			url: gameURL,
			data:{gameid:id,
			lang:lang_cn},
			success:queryGameInfoSimple,
			dataType:'json'
		});
	}

var queryGameInfoSimple = function(id, lang_cn){
	if (current_page === 'gamerule'){
		$.ajax({
			url: gameURL,
			data:{gameid:id,
			lang:lang_cn},
			success:queryGameInfoSimple,
			dataType:'json'
			});
	}
	
};


//if (cuurent_page === 'gamecover' or )
$.ajax({
	url: styleURL,
	data:{gameid:id},
	success:queryStyleInfo,
	dataType:'json'
});

$.ajax({
	url: gameURL,
	data:{gameid:id,
	lang:lang_en},
	success:queryGameInfoEN,
	dataType:'json'
});


var setImagePath = function(id,type,loc,obj){
	var imageURL = 'http://180.76.244.130:3000/games/getImageInfo'
	//alert(obj)
	$.ajax({
		url: imageURL,
		data:{gameid:id,
		pageType: type,
		location: loc},
		dataType:'json',
		success:function(data){queryImageInfo(data,obj)}
	});
};

var setTextContent = function(id,type,loc,obj){
	//$(obj).text(text)
	var textURL = 'http://180.76.244.130:3000/games/getTextInfo'
	//alert(obj)
	$.ajax({
		url: textURL,
		data:{gameid:id,
		pageType: type,
		location: loc},
		dataType:'json',
		success:function(data){queryTextInfo(data,obj)}
	});
	
};

//alert(age)
