  const burger = document.querySelector('.btn-burger');
  const mobileContainer = document.querySelector('.mobile-container');
  const body = document.querySelector('body')

  function toggleClass() {
    mobileContainer.classList.toggle('show')
    body.classList.toggle('overlow-hidden')
    burger.classList.toggle('active')
  }

  burger.addEventListener('click', toggleClass)
  