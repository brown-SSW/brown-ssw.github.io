const carouselElements = document.querySelectorAll('#project-list')
const carouselButtons = document.querySelectorAll('.carousel-button')
const numberOfCarouselElements = document.querySelectorAll('.project').length
let carouselElementWidth = document.querySelectorAll('.project')[0].clientWidth
const carouselElementBorderWidth = 5;
const images = document.querySelectorAll('.image-wrapper')
let currentElementIndex = 0;
let translateX = 0;

window.addEventListener('resize', () => {
  carouselElementWidth = document.querySelectorAll('.project')[0].clientWidth
  translateX =  -1 * (carouselElementWidth * currentElementIndex)
  carouselElements[0].style.transform = `translateX(${translateX}px)`
})

carouselButtons.forEach(button => {
  button.addEventListener('click', event => {
    if (event.target.id === 'prev') {
      if (currentElementIndex > 0) {
        currentElementIndex--
        translateX += carouselElementWidth
      }
    } else if (event.target.id === 'next') {
      if (currentElementIndex < numberOfCarouselElements - 1) {
        currentElementIndex++
        translateX -= carouselElementWidth
      }
    }
    
    carouselElements[0].style.transform = `translateX(${translateX}px)`
  })
})