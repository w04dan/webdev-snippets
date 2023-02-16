let activeIndex = 0;

const slides = document.getElementsByTagName('section');

const handleLeftArrow = () => {
    console.log("left-click");
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "after";
    nextSlide.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
};

const handleRightArrow = () => {
    console.log("right-click");
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "before";
    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
};