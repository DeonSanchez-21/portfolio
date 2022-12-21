const check = document.getElementById("check");

function uncheck() {
    check.checked = false;
}

//cursor
const cursor = document.querySelector('.cursor');
const centerCursor = document.querySelector('.center-cursor');
let hover = Array.from(document.querySelectorAll(".hover"));

document.addEventListener('mousemove', cursorMove);

function cursorMove(e) {
    let x = e.clientX;
    let y = e.clientY;

    centerCursor.style.left = x + 'px';
    centerCursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
}

hover.forEach(link => {
    link.addEventListener("mouseover", () =>{
    centerCursor.classList.add("grow")
    })
    link.addEventListener("mouseleave", () =>{
    centerCursor.classList.remove("grow")
    })
})

//timeline
const name = document.getElementById('main_name');
const stick1 = document.querySelector('.stick1');
const logo = document.querySelector('.mobileLogo');
const stick2 = document.querySelector('.stick2');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        stick1.classList.toggle("appear", !entry.isIntersecting);
        stick2.classList.toggle("appear", !entry.isIntersecting);
        logo.classList.toggle("disappear", !entry.isIntersecting);
    })
})

observer.observe(name)