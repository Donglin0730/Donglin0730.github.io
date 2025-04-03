document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.category-link');
    const sections = document.querySelectorAll('.category-title');

    function setActiveNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        categoryLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);

    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });

                targetElement.classList.add('highlight');

                setTimeout(() => {
                    targetElement.classList.remove('highlight');
                }, 2000);
            }, 300);
        }
    }
});