const slide = document.querySelector('.slide').clientWidth +4
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slideBox = document.querySelector('.slide-box')
const slideLength = document.querySelectorAll('.slide').length
console.log(slideLength)

left.addEventListener('click', moveLeft)
right.addEventListener('click', moveRight)

let slideNumber = 0;

function moveLeft() {
    slideNumber--
    if(slideNumber < 0) {
        slideNumber = slideLength/2
    }
    console.log(slideNumber)
    slideBox.style.transform = `translateX(${-slide*slideNumber}px)`
}

function moveRight() {
    slideNumber++
    
    if(slideNumber > slideLength/2) {
        slideNumber = 0
    }
    console.log(slideNumber)
    slideBox.style.transform = `translateX(${-slide*slideNumber}px)`
}