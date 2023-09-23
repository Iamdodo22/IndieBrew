"use strict";

const menuBtn = document.getElementById('menuBtn');
const indigoBtn = document.querySelectorAll('.btn-indigo');
const modal = document.querySelector('#modal')

const goToSignUp = ()=>{
    window.location.href = "./signUp.html"
}

const backToHome = ()=>{

    window.location.href = "./index.html"
}

indigoBtn.forEach((e)=>{
    e.addEventListener('click', goToSignUp)
});

window.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById('back-btn');
    if (el) {
      el.addEventListener('click',backToHome);
    }
});

window.addEventListener("DOMContentLoaded", () => {
    if(menuBtn){
        menuBtn.addEventListener('click', ()=>{
            modal.classList.toggle('max-sm:scale-0')
            menuBtn.style.backgroundColor='white'
    })
    }
});