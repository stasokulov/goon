'use strict';

$(document).ready(function() {
	// Выпадающее меню
	$('.articles-filters__dashboard')
		.switchPopup({
			btnClass: 'js-tgl-articles-filters',
			displayClass: 'articles-filters__dashboard_display',
			visibleClass: 'articles-filters__dashboard_visible',
			duration: 200,
			pageScrollClass: 'articles-filters__dashboard'
		});
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
		// slidesPerColumn: 2,
		multirow: true,
		autoHeight: false,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 20,
				slidesPerGroup: 1
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				spaceBetween: 28,
				slidesPerGroup: 2
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				spaceBetween: 30,
				allowTouchMove: false,
				watchOverflow: true,
				slidesPerGroup: 3
			}
		}

	});
	mySwiper();
});

// Кастомный select
function customSelectFilters() {
	var selectHeader = document.querySelector('.articles-filters__select');
	function chooseSelect() {
		selectHeader.innerHTML = this.innerText;
	}
	var fliters = document.querySelectorAll('.articles-dashboard-btn__inner');
	var filtersArray = Array.from(fliters);
	filtersArray.forEach(function (item) {
		item.addEventListener('click', chooseSelect);
		// Убираем подсветку со всех кнопок и подсвечиваем кликнутую
		item.addEventListener('click', function() {
			filtersArray.forEach(function(button) {
				button.classList.remove('articles-dashboard-btn__inner_active');
			});
			item.classList.add('articles-dashboard-btn__inner_active');
		});
	});
}
customSelectFilters();
