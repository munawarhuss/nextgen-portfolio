// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Trigger slightly earlier

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Typed.js Initialization
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ['Built in <span class="highlight-navy">Ladakh.</span><br>Designed for the <span class="highlight-cyan">Digital World.</span>'],
        typeSpeed: 60,
        backSpeed: 0,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        onComplete: function(self) {
            const cursor = document.querySelector('.typed-cursor');
            if (cursor) cursor.style.display = 'none';
        }
    };
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', options);
    }
});

// Trigger once on load
reveal();

// Add reveal class to sections
document.addEventListener("DOMContentLoaded", () => {
    // Add reveal to sections and main titles
    document.querySelectorAll('section').forEach(sec => sec.classList.add('reveal'));
    
    // Add reveal to cards with staggered delays
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${index * 0.15}s`;
    });
    
    document.querySelectorAll('.achievement-card').forEach((card, index) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    document.querySelectorAll('.approach-item').forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 0.15}s`;
    });

    document.querySelectorAll('.highlight-item').forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 0.15}s`;
    });
    
    document.querySelectorAll('.contact-item').forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 0.15}s`;
    });
});
