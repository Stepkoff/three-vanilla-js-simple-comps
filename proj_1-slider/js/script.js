const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.sliderImage');
const bottom = document.querySelector('.bottom');

let slideNumber = 0;

for(let i = 0; i < images.length; i++) {
  const div = document.createElement('div')
  div.classList.add('button')
  bottom.append(div);
}
const buttons = document.querySelectorAll('.button');
buttons[0].style.background = 'white';
const resetBackground = () => {
  buttons.forEach(btn => btn.style.background = 'none')
}
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slider.style.transform = `translateX(-${index}00%)`
    resetBackground()
    slideNumber = index
    button.style.background = 'white'
  })
});
const changeColor = () => {
  resetBackground();
  buttons[slideNumber].style.background = 'white'
}

const gotoNextSlide = () => {
  slideNumber++;
  slider.style.transform = `translateX(-${slideNumber}00%)`
  changeColor()
}
const gotoFirstSlide = () => {
  slideNumber = 0
  slider.style.transform = `translateX(0%)`
  changeColor()
}
const gotoPrevSlide = () => {
  slideNumber--
  slider.style.transform = `translateX(-${slideNumber}00%)`
  changeColor()
}
const gotoLastSlide = () => {
  slideNumber = images.length - 1
  slider.style.transform = `translateX(-${slideNumber}00%)`
  changeColor()
}
right.addEventListener('click', () => {
  slideNumber < images.length - 1 ? gotoNextSlide() : gotoFirstSlide()
})
left.addEventListener('click', () => {
  slideNumber > 0 ? gotoPrevSlide() : gotoLastSlide()
})


