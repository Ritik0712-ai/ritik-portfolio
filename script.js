// Dark/Light Mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// GSAP Animations
gsap.from(".hero h2", { opacity: 0, y: -50, duration: 1 });
