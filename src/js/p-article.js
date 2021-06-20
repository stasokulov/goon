'use strict';

$(document).ready(function() {
	// Слайдеры
	// Swiper slider
	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: false,
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
		autoHeight: false,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 28
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 28
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 28
			}
		}

	});
	mySwiper();
});
