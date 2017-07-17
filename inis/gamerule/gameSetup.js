
final_html = ''
part.forEach(function(val,index){
	final_html += part[index]
});
//list_line = generate(array);

var html1 = table_seg.replace('%data%',final_html);