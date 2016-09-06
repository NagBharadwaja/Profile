$(document).ready(function(){
	var workBlocks = $('.p-work-block'),
		offset = 0.8;
		
	// Hide work blocks
	hideBlocks(workBlocks, offset);
	
	// Show work blocks when scrolling.
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
		? 	setTimeOut(function(){ showBlocks(workBlocks, offset);}, 100) 
		: 	window.requestAnimationFrame(function(){ showBlocks(workBlocks, offset);});
	});
	
	function hideBlocks(blocks, offset){
		blocks.each(function(){
			($(this).offset().top > $(window).scrollTop()+$(window).height()*offset )
				&& $(this).find('.module-img, .work-content').addClass('is-hidden');
		});
	}
	
	function showBlocks(blocks, offset){
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset 
			&& $(this).find('.module-img').hasClass('is-hidden') ) 
			&& $(this).find('.module-img, .work-content').removeClass('is-hidden').addClass('is-bounce');
			//console.log("showBlocks");
		});
	}
});
