

pageTitle = '说明书列表 Rulebook List'
$("title").html(pageTitle);


index_bar = index_gen(index_letters);
index_games_list = index_games_gen(index_games);
$('#indexListBar').html(index_bar);
$('#indexGames').html(index_games_list);
	
$(document).ready(function() {
	
	$('#header_title').html(pageTitle);
	generateIndexlink(index_games);
});


mui.init();
			mui.ready(function() {
				var header = document.querySelector('header.mui-bar');
				var list = document.getElementById('list');
				//calc hieght
				list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
				//alert(list.style.height)
				//create
				window.indexedList = new mui.IndexedList(list);
			});

