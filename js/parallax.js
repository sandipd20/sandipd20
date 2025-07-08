// Parallax scroll effect
window.addEventListener('scroll', () => {
    document.querySelectorAll('.parallax').forEach(el => {
        el.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
    });
});

// Toggle mobile nav menu
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Fullscreen image viewer with navigation
const images = [
    'assets/hero-image.jpeg',
    'assets/about-image.jpeg',
    'assets/showreel-bg.jpeg'
];

let currentIndex = 0;

function openViewer(index) {
    currentIndex = index;
    document.getElementById("viewerImage").src = images[currentIndex];
    document.getElementById("imageViewer").style.display = "flex";
}

function closeViewer() {
    document.getElementById("imageViewer").style.display = "none";
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("viewerImage").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("viewerImage").src = images[currentIndex];
}

// Keyboard support
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeViewer();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
});
