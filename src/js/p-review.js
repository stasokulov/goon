'use strict';

$(document).ready(function() {
	// Слайдеры
	$('.review-area__slider')
		.slick({
			arrows: true,
			dots: false,
			lazyLoad: 'ondemand',
			asNavFor: '.review-area__slider-nav', // синхронизация слайдеров
			infinite: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						dots: true
					}
				}
			]
		});
	$('.review-area__slider-nav')
		.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.review-area__slider', // синхронизация слайдеров
			arrows: false,
			dots: false,
			lazyLoad: 'ondemand',
			centerMode: false,
			focusOnSelect: true,
			infinite: false
		});

	// Выставление рейтинга при клике на звезды
	function setRating() {
		var stars = document.querySelectorAll('.stars__item');
		var starsArray = Array.from(stars);
		function catchClick() {
			starsArray.forEach(function(item) {
				item.classList.remove('stars__item_yellow');
			});
			var num = this.dataset.num;
			for (var i = 0; i < num; i++) {
				starsArray[i].classList.add('stars__item_yellow');
			}
		}
		starsArray.forEach(function(item) {
			item.addEventListener('click', catchClick);
		});
	}
	setRating();

	// Фильтрация товаров в форме
	function productFilter() {
		function reFilter(mark) {
			// Фильтруем фотографии товаров в слайдерах
			var selector = '[data-mark="' + mark + '"]';
			$('.review-area__slider').slick('slickUnfilter');
			$('.review-area__slider-nav').slick('slickUnfilter');
			$('.review-area__slider').slick('slickFilter', selector);
			$('.review-area__slider-nav').slick('slickFilter', selector);
			// Удаляем заголовки и оформление
			var corner = document.querySelector('[data-select-corner]');
			var title = document.querySelector('.review-area__header');
			var subTitle = document.querySelector('.review-area__subtitle');
			corner.className = '';
			corner.classList.add('content-block__corner-marker');
			title.innerText = '';
			subTitle.innerText = '';
			// Вставляем нужные заголовки и оформление
			var cornerClass = '';
			var cornerText = '';
			var titleText = '';
			var subtitleText = '';
			if (mark === 'mark_1') {
				cornerClass = 'content-block__corner-marker_bg_1';
				cornerText = 'Премиум';
				titleText = 'Подгузники GOO.N';
				subtitleText = 'Остаются сухими надолго';
			}
			if (mark === 'mark_2') {
				cornerClass = 'content-block__corner-marker_bg_1';
				cornerText = 'Премиум';
				titleText = 'Подгузники-трусики Goo.N';
				subtitleText = 'Остаются сухими надолго';
			}
			if (mark === 'mark_3') {
				cornerClass = 'content-block__corner-marker_bg_2';
				cornerText = 'Стандарт';
				titleText = 'Трусики Goo.N Cheerful Baby';
				subtitleText = 'Японское качество по доступной цене';
			}
			if (mark === 'mark_4') {
				cornerClass = 'content-block__corner-marker_bg_2';
				cornerText = 'Стандарт';
				titleText = 'Трусики Goo.N Small pack';
				subtitleText = 'Дышащие трусики Goo.N Small pack теперь в удобном формате!';
			}
			if (mark === 'mark_5') {
				cornerClass = 'content-block__corner-marker_bg_3';
				cornerText = 'Специальная линейка';
				titleText = 'Подгузники Goo.N для маловесных детей';
				subtitleText = 'Нежные натуральные материалы с витамином Е для дополнительной заботы о коже малыша';
			}
			if (mark === 'mark_6') {
				cornerClass = 'content-block__corner-marker_bg_3';
				cornerText = 'Специальная линейка';
				titleText = 'Подгузники-трусики Goo.N Super big';
				subtitleText = 'Остаются сухими надолго';
			}

			corner.classList.add(cornerClass);
			corner.innerText = cornerText;
			title.innerText = titleText;
			subTitle.innerText = subtitleText;
		}
		// Фильтруем товары при загрузке страницы
		reFilter('mark_6');
		// Фильтрация товаров при выборе товара в форме
		var productSelect = document.querySelector('[data-select-product]');
		productSelect.addEventListener('click', function() {
			var mark = productSelect.value;
			if (mark.indexOf('mark') !== -1) {
				reFilter(mark);
			}
		});
	}
	productFilter();
});
