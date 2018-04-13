$(document).ready(function(){
	/*Nav Burger*/
	$('.nav-toggle').click(function(){
		$('.nav-toggle .burger').toggleClass('active');
		$('.navS').toggleClass('active');
	});

	/*Sliders*/
	$('.ms').slick({
		arrows: true,
		prevArrow: '<div class="ms__prev"></div>',
		nextArrow: '<div class="ms__next"></div>',
		dots: true,
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});

	$('.top-slider').slick({
		arrows: true,
		prevArrow: '<div class="ts__prev"></div>',
		nextArrow: '<div class="ts__next"></div>',
		dots: false,
		vertical: true,
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});

	/*Catalog menu Accordion*/
	sideBarNav();
});


var sideBarNav = function(){
	$('p.sidebar-nav__header').next().hide();
	$('p.sidebar-nav__header.active').next().show();
	$('p.sidebar-nav__header').click(function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle();
	});
};