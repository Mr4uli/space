
document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('video');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
                entry.target.style.filter = 'blur(0)';
            } else {
                entry.target.pause();
                entry.target.style.filter = 'blur(10px)';
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, options);

    videos.forEach(video => {
        observer.observe(video);
    });
});


document.addEventListener("mousemove", parallax);
function parallax(event) {
    this.querySelectorAll(".overlay-text, img").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

