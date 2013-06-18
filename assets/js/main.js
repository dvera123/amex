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
      });
  });