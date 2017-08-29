mui.init({
	swipeBack: false
});
function setScrollHeader() {
	//$('#inittitle').html(players4);
	$('#gameSetup').html(gameSetup);
	$('#gameFlow').html(gameFlow);
	$('#gameEnd').html(gameEnd);
	$('#gameOther').html(gameOther);
};
setScrollHeader(); 
mui.previewImage();
//mui.plusReady(function() {
	//alert('in')
    //var self = plus.webview.currentWebview();  
    //alert(gameid)
//});  


//window.addEventListener('show', function(event) {
	//alert('in')
    //gameid = event.detail.id;
    //alert(gameid)
//});

(function($) {
	$('.mui-scroll-wrapper').scroll({
		indicators: true //是否显示滚动条
	});
	
	var item2 = document.getElementById('item2mobile');
	var item3 = document.getElementById('item3mobile');
	var item4 = document.getElementById('item4mobile');
	document.getElementById('slider').addEventListener('slide', function(e) {
		//console.log('slide in')
		if(e.detail.slideNumber === 1) {
			pageType = 'flow'
			//if(item2.querySelector('.mui-loading')) {
				//console.log('in flow')
				//generate_html(pageType);		
			//}else{
			generate_html(pageType);
			change_tab_theme(theme_color,e.detail.slideNumber);
			//}
		} else if(e.detail.slideNumber === 2) {
			pageType = 'end'
			//if(item3.querySelector('.mui-loading')) {
				//generate_html(pageType);
			//}else{
			generate_html(pageType);
			change_tab_theme(theme_color,e.detail.slideNumber);
			//}
		} else if(e.detail.slideNumber === 3) {
			if(item4.querySelector('.mui-loading')) {
				//setTimeout(function() {
				item4.querySelector('.mui-scroll').innerHTML = html4;
				//}, 100);
			}
		} else if(e.detail.slideNumber === 0) {
			pageType = 'setup'
			generate_html(pageType);
			change_tab_theme(theme_color,0);
		}
		//setTimeout(function() {
		//change_tab_theme(theme_color,e.detail.slideNumber);
		//collapse_event_gen();
		//}, 100);
	});
	
})(mui);

document.getElementById('gameSetup').addEventListener('tap', function(e) {
	/*
	pageType = 'setup';
	lineText = []
	lineImage = []
	//var lineNo = []
	lineFlag = []
	$('#gameSetup').css({'color': theme_color});
	$('#gameFlow').css({'color': default_color});
	$('#gameEnd').css({'color': default_color});
	$('#gameOther').css({'color': default_color});
	*/
	$('#slider').trigger('slide');
});

document.getElementById('gameFlow').addEventListener('tap', function(e) {
	/*
	pageType = 'flow';
	generate_html(pageType);	
	var lineText = []
	var lineImage = []
	$('#gameSetup').css({'color': default_color});
	$('#gameFlow').css({'color': theme_color});
	$('#gameEnd').css({'color': default_color});
	$('#gameOther').css({'color': default_color});
	*/
	$('#slider').trigger('slide');
});
	
document.getElementById('gameEnd').addEventListener('tap', function(e) {
	/*
	pageType = 'end';
	generate_html(pageType);
	var lineText = []
	var lineImage = []
	$('#gameSetup').css({'color': default_color});
	$('#gameFlow').css({'color': default_color});
	$('#gameEnd').css({'color': theme_color});
	$('#gameOther').css({'color': default_color});
	*/
	$('#slider').trigger('slide');
});

if (document.getElementById('gameOther') !== null){
	document.getElementById('cssgameOther').addEventListener('tap', function(e) {
	$('#gameSetup').css({'color': default_color});
	$('#gameFlow').css({'color': default_color});
	$('#gameEnd').css({'color': default_color});	
	$('#gameOther').css({'color': theme_color});
});
}



