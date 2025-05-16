document.addEventListener("DOMContentLoaded", () => {
    let current = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    }

    function next() {
        current = (current + 1) % testimonials.length;
        showTestimonial(current);
    }

    function prev() {
        current = (current - 1 + testimonials.length) % testimonials.length;
        showTestimonial(current);
    }

    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);
    dots.forEach((dot, i) => dot.addEventListener("click", () => {
        current = i;
        showTestimonial(i);
    }));

    // Autoplay (opcional)
    setInterval(next, 7000);
});