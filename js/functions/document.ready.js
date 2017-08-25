if (current_page === 'gamepic'){
    $('#back_arrow').attr('id',gameid);
    $(document).ready(function() {
		gotoPage(gameid)
	});
}

if (current_page === 'gameintro'){
	mui.previewImage();
    $('#back_arrow').attr('id',gameid);
    
    pageType = 'stuff'
    getPageLineNum(gameid, pageType)
    
    setImagePath(gameid,'stuff','a_0','#stuff_a_0')
    end_img('stuff')
    
    setTextContent(gameid,'stuff','a','#stuff_a');
    setTextContent(gameid,'stuff','a_1','#stuff_a_1');
    setTextContent(gameid,'stuff','a_2','#stuff_a_2');
    setTextContent(gameid,'stuff','a_3','#stuff_a_3');
    setTextContent(gameid,'stuff','a_4','#stuff_a_4');
	setImagePath(gameid,'stuff','a_1','#stuff_a_1')
	setImagePath(gameid,'stuff','a_2','#stuff_a_2')
    end_img('stuff')
    
    setImagePath(gameid,'stuff','b_0','#stuff_b_0')
    end_img('stuff')
    
    setTextContent(gameid,'stuff','b','#stuff_b');
    setTextContent(gameid,'stuff','b_1','#stuff_b_1');
    setTextContent(gameid,'stuff','b_2','#stuff_b_2');
    setTextContent(gameid,'stuff','b_3','#stuff_b_3');
    setTextContent(gameid,'stuff','b_4','#stuff_b_4');
    setTextContent(gameid,'stuff','b_5','#stuff_b_5');
    setTextContent(gameid,'stuff','b_6','#stuff_b_6');
	setImagePath(gameid,'stuff','b_1','#stuff_b_1')
    end_img('stuff')
    
    
    setImagePath(gameid,'stuff','c_0','#stuff_c_0')
    end_img('stuff')
    
    setTextContent(gameid,'stuff','c','#stuff_c');
    setTextContent(gameid,'stuff','c_1','#stuff_c_1');
    setTextContent(gameid,'stuff','c_2','#stuff_c_2');
    setTextContent(gameid,'stuff','c_3','#stuff_c_3');
    setTextContent(gameid,'stuff','c_4','#stuff_c_4');
    setTextContent(gameid,'stuff','c_5','#stuff_c_5');
    setTextContent(gameid,'stuff','c_6','#stuff_c_6');
	setImagePath(gameid,'stuff','c_1','#stuff_c_1')
    end_img('stuff')
    
    setTextContent(gameid,'stuff','d','#stuff_d');
    setTextContent(gameid,'stuff','d_1','#stuff_d_1');
    setTextContent(gameid,'stuff','d_2','#stuff_d_2');
    setTextContent(gameid,'stuff','d_3','#stuff_d_3');
    setTextContent(gameid,'stuff','d_4','#stuff_d_4');
    setTextContent(gameid,'stuff','d_5','#stuff_d_5');
    setTextContent(gameid,'stuff','d_6','#stuff_d_6');
	setImagePath(gameid,'stuff','d_1','#stuff_d_1')
    end_img('stuff')
    
    setTextContent(gameid,'stuff','e','#stuff_e');
    setTextContent(gameid,'stuff','e_1','#stuff_e_1');
    setTextContent(gameid,'stuff','e_2','#stuff_e_2');
    setTextContent(gameid,'stuff','e_3','#stuff_e_3');
	setImagePath(gameid,'stuff','e_1','#stuff_e_1')
    end_img('stuff')
    
    setTextContent(gameid,'stuff','f','#stuff_f');
	setImagePath(gameid,'stuff','f_1','#stuff_f_1')
    end_img('stuff')
    
    setTextContent(gameid,'stuff','g','#stuff_g');
	setImagePath(gameid,'stuff','g_1','#stuff_g_1')
    end_img('stuff')
    
    setTextContent(gameid,'stuff','h','#stuff_h');
	setImagePath(gameid,'stuff','h_1','#stuff_h_1')
    end_img('stuff')
    
	end_data('stuff');
	
	
	
    $(document).ready(function() {
		$('#introtext').html(intro_html);
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
	
	setTextContent(gameid,'setup','a_0','#setup_a_0');
	
	setTextContent(gameid,'setup','a','#setup_a');
	setImagePath(gameid,'setup','a_1','#setup_a_1');
	end_img('setup')
	
	setTextContent(gameid,'setup','b_0','#setup_b_0');
	
	setTextContent(gameid,'setup','b','#setup_b');
	setImagePath(gameid,'setup','b_1','#setup_b_1');
	setImagePath(gameid,'setup','b_2','#setup_b_2');
	setImagePath(gameid,'setup','b_3','#setup_b_3');
	end_img('setup')
	
    setImagePath(gameid,'setup','c_0','#setup_c_0')
    end_img('setup')
    
	setTextContent(gameid,'setup','c','#setup_c');
	setImagePath(gameid,'setup','c_1','#setup_c_1');
	end_img('setup')
	
	setTextContent(gameid,'setup','d','#setup_d');
	setImagePath(gameid,'setup','d_1','#setup_d_1');
	end_img('setup')
	
    setImagePath(gameid,'setup','e_0','#setup_e_0')
    end_img('setup')
    
	setTextContent(gameid,'setup','e','#setup_e');
	setImagePath(gameid,'setup','e_1','#setup_e_1');
	end_img('setup')
	
    setImagePath(gameid,'setup','f_0','#setup_f_0')
    end_img('setup')
    
	setTextContent(gameid,'setup','f','#setup_f');
	setImagePath(gameid,'setup','f_1','#setup_f_1');
	end_img('setup')
	
	setImagePath(gameid,'setup','g_0','#setup_g_0');
	end_img('setup')
	
	setTextContent(gameid,'setup','g','#setup_g');
	setImagePath(gameid,'setup','g_1','#setup_g_1');
	setImagePath(gameid,'setup','g_2','#setup_g_2');
	end_img('setup')
	
	setImagePath(gameid,'setup','h_0','#setup_h_0');
	end_img('setup')
	
	setTextContent(gameid,'setup','h','#setup_h');
	setImagePath(gameid,'setup','h_1','#setup_h_1');
	end_img('setup')
	
	setTextContent(gameid,'setup','i_0','#setup_i_0');
	
	setTextContent(gameid,'setup','i','#setup_i');
	setImagePath(gameid,'setup','i_1','#setup_i_1');
	end_img('setup')
	
	setTextContent(gameid,'setup','j','#setup_j');
	setImagePath(gameid,'setup','j_1','#setup_j_1');
	end_img('setup')
	
	setTextContent(gameid,'setup','k','#setup_k');
	setImagePath(gameid,'setup','k_1','#setup_k_1');
	end_img('setup')
	
	end_data('setup');
	//alert(html2)
	//////////////////////////////////////////////////////////////
	
	//generate_html2();
	//generate_html3();
	/////////////////////////////////////////////////////////////
	
	$('#setup_tab').html(html1);
	//alert(html1)
	//$('#flow_tab').html(html2);
	//$('#end_tab').html(html3);
		
	$(document).ready(function() {
		//change_theme(theme_color);
		//alert(theme_color)
		collapse_event_gen();
		change_tab_theme(theme_color,0);
		$('#gameSetup').css({'color': theme_color});
		$('.mui-table-view-cell.mui-collapse').css({'background-color': bg_color + lowPR});
		
		gotoPage(gameid)
		
	});
}


var generate_html2 = function(){
	//add_no_collapse('flow')
	setImagePath(gameid,'flow','a_0','#flow_a_0')
	end_img('flow')
	
	//add_collapse('flow');
	setTextContent(gameid,'flow','a','#flow_a')
	setImagePath(gameid,'flow','a_1','#flow_a_1')
	end_img('flow')
	
	//add_collapse('flow');
	setTextContent(gameid,'flow','b','#flow_b');
    setImagePath(gameid,'flow','b_1','#flow_b_1')
    setImagePath(gameid,'flow','b_2','#flow_b_2')
    setImagePath(gameid,'flow','b_3','#flow_b_3')
    setImagePath(gameid,'flow','b_4','#flow_b_4')
    setImagePath(gameid,'flow','b_5','#flow_b_5')
    setImagePath(gameid,'flow','b_6','#flow_b_6')
    setImagePath(gameid,'flow','b_7','#flow_b_7')
    setImagePath(gameid,'flow','b_8','#flow_b_8')
	end_img('flow')
	
	setImagePath(gameid,'flow','c_0','#flow_c_0')
	end_img('flow')
	
	setTextContent(gameid,'flow','c','#flow_c');
    setImagePath(gameid,'flow','c_1','#flow_c_1')
	end_img('flow')
	
	setTextContent(gameid,'flow','d_0','#flow_d_0');
	
	setTextContent(gameid,'flow','d','#flow_d');
    setImagePath(gameid,'flow','d_1','#flow_d_1')
    setImagePath(gameid,'flow','d_2','#flow_d_2')
	end_img('flow')
	
	setImagePath(gameid,'flow','e_0','#flow_e_0')
	end_img('flow')
	
	setTextContent(gameid,'flow','e','#flow_e');
    setImagePath(gameid,'flow','e_1','#flow_e_1')
	end_img('flow')
	
	setTextContent(gameid,'flow','f','#flow_f');
    setImagePath(gameid,'flow','f_1','#flow_f_1')
    setImagePath(gameid,'flow','f_2','#flow_f_2')
	end_img('flow')
	
	setTextContent(gameid,'flow','g','#flow_g');
    setImagePath(gameid,'flow','g_1','#flow_g_1')
	end_img('flow')
	
	setTextContent(gameid,'flow','h','#flow_h');
    setImagePath(gameid,'flow','h_1','#flow_h_1')
	end_img('flow')
	
	setTextContent(gameid,'flow','i_0','#flow_i_0');
	setImagePath(gameid,'flow','i_0','#flow_i_0')
	end_img('flow')
	
	//add_collapse('flow');
	setTextContent(gameid,'flow','i','#flow_i');
	setImagePath(gameid,'flow','i_1','#flow_i_1')
	setImagePath(gameid,'flow','i_2','#flow_i_2')
	end_img('flow')
	
	//add_collapse('flow');
	setTextContent(gameid,'flow','j','#flow_j');
	setImagePath(gameid,'flow','j_1','#flow_j_1')
	end_img('flow')
	
	//add_collapse('flow');
	setTextContent(gameid,'flow','k','#flow_k');
        setImagePath(gameid,'flow','k_1','#flow_k_1')
	end_img('flow')
	
	//add_collapse('flow');
	setTextContent(gameid,'flow','l','#flow_l');
        setImagePath(gameid,'flow','l_1','#flow_l_1')
	end_img('flow')
	
	//add_collapse('flow');
	setTextContent(gameid,'flow','m','#flow_m');
        setImagePath(gameid,'flow','m_1','#flow_m_1')
	end_img('flow')
	
	//add_collapse('flow');
	setTextContent(gameid,'flow','n','#flow_n');
        setImagePath(gameid,'flow','n_1','#flow_n_1')
	end_img('flow')
	
	//add_collapse('flow');
	setTextContent(gameid,'flow','o','#flow_o');
        setImagePath(gameid,'flow','o_1','#flow_o_1')
	end_img('flow')
	
	//add_collapse('flow');
	setTextContent(gameid,'flow','p','#flow_p');
        setImagePath(gameid,'flow','p_1','#flow_p_1')
	end_img('flow')
	
	end_data('flow');
}

var generate_html3 = function(){
	
    setImagePath(gameid,'end','a_0','#end_a_0')
    end_img('end')
    
    setTextContent(gameid,'end','a','#end_a')
    setImagePath(gameid,'end','a_1','#end_a_1')
    setImagePath(gameid,'end','a_2','#end_a_2')
    end_img('end')
    
    setImagePath(gameid,'end','b_0','#end_b_0')
    end_img('end')
    
    setTextContent(gameid,'end','b','#end_b')
    setImagePath(gameid,'end','b_1','#end_b_1')
    end_img('end')
    
    setTextContent(gameid,'end','c_0','#end_c_0')
    setImagePath(gameid,'end','c_0','#end_c_0')
    end_img('end')
    
    setTextContent(gameid,'end','c','#end_c')
    setImagePath(gameid,'end','c_1','#end_c_1')
    setImagePath(gameid,'end','c_2','#end_c_2')
    end_img('end')
  	
    setTextContent(gameid,'end','d','#end_d')
    setImagePath(gameid,'end','d_1','#end_d_1')
    setImagePath(gameid,'end','d_2','#end_d_2')
    setImagePath(gameid,'end','d_3','#end_d_3')
    end_img('end')
    
    setTextContent(gameid,'end','e','#end_e')
	setImagePath(gameid,'end','e_1','#end_e_1')
    end_img('end')
    
    setTextContent(gameid,'end','f_0','#end_f_0')
    setImagePath(gameid,'end','f_0','#end_f_0')
    end_img('end')
    
    setTextContent(gameid,'end','f','#end_f')
	setImagePath(gameid,'end','f_1','#end_f_1')
	setImagePath(gameid,'end','f_2','#end_f_2')
    end_img('end')
    
    setTextContent(gameid,'end','g','#end_g')
	setImagePath(gameid,'end','g_1','#end_g_1')
    end_img('end')
    
    setImagePath(gameid,'end','h_0','#end_h_0')
    end_img('end')
    
    setTextContent(gameid,'end','h','#end_h')
	setImagePath(gameid,'end','h_1','#end_h_1')
    end_img('end')
    
    setTextContent(gameid,'end','i_0','#end_i_0')
    setImagePath(gameid,'end','i_0','#end_i_0')
    end_img('end')
    
    setTextContent(gameid,'end','i','#end_i')
	setImagePath(gameid,'end','i_1','#end_i_1')
	setImagePath(gameid,'end','i_2','#end_i_2')
    end_img('end')
    
    setTextContent(gameid,'end','j_0','#end_j_0')
    setImagePath(gameid,'end','j_0','#end_j_0')
    end_img('end')
    
    setTextContent(gameid,'end','j','#end_j')
	setImagePath(gameid,'end','j_1','#end_j_1')
	setImagePath(gameid,'end','j_2','#end_j_2')
    end_img('end')
    
    setTextContent(gameid,'end','k','#end_k')
	setImagePath(gameid,'end','k_1','#end_k_1')
	setImagePath(gameid,'end','k_2','#end_k_2')
    end_img('end')
    
    setTextContent(gameid,'end','l','#end_l')
	setImagePath(gameid,'end','l_1','#end_l_1')
	setImagePath(gameid,'end','l_2','#end_l_2')
    end_img('end')
    
    setTextContent(gameid,'end','m','#end_m')
	setImagePath(gameid,'end','m_1','#end_m_1')
	setImagePath(gameid,'end','m_2','#end_m_2')
    end_img('end')
    
    setTextContent(gameid,'end','n','#end_n')
	setImagePath(gameid,'end','n_1','#end_n_1')
	setImagePath(gameid,'end','n_2','#end_n_2')
    end_img('end')
    
    setTextContent(gameid,'end','o_0','#end_o_0')
    setImagePath(gameid,'end','o_0','#end_o_0')
    end_img('end')
    
    setTextContent(gameid,'end','o','#end_o')
	setImagePath(gameid,'end','o_1','#end_o_1')
	setImagePath(gameid,'end','o_2','#end_o_2')
    end_img('end')
    
    setTextContent(gameid,'end','p','#end_p')
	setImagePath(gameid,'end','p_1','#end_p_1')
	setImagePath(gameid,'end','p_2','#end_p_2')
    end_img('end')
    
    setTextContent(gameid,'end','q','#end_q')
	setImagePath(gameid,'end','q_1','#end_q_1')
	setImagePath(gameid,'end','q_2','#end_q_2')
    end_img('end')
    
    setTextContent(gameid,'end','r','#end_r')
	setImagePath(gameid,'end','r_1','#end_r_1')
	setImagePath(gameid,'end','r_2','#end_r_2')
    end_img('end')
    
    setTextContent(gameid,'end','s','#end_s')
	setImagePath(gameid,'end','s_1','#end_s_1')
	setImagePath(gameid,'end','s_2','#end_s_2')
    end_img('end')
    
    setTextContent(gameid,'end','t','#end_t')
	setImagePath(gameid,'end','t_1','#end_t_1')
	setImagePath(gameid,'end','t_2','#end_t_2')
    end_img('end')
    
    setTextContent(gameid,'end','u_0','#end_u_0')
    setImagePath(gameid,'end','u_0','#end_u_0')
    end_img('end')
    
    setTextContent(gameid,'end','u','#end_u')
	setImagePath(gameid,'end','u_1','#end_u_1')
	setImagePath(gameid,'end','u_2','#end_u_2')
    end_img('end')
    
    
	end_data('end');
}
