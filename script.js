// Smooth scrolling for navigation links
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         document.querySelector(targetId).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// });

// Fade-in effect for sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});