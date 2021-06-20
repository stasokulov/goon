'use strict';

$(document).ready(function() {
	// Слайдеры
	// Четыре слайдера. При загрузке создается один.
	// При выборе в селекте прячем все, а потом показываем и создаем один, если еще не создан.
	var wherebuyObjectLland1 = {
		arrows: true,
		dots: false,
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 10000,
				settings: 'unslick' // destroys slick
			}, {
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
	};
	var wherebuyObjectLland2 = {
		arrows: true,
		dots: false,
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 10000,
				settings: 'unslick' // destroys slick
			}
			// {
			// 	breakpoint: 1200,
			// 	settings: {
			// 		arrows: true,
			// 		dots: true,
			// 		slidesToShow: 3,
			// 		slidesToScroll: 3,
			// 		infinite: true,
			//    rows: 2
			// 	}
			// },
			// {
			// 	breakpoint: 768,
			// 	settings: {
			// 		arrows: true,
			// 		dots: true,
			// 		slidesToShow: 1,
			// 		slidesToScroll: 1,
			// 		infinite: true,
			// 		rows: 4
			// 	}
			// }
		]
	};
	var wherebuyObjectLland3 = {
		arrows: true,
		dots: false,
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 10000,
				settings: 'unslick' // destroys slick
			}
			// {
			// 	breakpoint: 1200,
			// 	settings: {
			// 		arrows: true,
			// 		dots: true,
			// 		slidesToShow: 3,
			// 		slidesToScroll: 3,
			// 		infinite: true,
			//    rows: 4
			// 	}
			// },
			// {
			// 	breakpoint: 768,
			// 	settings: {
			// 		arrows: true,
			// 		dots: true,
			// 		slidesToShow: 1,
			// 		slidesToScroll: 1,
			// 		infinite: true,
			//    rows: 4
			// 	}
			// }
		]
	};
	var wherebuyObjectLland4 = {
		arrows: true,
		dots: false,
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 10000,
				settings: 'unslick' // destroys slick
			},
			// {
			// 	breakpoint: 1200,
			// 	settings: {
			// 		arrows: true,
			// 		dots: true,
			// 		slidesToShow: 3,
			// 		slidesToScroll: 3,
			// 		infinite: true,
			// 		rows: 2
			// 	}
			// },
			{
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
	};
	$('.where-buy-page__slider_land1').slick(wherebuyObjectLland1);
	// Переключение слайдеров "Где купить"
	function toggleSlidersWhereBuy() {
		var select = document.querySelector('.where-buy-page__country');
		var sliders = document.querySelectorAll('.where-buy-page__slider');
		var slidersArray = Array.from(sliders);
		select.addEventListener('change', function() {
			slidersArray.forEach(function(item) {
				item.classList.add('where-buy-page__slider_hidden'); // Прячем все слайдеры
				if (item.dataset.select === select.value) {
					item.classList.remove('where-buy-page__slider_hidden'); // Показываем один
					// Инициализируем, если не инициализирован
					if (!item.classList.contains('slick-initialized')) {
						if (item.dataset.select === 'land1') {
							$(item).slick(wherebuyObjectLland1);
						} else if (item.dataset.select === 'land2') {
							$(item).slick(wherebuyObjectLland2);
						} else if (item.dataset.select === 'land3') {
							$(item).slick(wherebuyObjectLland3);
						} else if (item.dataset.select === 'land4') {
							$(item).slick(wherebuyObjectLland4);
						}
					}
				}
			});
		});
	}
	toggleSlidersWhereBuy();
	// Swiper slider
	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination'
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},

		// slidesPerView: 2,
		// slidesPerColumn: 2,
		// multirow: true,
		autoHeight: false,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1
				// slidesPerColumn: 1
				// spaceBetween: 20
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2,
				// slidesPerColumn: 1,
				spaceBetween: 18
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 2,
				// slidesPerColumn: 1,
				spaceBetween: 30
			}
		}

	});
	mySwiper();
});
