mui.init({
	swipeBack: false
});

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
				}, 500);
			}
		} else if(e.detail.slideNumber === 2) {
			if(item3.querySelector('.mui-loading')) {
				setTimeout(function() {
					item3.querySelector('.mui-scroll').innerHTML = html3;
				}, 500);
			}
		}
	});
	
})(mui);