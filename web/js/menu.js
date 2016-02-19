$(window).load(function () {

	/* Menu Effect */

	$('.nav li').mouseenter(function() {
		$('.test').addClass('desactive');
		$(this).children('.test').removeClass('desactive');
		app($('.real li').eq(choosePic($(this))));
	});

	$('.nav li').mouseleave(function() {
		$('.test').removeClass('desactive');
		appRemove($('.real li'));
	})

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