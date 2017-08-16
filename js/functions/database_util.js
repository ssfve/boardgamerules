var queryGameInfoSimple = function(json) {
    try { 
    	//alert('hello')
    	gameid = json.gameid
		nameCN = json.nameCN
   
        if (current_page === 'gamepic'){
        	$('#back_arrow').attr('id',gameid);
			gotoPage(gameid)
        }
        if (current_page === 'gamerule'){
        	$('#back_arrow').attr('id',gameid);
			gotoPage(gameid)
        }

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
		average = json.average.toFixed(1);
		bayesaverage_subtype = json.bayesaverage_subtype
		bayesaverage_type = json.bayesaverage_type
		averageweight = json.averageweight.toFixed(2);
		suggested_numplayers = json.suggested_numplayers
		nameCN = json.nameCN
		expansionsCN = json.expansionsCN
		typeCN = json.typeCN
		categorysCN = json.categorysCN
		//alert(categorysCN)
		mechanicsCN = json.mechanicsCN
		familysCN = json.familysCN
		subdomainCN = json.subdomainCN
		designersCN = json.designersCN.replace('|','')
		//alert(designersCN)
		artistsCN = json.artistsCN.replace('|','')
		publishersCN = json.publishersCN
        //alert(averageweight)
        //alert(suggested_numplayers)
        //data = list(records[0])
        alternations();
        toast_alter();
        
        imgCaption = '../img/'+gameid+'/caption.jpg';
        if (current_page === 'gamepic'){
        	$('#back_arrow').attr('id',gameid);
			gotoPage(gameid)
        }
        if (current_page === 'gamerule'){
        	$('#back_arrow').attr('id',gameid);
			gotoPage(gameid)
        }

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
        if (current_page === 'gamerule'){
        	$('#gameSetup').css({'color': theme_color});
			$('.mui-table-view-cell.mui-collapse').css({'background-color': bg_color + lowPR});
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
		document.getElementById(obj.replace('#','')).innerHTML = json.text_content
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
