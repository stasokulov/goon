'use strict';

$(document).ready(function() {
	// Слайдеры
	$('.home-banner__slider')
		.slick({
			arrows: true,
			dots: true,
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			infinite: true,
			responsive: [
				{
					breakpoint: 1440,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 1
					}
				}, {
					breakpoint: 768,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 1
					}
				}
			]
		});
	$('.prod-reviews__slider')
		.slick({
			arrows: true,
			dots: true,
			lazyLoad: 'ondemand',
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			responsive: [
				{
					breakpoint: 1440,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: false
					}
				}, {
					breakpoint: 768,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: false
					}
				}
			]
		});
	$('.home-quest__slider')
		.slick({
			arrows: true,
			dots: true,
			lazyLoad: 'ondemand',
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 10000,
					settings: 'unslick' // destroys slick
				}, {
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						infinite: true
					}
				}
			]
		});
});
