

let show_flow_url = 'https://www.boardgamerules.cn/index/branchs/showGuide.html';
let create_flow_url = 'https://www.boardgamerules.cn/index/branchs/loginPage.html';
let translate_url = 'https://www.boardgamerules.cn/index/fishPole.html';
let upload_url = 'https://www.boardgamerules.cn/index/gameCover.html';
let feedback_url = 'https://www.boardgamerules.cn/index/branchs/showGuide.html';

$('#show-flow-button').on('tap',function(){
	//location.href = show_flow_url;
	window.open(show_flow_url);
});
$('#create-flow-button').on('tap',function(){
	//location.href = create_flow_url;
	window.open(create_flow_url);
});
$('#translate-button').on('tap',function(){
	//location.href = translate_url;
	window.open(translate_url);
});
$('#upload-pdf-button').on('tap',function(){
	//location.href = upload_url;
	window.open(upload_url);
});
$('#feedback-button').on('tap',function(){
	//location.href = feedback_url;
	window.open(feedback_url);
});

