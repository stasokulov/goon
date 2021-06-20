'use strict';

$(document).ready(function() {
	// Слайдеры
	$('.prod-presentation__slider')
		.slick({
			arrows: true,
			dots: false,
			lazyLoad: 'ondemand',
			asNavFor: '.prod-presentation__slider-nav', // синхронизация слайдеров
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						arrows: false,
						dots: true
					}
				}
			]
		});
	$('.prod-presentation__slider-nav')
		.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.prod-presentation__slider', // синхронизация слайдеров
			arrows: false,
			dots: false,
			lazyLoad: 'ondemand',
			centerMode: false,
			focusOnSelect: true
		});
	$('.prod-features__slider')
		.slick({
			arrows: true,
			dots: true,
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

	$('.prod-articles__slider')
		.slick({
			arrows: true,
			dots: true,
			lazyLoad: 'ondemand',
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 1440,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 2,
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

	// Фильтрация слайдов с товарами по размеру и количеству штук
	function slidetFilter() {
		var numSelects = document.querySelectorAll('[data-select-num]');
		var numSelectsArray = Array.from(numSelects);
		function reFilter(size) {
			// Фильтруем фотографии товаров в слайдерах
			var dataSize = '[data-size="' + size + '"]';
			$('.prod-presentation__slider').slick('slickUnfilter');
			$('.prod-presentation__slider-nav').slick('slickUnfilter');
			$('.prod-presentation__slider').slick('slickFilter', dataSize);
			$('.prod-presentation__slider-nav').slick('slickFilter', dataSize);
		}
		// Фильтруем фото товаров в слайдерах при загрузке страницы
		var activeSelect = document.querySelector('.prod-presentation__select_active');
		reFilter(activeSelect.value);
		// Фильтрация селектов с количеством при выборе размера
		var sizeSelect = document.querySelector('[data-select-size]');
		sizeSelect.addEventListener('click', function() {
			var size = this.value;
			numSelectsArray.forEach(function(item) {
				item.classList.add('prod-presentation__select_hidden');
				item.classList.remove('prod-presentation__select_active');
				if (size === item.dataset.selectNum) {
					item.classList.remove('prod-presentation__select_hidden');
					item.classList.add('prod-presentation__select_active');
					reFilter(item.value);
				}
			});
		});
		// Фильтрация слайдов при выборе количества
		numSelectsArray.forEach(function(item) {
			item.addEventListener('click', function() {
				var num = item.value;
				reFilter(num);
			});
		});
	}
	slidetFilter();
});
