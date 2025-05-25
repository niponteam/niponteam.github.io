const floating_text = document.getElementById('floating_text');
const year_flying = document.getElementById('year_flying');

let current_year = 100;
let position = 0;
const amplitude = 10;
const speed = 0.05;

function animateFloat() {
    position += speed;
    const yOffset = Math.sin(position) * amplitude;
    floating_text.style.transform = `translateY(${yOffset}px)`;
    requestAnimationFrame(animateFloat);
}

function year_move() {
    current_year--;
    current_year--;
    current_year--;
    year_flying.style.position = 'absolute';
    year_flying.textContent = "bye";
    year_flying.style.top = current_year + '%';
    if (year_flying.style.top === '100%') {
        year_flying.remove();
    }
    requestAnimationFrame(year_move);
}

year_flying.addEventListener("mouseenter", year_move);
animateFloat();

