const cover = document.getElementById("cover")

window.onmousedown = e => {
    cover.dataset.mouseDownAt = e.clientX;
    cover.style.transitionProperty = `none`;
}

window.onmousemove = e => {
    if (cover.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(cover.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth;

    const percentage = Math.min((mouseDelta / maxDelta) * -100, 0);
    
    cover.dataset.currentPercentage = percentage
    cover.style.transform = `translateX(${(percentage)}%)`;
}

window.onmouseup = () => {
    cover.dataset.mouseDownAt = "0";
    cover.style.transitionProperty = `transform`;
    if (parseFloat(cover.dataset.currentPercentage) < -50) {
        cover.style.transform = `translateX(-100%)`;
    } else {
        cover.style.transform = `translateX(0%)`;
    }
    cover.dataset.currentPercentage = "0";
}