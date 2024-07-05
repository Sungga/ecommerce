// show login or signup
let btnToLogIn = document.querySelector('.login h2');
let logIn = document.querySelector('.login');
let signUp = document.querySelector('.signup');

btnToLogIn.addEventListener('click', function() {
    logIn.style.left = '-100%';
    signUp.style.left = '0%';
});

let btnToSignUp = document.querySelector('.signup h2');

btnToSignUp.addEventListener('click', function() {
    logIn.style.left = '0%';
    signUp.style.left = '100%';
});