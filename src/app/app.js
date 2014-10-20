angular.module('Movie', [
	'ngAnimate',
	'ui.router',
	'Movie.home',
	'Movie.gallery',
	'Movie.synopsis',
	'Movie.cast',
	'Movie.trailer',
	'Movie.directives.nav',
	'Movie.directives.cast',
	'Movie.directives.thumbnail',
	'Movie.services.preload'
])
.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('Movie', {
			abstract: true,
			url: ''
		}
	);

	$urlRouterProvider.otherwise("/");

})
.animation('.main-content', function($rootScope) {

	return {
		enter: function(element, done) {
			// animation for inbound page
			TweenMax.fromTo(element, 1, {x:'-2500px'}, { x:0, opacity: '1', onComplete: done});
		},
		leave: function(element, done) {
			// animation for outbound page
			element.css({position:'absolute', top: 0});
			TweenMax.to(element, 1, { x: '2000px', opacity: '0', onComplete: done });
		}
	};

});