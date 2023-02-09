const root = document.getElementById("root");
const cover = document.getElementById("cover");
const dragbar = document.getElementById("cover-dragbar");

const resetPosition = (e) => {
    if (cover.dataset.active !== '1') return;

    const translatePercent = parseFloat(cover.style.transform.slice(11, -2));
    if (translatePercent < 0) {
        cover.dataset.active = 0;
    }
    cover.dataset.startPosition = -1;
    cover.style.transitionProperty = `transform`;
    if (translatePercent < -50) {
        cover.style.transitionDuration = `${(100 + translatePercent) / 100 + .5}s`;
        cover.style.transform = `translate(-100%)`;
        cover.dataset.active = 2;
    }
    else {
        cover.style.transitionDuration = `${translatePercent / -100 + .5}s`;
        cover.style.transform = `translateX(0%)`;
    }
};

dragbar.addEventListener('mousedown', (e) => {
    if (cover.dataset.active !== '1') return;

    cover.dataset.startPosition = e.clientX;
    cover.style.transitionProperty = `none`;
});

root.addEventListener('mousemove', (e) => {
    if (cover.dataset.active !== '1' || cover.dataset.startPosition === '-1') return;

    const mouseDelta = parseFloat(cover.dataset.startPosition) - e.clientX;
    const maxDelta = window.innerWidth;

    cover.dataset.dragPercentage = Math.min((mouseDelta/ maxDelta) * -100, 0);

    cover.style.transform = `translateX(${cover.dataset.dragPercentage}%)`;
});

dragbar.addEventListener('mouseup', resetPosition);

cover.addEventListener('transitionend', (e) => {
    if (cover.dataset.active === '2') return;

    if (e.propertyName === 'transform') {
        setTimeout(() => {
            cover.dataset.active = 1;
        }, 100);
    }
});

root.addEventListener('mouseleave', resetPosition);