const upBtn = document.querySelector('.up-button'),
      downBtn = document.querySelector('.down-button'),
      sidebar = document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      constainer = document.querySelector('.container');

let activSlideIndex = 0;

const slidesCount = mainSlide.querySelectorAll('div').length;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
  
upBtn.addEventListener('click', () => {
  changeSlide('up');
});

downBtn.addEventListener('click', () => {
  changeSlide('down');

});

function changeSlide(direction) {
  if (direction === 'down') {
    activSlideIndex++;
    if (activSlideIndex === slidesCount) {
      activSlideIndex = 0;
    }
  }else if(direction === 'up') {
    activSlideIndex--;
    if (activSlideIndex < 0) {
      activSlideIndex = slidesCount - 1; 
    }
  }
const height = constainer.clientHeight;
  mainSlide.style.transform = `translateY(-${activSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activSlideIndex * height}px)`;

}
