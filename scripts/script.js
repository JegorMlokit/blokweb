document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel__button--right');
    const prevButton = document.querySelector('.carousel__button--left');
    const paginationButtons = document.querySelectorAll('.carousel__pagination-button');
   
    let currentIndex = 0;
  
    const updateSlide = (index) => {
      track.style.transform = `translateX(-${index * 100}%)`;
      paginationButtons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
      });
    };
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide(currentIndex);
    });
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide(currentIndex);
    });
  
    paginationButtons.forEach((button, i) => {
      button.addEventListener('click', () => {
        currentIndex = i;
        updateSlide(currentIndex);
      });
    });
  
  
    updateSlide(currentIndex);
  });
  
