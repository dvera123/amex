$(document).ready(function(){
      $("#modals").load("modals/modals.html");
      //active the modal view 
      $(".btn").click(function(){
      	//enables the tooltip for the modal
      	$('.atooltip').mouseover(function(){
      		var id = $(this).attr("id");
      		$("."+id).show();
      	}).mouseout(function(){
      		var id = $(this).attr("id");
      		$("."+id).hide();
      	});
      	//enables the sort of the tables
      	$("#table-pay-overtime").tablesorter();
      	//enables first three elements of the table
      	$("#table-pay-overtime tbody tr").each(function(i){
      		if(i>2){
	      		$(this).find("td").each(function(i){
	      			if(i==0){
	      				$(this).find("input").attr("disabled","disabled");
	      			}
	      		});
	      	}
      	});
      	//click for continue button
      	$("#continue").click(function(){
      		var n = $("input:checked").length;
      		if(n > 0){
      			$("#first-body").hide();
      			$("#second-body").show();
      		}
      	});
      	$("#submit").click(function(){
      		$("#second-body").hide();
      		$("#third-body").show();
      	});
      	$("#back").click(function(){
      		$("#first-body").show();
      		$("#second-body").hide();
      	});
      	//enables the drawer on the footer
      	$(".show-element").click(function(){
      		var id = $(this).attr("id");
      		$("."+id).show();
      		$(this).hide();
      		$("."+id).click(function(){
      			$(this).hide();
      			$(".show-element").show();
      		})
      	})
      });
      
      // set active links
      $('.side_menu ul').children().find('a').click(function(){
    	  $('.side_menu ul').children().find('a').removeClass('selected');
    	  $(this).addClass('selected');
      });
      // change card info
      $('#card_gold').click(function(){
    	  var account_info, account_header;
    	  account_info = $('.account_info');
    	  account_header = $('.account_header');
    	  account_info.removeClass('customer_card_platinum_info_ss');
    	  account_info.addClass('customer_card_gold_info_ss');
    	  account_header.removeClass('customer_platinum_ss');
    	  account_header.addClass('customer_gold_ss');
    	  
      });
      $('#card_platinum').click(function(){
    	  var account_info, account_header;
    	  account_info = $('.account_info');
    	  account_header = $('.account_header');
    	  account_info.removeClass('customer_card_gold_info_ss');
    	  account_info.addClass('customer_card_platinum_info_ss');
    	  account_header.removeClass('customer_gold_ss');
    	  account_header.addClass('customer_platinum_ss');
    	  
      });
      // change statement
      $('.e_statement').click(function(){
    	  var statement_info, statement_header;
    	  statement_header = $('.statement_header');
    	  
      });
      $('.p_statement').click(function(){
    	  var statement_info, statement_header;
    	  statement_header = $('.statement_header');
      });
      
  });