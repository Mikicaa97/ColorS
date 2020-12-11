const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  console.log(scrollPos);

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

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
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){

        prikaziGreskuZa(username, 'Username ne moze biti prazan!');
    }
    else{
        prikaziTacnoZa(username);
    }

    if(emailValue === ''){

        prikaziGreskuZa(email, 'Email ne moze biti prazan!');
    }
    else if(!jeEmial(emailValue)){
        prikaziGreskuZa(email, 'Email nije ispravan!');
    }
    else{
        prikaziTacnoZa(email);
    }

    if(passwordValue === ''){

        prikaziGreskuZa(password, 'Password ne moze biti prazan!');
    }
    else{
        prikaziTacnoZa(password);
    }

    if(password2Value === ''){

        prikaziGreskuZa(password2, 'PasswordTwo ne moze biti prazan!');
    }
    else if(password2Value !== passwordValue){
        prikaziGreskuZa(password2, 'Password nije isti!');
    }
    else{
        prikaziTacnoZa(password2);
    }
}

function prikaziGreskuZa(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function prikaziTacnoZa(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}