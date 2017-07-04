/*var bookTitle = '大厨阿尔弗雷多Chef Alfredo';
var msgContent = '不要忘了大厨阿尔弗雷多的私房菜：蒜头汤！'; // 微信转发短语
var msgTitle = '大厨阿尔弗雷多Chef Alfredo'; // 微信转发标题
var shareTitle = '大厨阿尔弗雷多Chef Alfredo'; // 微信分享朋友圈标题
var appid = '';
//触发submit按钮的点击事件
//mui.trigger(btn1,'tap');
var id = '${id}'; //服务端设置的id,用于下面拼接生成需要分享的link
var timestamp = parseInt('${ret.timestamp}'); //因为服务端是String类型，此处转化成数值类型
var nonceStr = '${ret.nonceStr}';
var signature = '${ret.signature}';

wx.config({
	debug: true,
	// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	appId: '{$appid}', // 必填，公众号的唯一标识  
	timestamp: "{$signPackage.timestamp}", // 必填，生成签名的时间戳  
	nonceStr: '{$signPackage.nonceStr}', // 必填，生成签名的随机串  
	signature: '{$signPackage.signature}', // 必填，签名，见附录1  
	jsApiList: [
		'checkJsApi',
		'onMenuShareTimeline',
		'onMenuShareAppMessage',
		'onMenuShareQQ',
		'onMenuShareWeibo', 'chooseWXPay'
	] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});
wx.ready(function() {
	wx.onMenuShareTimeline({
		title: '--{$info.name}', // 分享标题  
		link: '{$url}__URL__/index?pid={$pid}&puid={$uid}', // 分享链接,将当前登录用户转为puid,以便于发展下线  
		imgUrl: '{$url}__PUBLIC__/Uploads/{$goodsvo.image}', // 分享图标  
		success: function() {
			// 用户确认分享后执行的回调函数  
			alert('分享成功');
		},
		cancel: function() {
			// 用户取消分享后执行的回调函数  
		}
	});
	wx.onMenuShareAppMessage({
		title: bookTitle, // 分享标题  
		desc: msgContent, // 分享描述  
		link: '', // 分享链接  
		imgUrl: '', // 分享图标  
		type: '', // 分享类型,music、video或link，不填默认为link  
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空  
		success: function() {
			// 用户确认分享后执行的回调函数  
		},
		cancel: function() {
			// 用户取消分享后执行的回调函数  
		}
	});
	wx.error(function(res) {
		// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。  
		alert("errorMSG:" + res);
	});
});


var action = function(){
	//获取ticket
	String jsapi_ticket = weiXinRequest.getWeiXinTicket();
	
	//logger.debug("[jsapi_ticket] = " + jsapi_ticket);
	
	//获取URL
	String url = request.getRequestURL().toString();
	
	Map<String, String> ret = signature.signature(jsapi_ticket, url);
	mav.addObject("ret", ret);
	//logger.debug("[ret] = " + ret);
	return mav;
}

Map<String, String> ret = signature.signature(jsapi_ticket, url);
mav.addObject("ret", ret);

var timestamp = parseInt('${ret.timestamp}');
var nonceStr = '${ret.nonceStr}';
var signature = '${ret.signature}';
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wxa034b7003154ee6c', // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature,// 必填，签名，见附录1
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});*/