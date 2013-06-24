$(document).ready(function(){
      $("#modals").load("modals/modals.html");
      //active the modal view 
      $(".select_charges").click(function(){
      	//enables the tooltip for the modal
      	$('.atooltip').mouseover(function(){
      		var id = $(this).attr("id");
      		$("."+id).fadeIn(500);
      	}).mouseout(function(){
      		var id = $(this).attr("id");
      		$("."+id).fadeOut(500);
      	});
      	//click for selects
      	$(".select").click(function(){
          console.log("click select")
      		if($(this).hasClass("checked")){
      			$(this).removeClass("checked");
      			$(this).css("background",'url("assets/images/s&pl-checkbox-off.png")');
      		}else{
      			$(this).addClass("checked");
      			$(this).css("background",'url("assets/images/s&pl-checkbox-on.png")');
            $(".terms").show();
            $(".error").hide();
      		}
      	});

      	//click for continue button
      	$("#continue").click(function(){
      		var n = $(".checked").length;
      		if(n > 0){
      			$("#first-body").hide();
      			$("#second-body").show();
      			$(".modal-footer").hide();
      			$(".bttm").hide();
      			$(".bttm1").show();
      		}else{
            $(".terms").hide();
            $(".error").show();
          }
      	});
      	$("#submit").click(function(){
      		$("#second-body").hide();
      		$("#third-body").show();
      	});
      	$("#back").click(function(){
      		$("#first-body").show();
      		$("#second-body").hide();
      		$(".modal-footer").show();
      		$(".bttm").show();
      		$(".bttm1").hide();
      	});
        $("#close").click(function(){
          $("#third-body").hide();
          $("#first-body").show();
          $("#second-body").hide();
          $(".modal-footer").show();
          $(".bttm").show();
          $(".bttm1").hide();
          $(".select").unbind("click");
          $(".select").removeClass("checked");
          $(".select").css("background",'url("assets/images/s&pl-checkbox-off.png")');
        });
        $(".x").click(function(){
          $("#third-body").hide();
          $("#first-body").show();
          $("#second-body").hide();
          $(".modal-footer").show();
          $(".bttm").show();
          $(".bttm1").hide();
          $(".select").unbind("click");
          $(".select").removeClass("checked");
          $(".select").css("background",'url("assets/images/s&pl-checkbox-off.png")');
        });
        $(".ext_link_modal").click(function(){
          $("#third-body").hide();
          $("#first-body").show();
          $("#second-body").hide();
          $(".modal-footer").show();
          $(".bttm").show();
          $(".bttm1").hide();
          $(".select").unbind("click");
          $(".select").removeClass("checked");
          $(".select").css("background",'url("assets/images/s&pl-checkbox-off.png")');
        });

      	//enables the drawer on the footer
      	$(".show-element").click(function(){
      		var id = $(this).attr("id");
      		$("."+id).show("slow");
      		$(this).hide();
      		$("."+id).click(function(){
      			$(this).hide("slow");
      			$(".show-element").show("slow");
      		})
      	})
      });
      
      // set active links
      $('.side_menu ul').children().find('a').click(function(e){
    	  var a, offset;
    	  a =$(this).attr('href');
    	  offset = $(a).offset();
    	  e.preventDefault();

    	  $('html, body').animate({scrollTop : offset.top},'slow');
    	  //$(this).addClass('selected');
      });

      $('.link_nav').click(function(e){
        var a, offset;
        a = $(this).parent().attr('href');
        offset = $(a).offset();
        $('html, body').animate({scrollTop : offset.top},1500);
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
      $('.p_statement').click(function(){
    	  var statement_info, statement_header;
    	  statement_header = $('.statement_header');
    	  statement_info_ss = $('.statement_info_ss');
    	  statement_info_sp = $('.statement_info_sp');
    	  statement_header.removeClass('statement_ss');
    	  statement_header.addClass('statement_sp');
    	  statement_info_ss.fadeOut();
    	  statement_info_sp.fadeIn();
    	  
      });
      $('.e_statement').click(function(){
    	  var statement_info, statement_header;
    	  statement_header = $('.statement_header');
    	  statement_info_ss = $('.statement_info_ss');
    	  statement_info_sp = $('.statement_info_sp');
    	  statement_header.removeClass('statement_sp');
    	  statement_header.addClass('statement_ss');
    	  statement_info_sp.fadeOut();
    	  statement_info_ss.fadeIn();
      });
      //on click events
      $('.link1').click(function(){
    	  location.href='https://online.americanexpress.com/myca/logon/us/action?request_type=LogonHandler&Face=en_US&DestPage=https%3A%2F%2Fonline.americanexpress.com%2Fmyca%2Flending%2Fenroll%2Fus%2Faction%3Frequest_type%3Dauthreg_LendingEnroll%26intlink%3Dus-CCSG-LOCeligible%26srcCd%3DNJA';
      });
      $('.show_cards').click(function(){
    	  location.href='index_ss.html';

      });
      
  });
