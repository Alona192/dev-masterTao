  const burger = document.querySelector('.hamburger');
  const mobileContainer = document.querySelector('.mobile-container');
  const body = document.querySelector('body')

  function toggleClass() {
    mobileContainer.classList.toggle('show')
    burger.classList.toggle('is-active')
    body.classList.toggle('overlow-hidden')
    
  }

  burger.addEventListener('click', toggleClass);

  const swiperBanner = new Swiper('.banner-slider', {
    loop: true,
    spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      enabled: false,
      //nextEl: '.swiper-button-next',
      //prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1025: {
        //spaceBetween: 50,
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
  });

  const fileInput = document.querySelector('#product-photo');
  

  const typeFile = document.querySelectorAll('.custom-file');
  const fileName = document.querySelector('.file-name');

  typeFile.forEach(item => {
    item.addEventListener('change', () => {
      //const fileName = item.closest('.form-column').querySelector('.fileName')
      fileName.innerHTML = item.files[0].name;
    })
  })

const advantagesSlideLength = document.querySelectorAll('.advantages .swiper-slide').length;


const swiperAdvantages = new Swiper('#advantages', {
    speed: 400,
    spaceBetween: 12,
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,

    pagination: {
      el: '.swiper-pagination',
      enabled: true,
      clickable: true,
    },

    breakpoints: {
      1025: {
        spaceBetween: 0,
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: advantagesSlideLength,
        simulateTouch: false,

        pagination: {
          enabled: false,
        },
      },
    },
  });

const swiperTemplate = new Swiper('.slider-template', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    enabled: false,
  },
  pagination: {
    el: '.swiper-pagination',
    enabled: true,
    clickable: true,
  },
  
  breakpoints: {
    1025: {
      slidesPerView: 2,
      pagination: {
        enabled: false,
        el: '.swiper-pagination',
      },
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    
    1140: {
      slidesPerView: 3,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        enabled: false,
        el: '.swiper-pagination',
      }
    },
  },
});

 
  
  