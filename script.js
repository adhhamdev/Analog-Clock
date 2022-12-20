const clockColor = !localStorage.getItem('color') ? localStorage.setItem('color', '#000000') : localStorage.getItem('color');
const clockStyle = !localStorage.getItem('style') ? localStorage.setItem('style', 'dotted') : localStorage.getItem('style');
const clock = document.querySelector('.clock');
const themeBtn = document.querySelector('.theme_btn');
const frameColor = document.getElementById('frame_color');
if(!localStorage.getItem('dark')) localStorage.setItem('dark', 'no');
if(localStorage.getItem('dark') === 'yes') {
    document.body.classList.add('dark');
    themeBtn.textContent = '🌕 Light';
} else {
    document.body.classList.remove('dark');
    themeBtn.textContent = '🌑 Dark';
}
const hourhand = document.querySelector('.hourhand');
const minhand = document.querySelector('.minhand');
const sechand = document.querySelector('.sechand');

function runClock() {
    const hourhand = document.querySelector('.hourhand');
    const minhand = document.querySelector('.minhand');
    const sechand = document.querySelector('.sechand');
    const date = new Date();
    hourhand.style.transform = `translate(50%) rotate(${date.getHours() * 60 - 45}deg)`;
    minhand.style = `transform: translate(50%) rotate(${date.getMinutes() * 6 - 90}deg)`;
    sechand.style = `transform: translate(50%) rotate(${date.getSeconds() * 6 - 90}deg);`;
    const digitalHour = document.querySelector('.digital_hour');
    const digitalMin = document.querySelector('.digital_min');
    const digitalSec = document.querySelector('.digital_sec');
    digitalHour.textContent = date.getHours();
    digitalMin.textContent = date.getMinutes();
    digitalSec.textContent = date.getSeconds();
}

setInterval(runClock, 1000);

if(clockStyle === 'none') {
    clock.style = 'border: none; box-shadow: 1px 2px 18px 1px rgba(0, 0, 0, .3)';
} else {
    clock.style.borderStyle = clockStyle;
}

clock.style.borderColor = clockColor;
frameColor.value = clockColor;
frameColor.addEventListener('change', () => {
    clock.style.borderColor = frameColor.value;
    localStorage.setItem('color', frameColor.value);
});

themeBtn.addEventListener('click', () => {
    if(localStorage.getItem('dark') === 'no') {
        themeBtn.textContent = '🌕 Light';
        document.body.classList.add('dark');
        localStorage.setItem('dark', 'yes');
    } else {
        themeBtn.textContent = '🌑 Dark';
        document.body.classList.remove('dark');
        localStorage.setItem('dark', 'no');
    }
});

const styleBtns = document.querySelectorAll('.styles button');
styleBtns.forEach(btn => {
    btn.addEventListener('click', (ev) => {
        ev.target.textContent === 'None' ? clock.style = 'border: none; box-shadow: 1px 2px 18px 1px rgba(0, 0, 0, .3);' : clock.style = `border: 22px ${ev.target.textContent.toLowerCase()} ${frameColor.value};`;
        localStorage.setItem('style', ev.target.textContent.toLowerCase());
    });
});