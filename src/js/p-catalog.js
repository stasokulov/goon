'use strict';

$(document).ready(function() {
	// Слайдеры
	$('.catalog-products__slider')
		.slick({
			arrows: true,
			dots: true,
			infinite: true,
			lazyLoad: 'ondemand',
			adaptiveHeight: true,
			prevArrow: $('.catalog-products__custom-button_prev'),
			nextArrow: $('.catalog-products__custom-button_next'),
			appendDots: $('.catalog-products__custom-dots'),
			responsive: [
				{
					breakpoint: 10000,
					settings: 'unslick' // destroys slick
				}, {
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
						infinite: true
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						infinite: true,
						swipe: false
					}
				}
			]
		})
		.on('init', function() {
			var cusomDots2 = document.querySelectorAll('.catalog-products__custom-dots_2 li');
			var cusomDots2Array = Array.from(cusomDots2);
			if (cusomDots2Array[0]) {
				cusomDots2Array[0].classList.add('custom-slick-active');
			}
		}) // Посановка класса для активной точке во второй кастомной пагинации
		.on('beforeChange', function (e, s, p, currentSlide) {
			var cusomDots2 = document.querySelectorAll('.catalog-products__custom-dots_2 li');
			var cusomDots2Array = Array.from(cusomDots2);
			cusomDots2Array.forEach(function(item) {
				item.classList.remove('custom-slick-active');
			});
			cusomDots2Array[currentSlide].classList.add('custom-slick-active');
		}); // Переключение активной точки во второй кастомной пагинации
	$('.catalog-products__subslider')
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
	$('.catalog-how-right__slider')
		.slick({
			arrows: true,
			dots: true,
			infinite: true,
			lazyLoad: 'ondemand',
			responsive: [
				{
					breakpoint: 10000,
					settings: 'unslick' // destroys slick
				}, {
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
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
	// Слайдер для дестктопа и планшета
	$('.catalog-faq__slider_1rows')
		.slick({
			arrows: true,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			lazyLoad: 'ondemand',
			rows: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true
					}
				}
			]
		});
	// Слайдер для мобильной версии
	$('.catalog-faq__slider_2rows')
		.slick({
			arrows: true,
			dots: true,
			slidesToShow: 1,
			infinite: true,
			lazyLoad: 'ondemand',
			rows: 2
		});
});
