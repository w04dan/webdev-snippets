const cover = document.getElementById("cover")

cover.addEventListener('mousedown', (e) => {
    if (cover.dataset.startPosition === '-2') return;

    cover.dataset.dragPercentage = 0;
    cover.dataset.startPosition = e.clientX;
    cover.style.transitionProperty = `none`;
});

cover.addEventListener('mousemove', (e) => {
    if (cover.dataset.startPosition === '-1' || cover.dataset.startPosition === '-2') return;

    const mouseDelta = parseFloat(cover.dataset.startPosition) - e.clientX;
    const maxDelta = window.innerWidth;

    cover.dataset.dragPercentage = Math.min((mouseDelta/ maxDelta) * -100, 0);
    cover.style.transform = `translateX(${cover.dataset.dragPercentage}%)`;

    if (parseFloat(cover.dataset.dragPercentage) < -60) {
        cover.dataset.startPosition = '-2';
        cover.style.transitionProperty = `transform`;
        cover.style.transform = `translateX(-100%)`;
    }
});

cover.addEventListener('mouseup', () => {
    if (cover.dataset.startPosition === '-1' || cover.dataset.startPosition === '-2') return;

    cover.dataset.dragPercentage === '0' ? cover.dataset.startPosition = -1 : cover.dataset.startPosition = -2;
    cover.style.transitionProperty = `transform`;
    cover.style.transform = `translateX(0%)`;
});

cover.addEventListener('transitionend', () => {
    cover.dataset.startPosition = -1;
});