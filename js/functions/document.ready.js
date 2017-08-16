

if (current_page === 'gamecover'){
	$(document).ready(function() {
		//$('#numRatesMea').html(numRatesMea);
		$('#numRates').html(usersrated);
		$('#valueRates').html(average);
		//$('#valueRatesMea').html(valueRatesMea);
		$('#yearpublished').html(yearpublished);
		$('#yearMea').html(yearMea);
		$('#averageweight').html(averageweight);
		$('#weightLimit').html(weightLimit);
		$('#weightExp').html(weightExp);
		$('#age').html(age);
		$('#ageMea').html(ageMea);
		$('#ageMeaPlus').html(ageMeaPlus);
		$('#players').html(players);
		$('#playersMea').html(playersMea);
		$('#playersBest').html(playersBest);
		$('#playtime').html(playtime);
		$('#playtimeMea').html(playtimeMea);
		$('#designerTitle').html(designerTitle);
		$('#designerName').html(designers_temp);
		$('#langTitleHigh').html(langTitleHigh);
		$('#langTitleLow').html(langTitleLow);
		$('#langLvl0').html(langLvl0);
		$('#langLvl1').html(langLvl1);
		$('#langLvl2').html(langLvl2);
		$('#langLvl3').html(langLvl3);
		$('#langLvl4').html(langLvl4);
		$('#categoryTitle').html(categoryTitle);
		$('#categorys').html(categorys);
		$('#button1').html(button1);
		$('#button2').html(button2);
		$('#button3').html(button3);
		$('#button4').html(button4);
		$('#button5').html(button5);
		$('#button6').html(button6);
		$('#caption-pic').css({'background-image': imgCaption})
		$('#gameName').html(gameName);
		$('#nameCN').html(nameCN);
		
		$('#subText').html(subText);
		$('#subName').html(subName);
		$('#sideHeader').html(sideHeader);
	});	
}
if (current_page === 'gamerule'){
	$(document).ready(function() {
		setImagePath(gameid,'setup','a','#setup_a');
		setTextContent(gameid,'setup','b','#setup_b');
		setImagePath(gameid,'setup','b_1','#setup_b_1');
		setImagePath(gameid,'setup','b_2','#setup_b_2');
		setImagePath(gameid,'setup','b_3','#setup_b_3');
	});
	
	$(document).ready(function() {
			setImagePath(gameid,'flow','a','#flow_a')
            setTextContent(gameid,'flow','b','#flow_b');
            setImagePath(gameid,'flow','b_1','#flow_b_1')
            setImagePath(gameid,'flow','b_2','#flow_b_2')
            setImagePath(gameid,'flow','b_3','#flow_b_3')
            setImagePath(gameid,'flow','b_4','#flow_b_4')
            setImagePath(gameid,'flow','b_5','#flow_b_5')
            setImagePath(gameid,'flow','b_6','#flow_b_6')
	});
	
	$(document).ready(function() {
			setImagePath(gameid,'end','a','#end_a')
			setImagePath(gameid,'end','b','#end_b')
			setImagePath(gameid,'end','c','#end_c')
	});
}
