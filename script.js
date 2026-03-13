// Эффект появления элементов при прокрутке (scroll reveal)
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Дополнительная интерактивность: параллакс для фона (по желанию)
window.addEventListener('mousemove', (e) => {
    const noise = document.querySelector('.noise');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    noise.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});