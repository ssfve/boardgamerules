mui.init({
	swipeBack: false
});
function setScrollHeader() {
	//$('#inittitle').html(players4);
	$('#gameSetup').html(gameSetup);
	$('#gameFlow').html(gameFlow);
	$('#gameEnd').html(gameEnd);
	$('#initlist').html(html1);
};
setScrollHeader();



(function($) {
	$('.mui-scroll-wrapper').scroll({
		indicators: true //是否显示滚动条
	});
	
	var item2 = document.getElementById('item2mobile');
	var item3 = document.getElementById('item3mobile');
	document.getElementById('slider').addEventListener('slide', function(e) {
		if(e.detail.slideNumber === 1) {
			if(item2.querySelector('.mui-loading')) {
				setTimeout(function() {
					item2.querySelector('.mui-scroll').innerHTML = html2;
					//collapse_event_gen();
				}, 100);
			}
		} else if(e.detail.slideNumber === 2) {
			if(item3.querySelector('.mui-loading')) {
				setTimeout(function() {
					item3.querySelector('.mui-scroll').innerHTML = html3;
					//collapse_event_gen();
				}, 100);
			}
		}else if(e.detail.slideNumber === 0) {
		}
		setTimeout(function() {
			change_theme(theme_color,e.detail.slideNumber);
			collapse_event_gen();
		}, 100);
		
		
	});
	
})(mui);

document.getElementById('gameSetup').addEventListener('tap', function(e) {
	$('#gameSetup').css({'color': theme_color});
	$('#gameFlow').css({'color': default_color});
	$('#gameEnd').css({'color': default_color});
});

document.getElementById('gameFlow').addEventListener('tap', function(e) {
	$('#gameSetup').css({'color': default_color});
	$('#gameFlow').css({'color': theme_color});
	$('#gameEnd').css({'color': default_color});
});
	
document.getElementById('gameEnd').addEventListener('tap', function(e) {
	$('#gameSetup').css({'color': default_color});
	$('#gameFlow').css({'color': default_color});
	$('#gameEnd').css({'color': theme_color});	
});

collapse_event_gen();
