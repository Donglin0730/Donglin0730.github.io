particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#05c2c9"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#05c2c9",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// 轮播
document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carouselContainer => {
        const carousel = carouselContainer.querySelector('.carousel');
        const carouselItems = carousel.querySelectorAll('.carousel-item');
        const carouselDots = carouselContainer.querySelectorAll('.carousel-dot');
        const prevBtn = carouselContainer.querySelector('.carousel-arrow.prev');
        const nextBtn = carouselContainer.querySelector('.carousel-arrow.next');
        let currentIndex = 0;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

            carouselDots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function goToSlide(index) {
            if (index < 0) {
                currentIndex = carouselItems.length - 1;
            } else if (index >= carouselItems.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            updateCarousel();
        }

        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });

        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });

        carouselDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
        });

        // 自动轮播/3秒
        setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 3000);
    });
});



// Fade-in animation
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    observer.observe(element);
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});

//新闻具体事宜
const newsData = [
    {
        id: 1,
        title: "团队成员论文accept",
        date: "2025年4月4日",
        content: "沈佳颖一作，朱东林和周昌军老师均为通信作者",
        journal: "Cluster Computing",
        image: "/img/news/4_4.jpg"
    },
    {
        id: 2,
        title: "团队成员论文accept",
        date: "2025年3月13日",
        content: "朱东林一作，沈佳颖，胡佳铃，欧阳兆隆分别为二三四作，周昌军老师为通信作者",
        journal: "IEEE TETCI",
        image: "/img/news/3_13.jpg"
    },
    {
        id: 3,
        title: "多名团队成员在浙江省大学生数学竞赛获奖",
        date: "2024年12月11日",
        content: "王乐怡、于筱艺获得浙江省大学生数学竞赛二等奖，沈佳颖获得浙江省大学生数学竞赛三等奖",
        journal: "浙江省大学生数学竞赛",
        image: "/img/news/math.jpg"
    }
];

function navigateToDetail(newsId) {
    localStorage.setItem('currentNewsId', newsId);
    localStorage.setItem('scrollPosition', window.scrollY);
    window.location.href = 'temp.html';
}

window.onload = function() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        setTimeout(() => {
            window.scrollTo(0, parseInt(scrollPosition));
            localStorage.removeItem('scrollPosition');
        }, 100);
    }
};
