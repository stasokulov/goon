'use strict';

$(document).ready(function() {
	// Выпадающее меню
	$('.header__nav')
		.switchPopup({
			btnClass: 'js-tgl-dropdown-menu',
			displayClass: 'header__nav_display',
			visibleClass: 'header__nav_visible',
			duration: 200
			// pageScrollClass: ''
		});
	$('.header__nav').on('beforeOpen', function() {
		$('.burger').addClass('burger_hidden');
		$('.burger-close').addClass('burger-close_visible');
		$('main').attr('hidden', true);
		$('footer').attr('hidden', true);
	});
	$('.header__nav').on('beforeClose', function() {
		$('.burger').removeClass('burger_hidden');
		$('.burger-close').removeClass('burger-close_visible');
		$('main').attr('hidden', false);
		$('footer').attr('hidden', false);
	});

	// Слайдеры
	$('.discount__slider-1')
		.slick({
			arrows: true,
			dots: true,
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 1,
						infinite: true
					}
				}, {
					breakpoint: 768,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 1,
						infinite: true
					}
				}
			]
		});
	$('.discount__slider-2')
		.slick({
			arrows: true,
			dots: true,
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			responsive: [
				{
					breakpoint: 1440,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 1,
						infinite: true
					}
				}, {
					breakpoint: 768,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 1,
						infinite: true
					}
				}
			]
		});
	$('.where-buy__slider')
		.slick({
			arrows: true,
			dots: true,
			lazyLoad: 'ondemand',
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						rows: 2
					}
				}, {
					breakpoint: 768,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						rows: 4
					}
				}
			]
		});
	$('.catalog__slider')
		.slick({
			arrows: true,
			dots: true,
			infinite: true,
			lazyLoad: 'ondemand',
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 10000,
					settings: 'unslick' // destroys slick
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						infinite: true,
						swipe: false
					}
				}
			]
		});
	$('.catalog__subslider')
		.slick({
			arrows: false,
			dots: true,
			infinite: true,
			lazyLoad: 'ondemand',
			responsive: [
				{
					breakpoint: 10000,
					settings: 'unslick' // destroys slick
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						infinite: true
					}
				}
			]
		});
	$('.articles__slider')
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
						slidesToShow: 2,
						slidesToScroll: 2,
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

	// Попапы
	var modalFill = document.querySelectorAll('.modal-fill');
	var modalFillArray = Array.from(modalFill);
	modalFillArray.forEach(function(item) {
		item.addEventListener('click', function() {
			item.setAttribute('hidden', 'true');
		});
	});
});
