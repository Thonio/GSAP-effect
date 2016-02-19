$(function() {

	/*TweenMax.staggerFrom('.scene', 0.5, {
		y:300
	 }, 0.5);*/
	
	var controller = new ScrollMagic.Controller();

	var tween1 = TweenMax.from('.scene-1', 0.5, {
		y:300,
		opacity: 0
	});

	var scene1 = new ScrollMagic.Scene({
		triggerElement: '#scene-1',
		duration: $(window).height()/2
	})
	.setTween(tween1)
	.addTo(controller);

	scene1.addIndicators();

	// Debut scene 2

	var controller = new ScrollMagic.Controller();

	var tween2 = TweenMax.from('.scene-2', 0.5, {
		y:300,
		opacity: 0
	});

	var scene2 = new ScrollMagic.Scene({
		triggerElement: '#scene-2',
		duration: $(window).height()/2
	})
	.setTween(tween2)
	.addTo(controller);

	scene2.addIndicators();

	// Fin scene 2
	
	// Debut scene 3

	var controller = new ScrollMagic.Controller();

	var tween3 = TweenMax.from('.scene-3', 0.5, {
		y:300,
		opacity: 0
	});

	var scene3 = new ScrollMagic.Scene({
		triggerElement: '#scene-3',
		duration: $(window).height()/2
	})
	.setTween(tween3)
	.addTo(controller);

	// scene3.addIndicators();

	// Fin scene 3
	
	// Debut scene 4 

	var controller = new ScrollMagic.Controller();

	var tween4 = TweenMax.from('.scene-4', 2, {
		y:300,
		opacity: 0
	});

	var scene4 = new ScrollMagic.Scene({
		triggerElement: '#scene-4',
		duration: $(window).height()/2
	})
	.setTween(tween4)
	.addTo(controller);

	// scene4.addIndicators();

	// Fin scene 4

});