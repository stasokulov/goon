'use strict';

$(document).ready(function() {
	// Выпадающее меню
	$('.reviews-filters__dashboard')
		.switchPopup({
			btnClass: 'js-tgl-reviews-filters',
			displayClass: 'reviews-filters__dashboard_display',
			visibleClass: 'reviews-filters__dashboard_visible',
			duration: 200,
			pageScrollClass: 'reviews-filters__dashboard'
		});
	// Слайдеры
	function productsSliders() {
		$('.reviews-filters-products__slider-inner_all')
			.slick({
				arrows: true,
				dots: true,
				infinite: true,
				lazyLoad: 'ondemand',
				// variableWidth: true,
				responsive: [
					{
						breakpoint: 10000,
						settings: 'unslick' // destroys slick
					},
					{
						// breakpoint: 1200,
						breakpoint: 850,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							arrows: true,
							dots: true,
							variableWidth: false
						}
					}
				]
			});
		$('.reviews-filters-products__slider-inner_1')
			.slick({
				arrows: true,
				dots: true,
				infinite: true,
				lazyLoad: 'ondemand',
				// variableWidth: true,
				responsive: [
					{
						breakpoint: 10000,
						settings: 'unslick' // destroys slick
					},
					// {
					// 	// breakpoint: 1200,
					// 	breakpoint: 1000,
					// 	settings: {
					// 		slidesToShow: 4
					// 	}
					// },
					{
						breakpoint: 950,
						settings: {
							slidesToShow: 3
						}
					}, {
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							arrows: true,
							dots: true,
							variableWidth: false
						}
					}
				]
			});
		$('.reviews-filters-products__slider-inner_2')
			.slick({
				arrows: true,
				dots: true,
				infinite: true,
				lazyLoad: 'ondemand',
				// variableWidth: true,
				responsive: [
					{
						breakpoint: 10000,
						settings: 'unslick' // destroys slick
					},
					// {
					// 	// breakpoint: 1200,
					// 	breakpoint: 900,
					// 	settings: {
					// 		slidesToShow: 4,
					// 		arrows: true,
					// 		dots: true
					// 	}
					// },
					{
						breakpoint: 950,
						settings: {
							slidesToShow: 3,
							// centerMode: true,
							arrows: true,
							dots: true
						}
					}, {
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							centerMode: false,
							arrows: true,
							dots: true,
							variableWidth: false
						}
					}
				]
			});
		$('.reviews-filters-products__slider-inner_3')
			.slick({
				arrows: true,
				dots: true,
				infinite: true,
				lazyLoad: 'ondemand',
				variableWidth: true,
				responsive: [
					{
						breakpoint: 10000,
						settings: 'unslick' // destroys slick
					},
					// {
					// 	breakpoint: 1200,
					// 	settings: {
					// 		slidesToShow: 4,
					// 		arrows: true,
					// 		dots: true
					// 	}
					// },
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							arrows: true,
							dots: true,
							variableWidth: false
						}
					}
				]
			});
		$('.reviews-filters-products__slider-inner_4')
			.slick({
				arrows: true,
				dots: true,
				infinite: true,
				lazyLoad: 'ondemand',
				variableWidth: true,
				responsive: [
					{
						breakpoint: 10000,
						settings: 'unslick' // destroys slick
					},
					// {
					// 	breakpoint: 1200,
					// 	settings: {
					// 		slidesToShow: 3,
					// 		arrows: true,
					// 		dots: true,
					// 		// centerMode: true,
					// 		initialSlide: 1
					// 	}
					// },
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							arrows: true,
							dots: true,
							variableWidth: false
						}
					}
				]
			});
		$('.reviews-filters-products__slider-inner_5')
			.slick({
				arrows: true,
				dots: true,
				infinite: true,
				lazyLoad: 'ondemand',
				variableWidth: true,
				responsive: [
					{
						breakpoint: 10000,
						settings: 'unslick' // destroys slick
					},
					// {
					// 	breakpoint: 1200,
					// 	settings: {
					// 		slidesToShow: 3,
					// 		arrows: true,
					// 		dots: true,
					// 		// centerMode: true,
					// 		initialSlide: 1
					// 	}
					// },
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							arrows: true,
							dots: true,
							variableWidth: false
						}
					}
				]
			});
		$('.reviews-filters-products__slider-inner_6')
			.slick({
				arrows: true,
				dots: true,
				infinite: true,
				lazyLoad: 'ondemand',
				variableWidth: true,
				responsive: [
					{
						breakpoint: 10000,
						settings: 'unslick' // destroys slick
					},
					// {
					// 	breakpoint: 1200,
					// 	settings: {
					// 		slidesToShow: 3,
					// 		arrows: true,
					// 		dots: true,
					// 		// centerMode: true,
					// 		initialSlide: 1
					// 	}
					// },
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							arrows: true,
							dots: true,
							variableWidth: false
						}
					}
				]
			});
		// $('.reviews-filters-reviews')
		// 	.slick({
		// 		arrows: true,
		// 		dots: true,
		// 		lazyLoad: 'ondemand',
		// 		slidesToShow: 3,
		// 		infinite: true,
		// 		rows: 2,
		// 		responsive: [
		// 			{
		// 				breakpoint: 1440,
		// 				settings: {
		// 					slidesToShow: 2,
		// 					infinite: true
		// 				}
		// 			}, {
		// 				breakpoint: 768,
		// 				settings: {
		// 					slidesToShow: 1,
		// 					infinite: true
		// 				}
		// 			}
		// 		]
		// 	});
	}
	productsSliders();
	var filterBtn = document.querySelectorAll('.reviews-dashboard-btn__inner');
	var filterBtnArray = Array.from(filterBtn);
	filterBtnArray.forEach(function(item) {
		item.addEventListener('click', function() {
			$('.reviews-filters-products__slider-inner_all').slick('unslick');
			$('.reviews-filters-products__slider-inner_1').slick('unslick');
			$('.reviews-filters-products__slider-inner_2').slick('unslick');
			$('.reviews-filters-products__slider-inner_3').slick('unslick');
			$('.reviews-filters-products__slider-inner_4').slick('unslick');
			$('.reviews-filters-products__slider-inner_5').slick('unslick');
			$('.reviews-filters-products__slider-inner_6').slick('unslick');
			productsSliders();
		});
	});

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
		// slidesPerColumn: 2,
		multirow: true,
		autoHeight: false,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				slidesPerColumn: 2,
				spaceBetween: 20,
				slidesPerGroup: 1
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				spaceBetween: 20,
				slidesPerGroup: 2
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				spaceBetween: 30,
				slidesPerGroup: 3
			}
		}

	});
	mySwiper();
});

// Кастомный select
function customSelectFilters() {
	var selectHeader = document.querySelector('.reviews-filters__select');
	function chooseSelect() {
		selectHeader.innerHTML = this.innerText;
	}
	var fliters = document.querySelectorAll('.reviews-dashboard-btn__inner');
	var filtersArray = Array.from(fliters);
	filtersArray.forEach(function (item) {
		item.addEventListener('click', chooseSelect);
	});
}
customSelectFilters();
