/**
 * 
 * @Author: Diego Vera Jiménez
 * 
 * 
 */
//for normal tooltips
var dotsTooltip = {
		init: function(){
			dotsTooltip.clean();
			dotsTooltip.mouseEnter();
			dotsTooltip.mouseLeave();
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
//for stand tooltips
var dotsStand = {
		init: function(){
			dotsStand.clean();
			dotsStand.mouseClick();
			dotsStand.close();
		},
		clean : function(){
			$('.dots_s').children().hide();
			$('.dots_s_content').css('position','absolute');
			$('.dots_s_content').css('cursor','default');
			
		},
		mouseClick: function(){
			$('.dots_s').click(function(e) {
				var target, children;
		    	 
		    	 target = $(this); 
		    	 children = target.children();
		    	 if(e.target.nodeName!='A')
		    	 children.fadeIn();
			});
		},
		close: function(){
			$('.dots_s').find('.close_x').click(function(){
				var target;
		    	 
		    	 target = $(this);
		    	 target.parent().fadeOut();
			});
		}
}


$(document).ready(function(){
	dotsTooltip.init();
	dotsStand.init();
});