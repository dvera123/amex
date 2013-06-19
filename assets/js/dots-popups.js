var dots = {
		init: function(){
			dots.clean();
			dots.mouseEnter();
			dots.mouseLeave();
		},
		clean : function(){
			$('.dots').children().hide();
			$('.dots_content').css('position','absolute');
		},
		mouseEnter: function(){
		      $('.dots').mouseenter(function() { 
		    	 var target, children;
		    	 
		    	 target = $(this); 
		    	 children = target.children();
		    	 if(target.hasClass('left')){
		    		 children.css('marginLeft', -(children.width())-20);
		    		 children.css('marginTop', -(children.height()/2)+12);
		    	 }
		    	 if(target.hasClass('right')){
		    		 children.css('marginLeft', 165);
		    		 children.css('marginTop', -(children.height()/2)+12);
		    	 }
		    	 
		    	 children.fadeIn();
		      }); 
		},
		mouseLeave: function(){
			$('.dots').mouseleave(function() {
		    	 $(this).children().fadeOut();
		      });
		}
	}

$(document).ready(function(){
	dots.init();
});