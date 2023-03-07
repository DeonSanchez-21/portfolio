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

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "deonsanchez6@gmail.com",
        Password : "706EFF27EBCFD328815416D07F52318008B5",
        To : 'deonsanchez6@gmail.com',
        From : document.getElementById("email").value,
        Subject : "new contact form inquery",
        Body : `Name: ${document.getElementById("first-name").value} ${document.getElementById("last-name").value}<br>
        Number: ${document.getElementById("phone-number").value}<br>
        Message: ${document.getElementById("message").value}`,
    }).then(message => alert(message)
    );
} 

//animations
const homeSection = document.querySelector('.home-section');
const sections = document.querySelectorAll(".sections");
const sliders = document.querySelectorAll(".animate");

const appearOptions = {
    
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        } else {
            entry.target.classList.add("slide");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

