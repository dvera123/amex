$(document).ready(function(){
      $("#modals").load("modals/modals.html"); 
      $(".btn").click(function(){
      	$('.atooltip').mouseover(function(){
      		var id = $(this).attr("id");
      		$("."+id).show();
      	}).mouseout(function(){
      		var id = $(this).attr("id");
      		$("."+id).hide();
      	});

      	$("#table-pay-overtime").tablesorter();

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
  });