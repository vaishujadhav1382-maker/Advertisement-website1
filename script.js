const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //toggle the mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
//also close the mobile menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton. click());

// ===== Features scroll animation =====
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".feature-box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% visible

    boxes.forEach(box => observer.observe(box));
});

// ===== Reviews Slider =====
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.reviews-slider');
    const slides = document.querySelectorAll('.review-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentIndex = 0;
    let slideWidth = slides[0].offsetWidth + 30; // width + margin
    let autoSlideInterval;
    
    // Create dots for slider
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }


    //feedback section//

    const dots = document.querySelectorAll('.dot');
    
    // Function to update slider position
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Function to go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex >= slides.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        updateSlider();
    }
    
    // Next button
    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetAutoSlide();
    });
    
    // Prev button
    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetAutoSlide();
    });
    
    // Auto-slide function
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 2000);
    }
    
    // Reset auto slide timer
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Initialize slider
    function initSlider() {
        // Recalculate slide width on resize
        slideWidth = slides[0].offsetWidth + 30;
        updateSlider();
    }
    
    // Handle window resize
    window.addEventListener('resize', initSlider);
    
    // Start auto sliding
    startAutoSlide();
    
    // Pause auto slide on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
    
    // Initialize slider
    initSlider();
});

// Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });


const swiper = new Swiper('.swiper', {
      slidesPerView: 6,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      speed: 500,
      breakpoints: {
        0: { slidesPerView: 3 },      // Mobile
        768: { slidesPerView: 4 },    // Tablet
        1024: { slidesPerView: 6 }    // Desktop

 
      }
    });