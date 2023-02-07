const cover = document.getElementById("cover")

cover.addEventListener('mousedown', (e) => {
    if (cover.dataset.startPosition === '-2') return;
    console.log('mousedown');

    cover.dataset.startPosition = e.clientX;
    cover.style.transitionProperty = `none`;
});

cover.addEventListener('mousemove', (e) => {
    if (cover.dataset.startPosition === '-1' || cover.dataset.startPosition === '2') return;

    const mouseDelta = parseFloat(cover.dataset.startPosition) - e.clientX;
    const maxDelta = window.innerWidth;

    const dragPercentage = Math.min((mouseDelta/ maxDelta) * -100, 0);
    cover.style.transform = `translateX(${dragPercentage}%)`;
});

cover.addEventListener('mouseup', () => {
    if (cover.dataset.startPosition === '-1') return;

    cover.dataset.startPosition = -2;
    cover.style.transitionProperty = `transform`;
    cover.style.transform = `translateX(0%)`;
});

cover.addEventListener('transitionend', () => {
    console.log('transition end');
    cover.dataset.startPosition = -1;
});