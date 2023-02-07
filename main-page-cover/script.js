const cover = document.getElementById("cover")

cover.addEventListener('mousedown', (e) => {
    cover.dataset.startPosition = e.clientX;
    cover.style.transitionProperty = `none`;
});

cover.addEventListener('mousemove', (e) => {
    if (cover.dataset.startPosition === '-1') return;

    const mouseDelta = parseFloat(cover.dataset.startPosition) - e.clientX;
    const maxDelta = window.innerWidth;

    const dragPercentage = Math.min((mouseDelta / maxDelta) * -100, 0);
    cover.dataset.currentPercentage = parseFloat(cover.dataset.startPercentage) + dragPercentage;
    cover.style.transform = `translateX(${cover.dataset.currentPercentage}%)`;
});

cover.addEventListener('mouseup', () => {
    cover.dataset.startPosition = '-1';
    cover.style.transitionProperty = `transform`;
    cover.style.transform = `translateX(0%)`;
});

cover.addEventListener('transitioncancel', (e) => {
    cover.dataset.startPercentage = parseFloat(cover.dataset.currentPercentage) * (1 - e.elapsedTime);
    console.log(cover.dataset.startPercentage);
});

cover.addEventListener('transitionend', () => {
    cover.dataset.startPercentage = 0;
});

// cover.addEventListener('mousedown', (e) => {
//     cover.dataset.mouseDownAt = e.clientX;
//     cover.style.transitionProperty = `none`;
// });

// cover.addEventListener('mousemove', (e) => {
//     if (cover.dataset.mouseDownAt === '0') return;

//     const mouseDelta = parseFloat(cover.dataset.mouseDownAt) - e.clientX;
//     const maxDelta = window.innerWidth;

//     const percentage = Math.min((mouseDelta / maxDelta) * -100, 0);
    
//     cover.dataset.currentPercentage = percentage
//     cover.style.transform = `translateX(${(percentage)}%)`;
// });

// cover.addEventListener('mouseup', () => {
//     cover.dataset.mouseDownAt = '0';
//     cover.style.transitionProperty = `transform`;
//     if (parseFloat(cover.dataset.currentPercentage) < -70) {
//         cover.style.transform = `translateX(-100%)`;
//     } else {
//         cover.style.transform = `translateX(0%)`;
//     }
// });

// cover.addEventListener('transitionend', () => {
//     cover.dataset.currentPercentage = '0';
// });

// cover.addEventListener('transitioncancel', (e) => {
//     cover.dataset.currentPercentage *= e.elapsedTime;
// });