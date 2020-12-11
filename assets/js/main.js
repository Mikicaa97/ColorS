const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click' , mobileMenu);

//Aktivni meni kad skroluje
const highlightMenu = () => {
    const elem = document.querySelector('highlight');
    const homeMenu = document.querySelector('home-page');
    const aboutMenu = document.querySelector('about-page');
    const servicesMenu = document.querySelector('services-page');
    let scrollPos = window.scrollY
    console.log(scrollPos);

    if(window.innerHeight > 960 && scrollPos < 600){ 
        homeMenu.classList.add('navbar__links');
        aboutMenu.classList.remove('navbar__links');
        return
    }
    else if(window.innerHeight > 960 && scrollPos < 1400){
        aboutMenu.classList.add('navbar__links');
        homeMenu.classList.remove('navbar__links');
        servicesMenu.classList.remove('navbar__links');
        return
    }
    else if(window.innerHeight > 960 && scrollPos < 2345){
        servicesMenu.classList.add('navbar__links');
        aboutMenu.classList.remove('navbar__links');
        return
    }

    if(elem && window.innerHeight < 960 && scrollPos < 600 || elem){
        elem.classList.remove('navbar__links');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


//popup

document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})


//forma
const form =document.getElementById('form');
const username =document.getElementById('username');
const password =document.getElementById('password');
const email =document.getElementById('email');
const password2 =document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
}