const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector("#btnlogin-popup");
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})

// ===================================================================
function validation() {
    let username = document.forms["form"]['Username'];
    let passwordInput = document.forms["form"]["password"];
    let password = passwordInput.value;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (username.value == "") {
        alert("please enter your username!")
    }
    if (regex.test(password)) {
        alert("valid password")
    }
    else {
        alert("Password is invalid! Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.")
    }
}
function mouseOver() {
    let login = document.getElementById("btn-2");
    login.innerHTML = "click me!"
}
function mouseOut() {
    let click = document.getElementById("btn-2")
    click.innerHTML = "log in"
}