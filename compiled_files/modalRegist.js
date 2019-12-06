'use strict';

var closeModal = function closeModal() {
    var modal = document.querySelector('.modal-container');
    modal.style.display = 'none';
};
var showModal = function showModal() {
    var modal = document.querySelector('.modal-container');
    modal.style.display = 'block';
};

var regstrationBtns = document.querySelectorAll('.registration-btn');
regstrationBtns.forEach(function (btns) {
    btns.onclick = showModal;
});

document.querySelector('.modal-wrap').onclick = closeModal;
document.querySelector('.close-modal').onclick = closeModal;

document.querySelector('.modal-btn').onclick = function () {

    document.querySelector('.error-modal').innerHTML = '';
    document.querySelector('.error-modal-password').innerHTML = '';

    var emailSubcribe = document.querySelector('.modal-input').value;
    var password = document.querySelector('.modal-input-password').value;
    var passwordRepeat = document.querySelector('.modal-input-password-repeat').value;
    var emailCorrect = void 0;
    var passwordCorrect = void 0;

    if (!emailSubcribe) {
        document.querySelector('.error-modal').innerHTML = 'Fill email';
    } else {
        if (formVaidate(emailSubcribe)) {
            emailCorrect = true;
        } else {
            document.querySelector('.error-modal').innerHTML = '';
            document.querySelector('.error-modal').innerHTML = 'Fill email corect';
        }
    }
    if (!password) {
        document.querySelector('.error-modal-password').innerHTML = 'Fill password';
    } else {
        if (formVaidatePass(password)) {
            passwordCorrect = true;
        } else {
            document.querySelector('.error-modal-password').innerHTML = '';
            document.querySelector('.error-modal-password').innerHTML = 'Password must be at least 6 characters';
        }
    }
    if (passwordRepeat !== password) {
        document.querySelector('.error-modal-password-repeat').innerHTML = 'Passwords do not match';
    } else {
        document.querySelector('.error-modal-password-repeat').innerHTML = '';
        if (passwordCorrect && emailCorrect) {
            var personalInformation = {
                email: emailSubcribe,
                password: password
            };
            console.log(personalInformation);
            closeModal();
            sendRegistrationPersonalData(personalInformation);
        }
    }
};

var formVaidate = function formVaidate(emailValue) {

    var email = emailValue.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
    if (email === null) {
        email = false;
    }
    if (email) {
        return true;
    } else {
        return false;
    }
};

var formVaidatePass = function formVaidatePass(password) {
    if (password.length < 6) {
        return false;
    } else {
        return true;
    }
};