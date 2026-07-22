// header
const searchInput = document.querySelector('.header__search-input')
const searchIcon = document.querySelector('.header__search-icon')

if( searchIcon) {
	searchIcon.addEventListener('click', () => {
		searchInput.classList.toggle('active');
	})
}

const MenuBtn = document.querySelector('.header__burger');
const Menu = document.querySelector('.menu');
const body = document.body;

if (MenuBtn && Menu) {
	MenuBtn.addEventListener('click', () => {
		MenuBtn.classList.toggle('active')
		Menu.classList.toggle('active')
	})
}

// swiper 1

const beaches = ['North Shore', 'South Shore', 'West Shore', 'East Shore'];

const swiper = new Swiper('.main-swiper', {

	loop:true,
	speed: 800,
	effect: 'fade',
	  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	pagination: {
    el: '.swiper-pagination',
    clickable: true,
		renderBullet: function (index, className) {
			let num = (index + 1) < 10 ? '0' + (index + 1) : (index + 1);
			return `
			<div class="${className}">
          <span class="number">${num}</span>
          <span class="name">${beaches[index]}</span>
        </div>
			`;
		},
	},
	autoplay: {
		delay: 3000,
		disableOnIneraction: false,
		pauseOnMouseEnter: false,
	}
})

// swiper 2 travel
const airplane = document.querySelector('.travel__airplane');

const travelSwiper = new Swiper('.travel-swiper', {
	slidesPerView: 1,
	  navigation: {
    nextEl: '.booking-section-button-next',
    prevEl: '.booking-section-button-prev',
  },
	on: {
		slideChange: function() {
			airplane.classList.remove('animate-fly');
			void airplane.offsetWidth;
			airplane.classList.add('animate-fly');
		}
	}
})

// swiper 3 sleep
const sleepSwiper = new Swiper('.sleep-swiper', {
		slidesPerView: 1,
	  navigation: {
    nextEl: '.booking-section-button-next',
    prevEl: '.booking-section-button-prev',
  },
})

// map

document.addEventListener('DOMContentLoaded', () => {

	const points = document.querySelectorAll('.point');
	const slides = document.querySelectorAll('.surf__item');
	const arrowLeft = document.querySelector('.place__arrows-left');
	const arrowRight = document.querySelector('.place__arrows-right');

	if( points.lenght === 0 || !arrowLeft || !arrowRight) return;

	let currentIndex = 0;

	function updateActivePoint(index) {
		points.forEach(point => point.classList.remove('active'));
		points[index].classList.add('active');

		slides.forEach(slide => slide.classList.remove('active'));
		slides[index].classList.add('active');
	}
	arrowRight.addEventListener('click', () => {
		currentIndex++;

		if(currentIndex >= points.length) {
			currentIndex = 0
		}
		updateActivePoint(currentIndex);
	})
	arrowLeft.addEventListener('click', () => {
		currentIndex--;

		if(currentIndex < 0) {
			currentIndex = points.length - 1;
		}
		updateActivePoint(currentIndex)
	})

	points.forEach((point, index) => {
		const circle = point.querySelector('.point__circle');
		if(circle) {
			circle.addEventListener('click', () => {
				currentIndex = index;
				updateActivePoint(currentIndex);
			})
	 	}
	})
})


// row sleep button 
const allHotelSlides = document.querySelectorAll('.js-hotel-slide');

allHotelSlides.forEach(slide => {
	const nightsCount = slide.querySelector('.js-nights-count');
  const nightsMinus = slide.querySelector('.js-nights-minus');
  const nightsPlus = slide.querySelector('.js-nights-plus');
  const totalPrice = slide.querySelector('.js-total-price');
	
	const guestsCount = slide.querySelector('.js-guests-count');
  const guestsMinus = slide.querySelector('.js-guests-minus');
  const guestsPlus = slide.querySelector('.js-guests-plus');
	const pricePerNight = 40; 
	const pricePerGuests = 37; 
	
	function calculateTotal() {
		let currentNights = Number(nightsCount.textContent);
    let currentGuests = Number(guestsCount.textContent);
		let allPrice = (currentNights * pricePerNight) + (currentGuests * pricePerGuests);
		totalPrice.textContent = `$${allPrice} USD`;
	}
  nightsPlus.addEventListener('click', () => {
    let currentNights = Number(nightsCount.textContent);
    currentNights = currentNights + 1;
		nightsCount.textContent = currentNights;
		calculateTotal();
  });
  nightsMinus.addEventListener('click', () => {
    let currentNights = Number(nightsCount.textContent);
    
    if (currentNights > 1) {
      currentNights = currentNights - 1;
			nightsCount.textContent = currentNights;
			calculateTotal();
    }
  });

	guestsPlus.addEventListener('click', () => {
    let currentGuests = Number(guestsCount.textContent);
    currentGuests = currentGuests + 1;
		guestsCount.textContent = currentGuests;
		calculateTotal();
  });
  guestsMinus.addEventListener('click', () => {
		let currentGuests = Number(guestsCount.textContent);
    if (currentGuests > 1) {
			currentGuests = currentGuests - 1;
			guestsCount.textContent = currentGuests;
			calculateTotal();
    }
  });
});


// shop scripts 

const hotspots = document.querySelectorAll('.hotspot'); 

hotspots.forEach(hotspot => {
	const btn = hotspot.querySelector('.hotspot-btn')
	if(btn) {
		btn.addEventListener('click', () => {
			hotspot.classList.toggle('active');
		})
	}
});

const ShopSwiper = new Swiper('.shop-swiper', {
		slidesPerView: 1,
	  navigation: {
    nextEl: '.shop-section-button-next',
    prevEl: '.shop-section-button-prev',
  },
})
 





