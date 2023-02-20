const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const slideInOnScroll = () => {
  const images = document.querySelectorAll('.slide-in');
  images.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const isVisible = imageTop - windowHeight < scrollY;
    if (isVisible) {
      image.classList.add('active');
    }
  });
};

const debouncedSlideInOnScroll = debounce(slideInOnScroll, 10);

window.addEventListener('scroll', debouncedSlideInOnScroll);
    