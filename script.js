"use strict"

//*МЕНЮ БУРГЕР=================
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
//*============================


//*СЛАЙДЕР SWIPER===============
new Swiper('.partners__swiper', {

	//колисемтво слайдов для показа (можно дробное число)
	slidesPerView: 4.5,

	//отступы между слайдами
	spaceBetween: 30,
	//Количество пролистываемых страниц
	slidesPerGroup: 1,

	loop: true,

	//автопрокрутка
	autoplay: {
		delay: 300,
		stopOnLastSlide: false,
	// отключить после ручного переключения
		disableOnInteraction: true,
	},

	speed: 1000,
	//Адаптив
	breakpoints: {
		320: {
			// spaceBetween: 50,
			slidesPerView: 1,
		},
		425: {
			slidesPerView: 2,
		},
		600: {
			slidesPerView: 2.5,
			centeredSlides: true,
		},
		992: {
			slidesPerView: 4,
			centeredSlides: true,
		},
	}
});

new Swiper('.reviews__slider', {
	//буллеты
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	//колисемтво слайдов для показа (можно дробное число)
	slidesPerView: 3,

	//отступы между слайдами
	spaceBetween: 48,
	//Количество пролистываемых страниц
	slidesPerGroup: 1,

	loop: true,

	//автопрокрутка
	// autoplay: {
	// 	delay: 300,
	// 	stopOnLastSlide: false,
	// 	// отключить после ручного переключения
	// 	disableOnInteraction: true,
	// },

	speed: 1000,
	//Адаптив
	breakpoints: {
		320: {
			// spaceBetween: 50,
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 25,
		},
		992: {
			slidesPerView: 3,
		},
	}
});



