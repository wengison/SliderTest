//SEELECTORS
const chevronLeft = document.querySelector('.aside-left')
const chevronRight = document.querySelector('.aside-right')
const slidesLength = document.querySelectorAll('.slide').length; 
const containerWidth = document.querySelector('.container').clientWidth
const slideBox = document.querySelector('.slide-box')
// LISTENERS
chevronLeft.addEventListener('click', moveLeft)
chevronRight.addEventListener('click', moveRight)

// FUNCTIONS
let slideNumber = 0

function moveRight() {
    slideNumber++
    if (slideNumber == slidesLength) {
        slideNumber = 0
    }
    slideBox.style.transform = `translateX(${-containerWidth*slideNumber}px)`
}


function moveLeft() {
    slideNumber--
    if (slideNumber < 0) {
        slideNumber = slidesLength-1
    }
    slideBox.style.transform = `translateX(${-containerWidth*slideNumber}px)`
}

// tak urcite