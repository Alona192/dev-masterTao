  const burger = document.querySelector('.hamburger');
  const mobileContainer = document.querySelector('.mobile-container');
  const body = document.querySelector('body')

  function toggleClass() {
    mobileContainer.classList.toggle('show')
    burger.classList.toggle('is-active')
    body.classList.toggle('overlow-hidden')
    
  }

  burger.addEventListener('click', toggleClass);

  const swiper = new Swiper('.banner-slider', {
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