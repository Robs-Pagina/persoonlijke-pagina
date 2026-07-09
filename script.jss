// Smooth scroll highlight effect
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Extra stijl voor actieve link
const style = document.createElement("style");
style.innerHTML = `
    nav a.active {
        color: var(--accent);
    }
`;
document.head.appendChild(style);
