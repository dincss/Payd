




$('body').on('click', '.burger-container', function(e){
		e.preventDefault();
			$(this).find('#burger').toggleClass('open');
			$('.js').toggleClass('open');
			// $('.js-right-block').toggleClass('open');
	});