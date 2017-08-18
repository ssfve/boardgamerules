if (current_page === 'gamepic'){
    $('#back_arrow').attr('id',gameid);
    $(document).ready(function() {
		gotoPage(gameid)
	});
}

if (current_page === 'gameintro'){
	mui.previewImage();
    $('#back_arrow').attr('id',gameid);
    $(document).ready(function() {
		$('#introtext').html(intro_html);
		
		setTextContent(gameid,'stuff','a','#stuff_a');
		setImagePath(gameid,'stuff','a_1','#stuff_a_1')
        setTextContent(gameid,'stuff','b','#stuff_b');
		setImagePath(gameid,'stuff','b_1','#stuff_b_1')
        setTextContent(gameid,'stuff','c','#stuff_c');
		setImagePath(gameid,'stuff','c_1','#stuff_c_1')
        setTextContent(gameid,'stuff','d','#stuff_d');
		setImagePath(gameid,'stuff','d_1','#stuff_d_1')
        setTextContent(gameid,'stuff','e','#stuff_e');
		setImagePath(gameid,'stuff','e_1','#stuff_e_1')
        setTextContent(gameid,'stuff','f','#stuff_f');
		setImagePath(gameid,'stuff','f_1','#stuff_f_1')
		setTextContent(gameid,'stuff','g','#stuff_g');
		setImagePath(gameid,'stuff','g_1','#stuff_g_1')
		setTextContent(gameid,'stuff','h','#stuff_h');
		setImagePath(gameid,'stuff','h_1','#stuff_h_1')
        
		collapse_event_gen();
		gotoPage(gameid)
		$('.mui-table-view-cell.mui-collapse').css({'background-color': bg_color + lowPR});
	});
}

if (current_page === 'gamecover'){
	$(document).ready(function() {		
		setTimeout(function(){
			valueRates_w = $('#valueRates').width();
			valueRates_h = $('#valueRates').height();
			//vertical align middle
			$('#valueRates').css({'line-height': valueRates_h + pixels});
			svg1_w = $('#svg1').width();
			svg1_h = $('#svg1').height();
			//position inner image
			yearsvg_w = $('#yearsvg').width() * cover_img_scale_factor;
			yearsvg_h = $('#yearsvg').height() * cover_img_scale_factor;
			
			left_position =(svg1_w - yearsvg_w + 16) / 2 + pixels;
			top_position =(svg1_h - yearsvg_h) / 2 + pixels;
			svg_width = yearsvg_w;
			svg_height = yearsvg_h;
			$('#yearsvg').css({'left': left_position});
			$('#yearsvg').css({'top': top_position});
			$('#yearsvg').css({'width': svg_width});
			$('#yearsvg').css({'height': svg_height});
			
			$('#weightsvg').css({'left': left_position});
			$('#weightsvg').css({'top': top_position});
			$('#weightsvg').css({'width': svg_width});
			$('#weightsvg').css({'height': svg_height});
			
			$('#agesvg').css({'left': left_position});
			$('#agesvg').css({'top': top_position});
			$('#agesvg').css({'width': svg_width});
			$('#agesvg').css({'height': svg_height});
			
			$('#playerssvg').css({'left': left_position});
			$('#playerssvg').css({'top': top_position});
			$('#playerssvg').css({'width': svg_width});
			$('#playerssvg').css({'height': svg_height});
		
			$('#clocksvg').css({'left': left_position});
			$('#clocksvg').css({'top': top_position});
			$('#clocksvg').css({'width': svg_width});
			$('#clocksvg').css({'height': svg_height});
		},50);
	});

}

