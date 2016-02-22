$(window).load(function () {

	/* Menu Effect */

	$('.magic li').mouseenter(function() {
		$('.link').addClass('desactive');
		$(this).children('.link').removeClass('desactive');
		app($('.real li').eq(choosePic($(this))));
	});

	$('.magic li').mouseleave(function() {
		$('.link').removeClass('desactive');
		appRemove($('.real li'));
	})

	$('.ext').height($(window).height());

	/* End Menu */

	function app(c) {
		TweenMax.to(c, 1, {opacity:1});
	}

	function appRemove(a) {
		TweenMax.to(a, 1, {opacity:0});
	}

	function choosePic(a) {
		b = a.index();
		return b;
	}

});