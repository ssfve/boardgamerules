
var add_collapse = function(pageType){
	if (pageType === 'setup'){
		//alert('in')
		html1 = html1.replace('%data%',collapse_template)
	}
	if (pageType === 'flow'){
		html2 = html2.replace('%data%',collapse_template)
	}
	if (pageType === 'end'){
		html3 = html3.replace('%data%',collapse_template)
	}
	if (pageType === 'stuff'){
		intro_html = intro_html.replace('%data%',collapse_template)
	}
}

var add_no_collapse_img = function(pageType){
	if (pageType === 'setup'){
		//alert('in')
		html1 = html1.replace('%data%',no_collapse_img)
	}
	if (pageType === 'flow'){
		html2 = html2.replace('%data%',no_collapse_img)
	}
	if (pageType === 'end'){
		html3 = html3.replace('%data%',no_collapse_img)
	}
	if (pageType === 'stuff'){
		intro_html = intro_html.replace('%data%',no_collapse_img)
	}
}

var add_no_collapse_text = function(pageType){
	if (pageType === 'setup'){
		//alert('in')
		html1 = html1.replace('%data%',no_collapse_text)
	}
	if (pageType === 'flow'){
		html2 = html2.replace('%data%',no_collapse_text)
	}
	if (pageType === 'end'){
		html3 = html3.replace('%data%',no_collapse_text)
	}
	if (pageType === 'stuff'){
		intro_html = intro_html.replace('%data%',no_collapse_text)
	}
}

var add_a = function(pageType, lineType, index){
	//alert(obj)
	pageType_temp = pageType
	id_temp = pageType + '_' + lineType + '_' + index + '_' + '0'
	a_html = a_with_value.replace('%id%',id_temp)
	
	if (pageType_temp === 'setup'){
		html1 = html1.replace('%a%',a_html)
	}
	if (pageType_temp === 'flow'){
		html2 = html2.replace('%a%',a_html)
	}
	if (pageType_temp === 'end'){
		html3 = html3.replace('%a%',a_html)
	}
	if (pageType_temp === 'stuff'){
		intro_html = intro_html.replace('%a%',a_html)
	}
}

var add_a_where_img = function(obj){
	//alert(obj)
	pageType_temp = obj.replace('#','').split('_')[0]
	id_temp = obj.replace('#','')
	a_html = a_img_with_value.replace('%id%',id_temp)
	
	if (pageType_temp === 'setup'){
		html1 = html1.replace('%img%',a_html)
	}
	if (pageType_temp === 'flow'){
		html2 = html2.replace('%img%',a_html)
	}
	if (pageType_temp === 'end'){
		html3 = html3.replace('%img%',a_html)
	}
	if (pageType_temp === 'stuff'){
		intro_html = intro_html.replace('%img%',a_html)
	}
}

var add_b = function(pageType){
	if (pageType === 'setup'){
		html1 = html1.replace('%b%',b_template)
	}
	if (pageType === 'flow'){
		html2 = html2.replace('%b%',b_template)
	}
	if (pageType === 'end'){
		html3 = html3.replace('%b%',b_template)
	}
	if (pageType === 'stuff'){
		intro_html = intro_html.replace('%b%',b_template)
	}
}

var add_img = function(imageID){
	//alert(obj)
	default_image_path = `http://via.placeholder.com/450x150'
	img_with_src = img_template.replace('%value%',default_image_path)
	
	//pageType_temp = imageID.split('_')[0]
	//image_name = imageID.replace(pageType_temp,'').replace('_','')+'.jpg'
	//image_path = '../img/'+gameid+'/'+pageType+'/'+image_name
	//console.log(image_path)
	//image_path = `http://via.placeholder.com/450x150'
	//img_with_src = img_template.replace('%value%',image_path)
	
	//console.log(imageID)
	img_html = img_with_src.replace('%id%',imageID)
	
	if (pageType_temp === 'setup'){
		html1 = html1.replace('%img%',img_html)
	}
	if (pageType_temp === 'flow'){
		html2 = html2.replace('%img%',img_html)
	}
	if (pageType_temp === 'end'){
		html3 = html3.replace('%img%',img_html)
	}
	if (pageType_temp === 'stuff'){
		intro_html = intro_html.replace('%img%',img_html)
	}
}

var end_img = function(pageType){
	if (pageType === 'setup'){
		//alert(html1)
		html1 = html1.replace('%img%','')
	}
	if (pageType === 'flow'){
		html2 = html2.replace('%img%','')
	}
	if (pageType === 'end'){
		html3 = html3.replace('%img%','')
	}
	if (pageType === 'stuff'){
		intro_html = intro_html.replace('%img%','')
	}
}

var end_data = function(pageType){
	if (pageType === 'setup'){
		html1 = html1.replace('%data%','')
	}
	if (pageType === 'flow'){
		html2 = html2.replace('%data%','')
	}
	if (pageType === 'end'){
		html3 = html3.replace('%data%','')
	}
	if (pageType === 'stuff'){
		intro_html = intro_html.replace('%data%','')
	}
}

var end_a = function(obj){
	pageType_temp = obj.replace('#','').split('_')[0]
	if (pageType_temp === 'setup'){
		//alert(html1)
		html1 = html1.replace('%a%','')
	}
	if (pageType_temp === 'flow'){
		html2 = html2.replace('%a%','')
	}
	if (pageType_temp === 'end'){
		html3 = html3.replace('%a%','')
	}
	if (pageType_temp === 'stuff'){
		intro_html = intro_html.replace('%a%','')
	}
}