if (current_page === 'gamerule'){
	$('#back_arrow').attr('id',gameid);
	$(document).ready(function() {
		//change_theme(theme_color);
		$('#gameSetup').css({'color': theme_color});
		$('.mui-table-view-cell.mui-collapse').css({'background-color': bg_color + lowPR});
		
		gotoPage(gameid)
		
		setTextContent(gameid,'setup','a','#setup_a');
		setImagePath(gameid,'setup','a_1','#setup_a_1');
		setTextContent(gameid,'setup','b','#setup_b');
		setImagePath(gameid,'setup','b_1','#setup_b_1');
		setImagePath(gameid,'setup','b_2','#setup_b_2');
		setImagePath(gameid,'setup','b_3','#setup_b_3');
		setTextContent(gameid,'setup','c','#setup_c');
		setImagePath(gameid,'setup','c_1','#setup_c_1');
		setTextContent(gameid,'setup','d','#setup_d');
		setImagePath(gameid,'setup','d_1','#setup_d_1');
		setTextContent(gameid,'setup','e','#setup_e');
		setImagePath(gameid,'setup','e_1','#setup_e_1');
		setTextContent(gameid,'setup','f','#setup_f');
		setImagePath(gameid,'setup','f_1','#setup_f_1');
		
		setImagePath(gameid,'flow','a_0','#flow_a_0')
		setImagePath(gameid,'flow','a','#flow_a')
        setTextContent(gameid,'flow','b','#flow_b');
        setImagePath(gameid,'flow','b_1','#flow_b_1')
        setImagePath(gameid,'flow','b_2','#flow_b_2')
        setImagePath(gameid,'flow','b_3','#flow_b_3')
        setImagePath(gameid,'flow','b_4','#flow_b_4')
        setImagePath(gameid,'flow','b_5','#flow_b_5')
        setImagePath(gameid,'flow','b_6','#flow_b_6')
        setImagePath(gameid,'flow','b_7','#flow_b_7')
        setImagePath(gameid,'flow','b_8','#flow_b_8')
        setImagePath(gameid,'flow','c_0','#flow_c_0')
        setTextContent(gameid,'flow','c','#flow_c');
        setImagePath(gameid,'flow','c_1','#flow_c_1')
        
        setTextContent(gameid,'flow','d','#flow_d');
        setImagePath(gameid,'flow','d_1','#flow_d_1')
        setTextContent(gameid,'flow','e','#flow_e');
        setImagePath(gameid,'flow','e_1','#flow_e_1')
        setTextContent(gameid,'flow','f','#flow_f');
        setImagePath(gameid,'flow','f_1','#flow_f_1')
        setTextContent(gameid,'flow','g','#flow_g');
        setImagePath(gameid,'flow','g_1','#flow_g_1')
        setTextContent(gameid,'flow','h','#flow_h');
        setImagePath(gameid,'flow','h_1','#flow_h_1')
        
        setImagePath(gameid,'flow','i_0','#flow_i_0')
        setTextContent(gameid,'flow','i','#flow_i');
        setImagePath(gameid,'flow','i_1','#flow_i_1')
        setTextContent(gameid,'flow','j','#flow_j');
        setImagePath(gameid,'flow','j_1','#flow_j_1')
        setTextContent(gameid,'flow','k','#flow_k');
        setImagePath(gameid,'flow','k_1','#flow_k_1')
        setTextContent(gameid,'flow','l','#flow_l');
        setImagePath(gameid,'flow','l_1','#flow_l_1')
        setTextContent(gameid,'flow','m','#flow_m');
        setImagePath(gameid,'flow','m_1','#flow_m_1')
        setTextContent(gameid,'flow','n','#flow_n');
        setImagePath(gameid,'flow','n_1','#flow_n_1')
        setTextContent(gameid,'flow','o','#flow_o');
        setImagePath(gameid,'flow','o_1','#flow_o_1')
        
        setTextContent(gameid,'flow','p','#flow_p');
        setImagePath(gameid,'flow','p_1','#flow_p_1')
        
        setImagePath(gameid,'end','a_0','#end_a_0')
		setTextContent(gameid,'end','a','#end_a')
		setImagePath(gameid,'end','a_1','#end_a_1')
		setTextContent(gameid,'end','b','#end_b')
		setImagePath(gameid,'end','b_1','#end_b_1')
		setTextContent(gameid,'end','c','#end_c')
		setImagePath(gameid,'end','c_1','#end_c_1')
		setTextContent(gameid,'end','d','#end_d')
		setImagePath(gameid,'end','d_1','#end_d_1')
		setTextContent(gameid,'end','e','#end_e')
		setImagePath(gameid,'end','e_1','#end_e_1')
		setTextContent(gameid,'end','f','#end_f')
		setImagePath(gameid,'end','f_1','#end_f_1')
		setTextContent(gameid,'end','g','#end_g')
		setImagePath(gameid,'end','g_1','#end_g_1')
	});
}
