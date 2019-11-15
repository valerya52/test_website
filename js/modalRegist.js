'use strict'

let closeModal = () => {
    let modal = document.querySelector('.modal-container');
    modal.style.display = 'none';
}    
    let showModal = () => {
    let modal = document.querySelector('.modal-container');
    modal.style.display = 'block';
}
    
let regstrationBtns =  document.querySelectorAll('.registration-btn');
    regstrationBtns.forEach((btns) => {
    btns.onclick = showModal;
        
    })

document.querySelector('.modal-wrap').onclick = closeModal;
document.querySelector('.close-modal').onclick = closeModal;

document.querySelector('.modal-btn').onclick = () =>{

        document.querySelector('.error-modal').innerHTML = '';
        document.querySelector('.error-modal-password').innerHTML = '';
    
    let emailSubcribe =  document.querySelector('.modal-input').value;
    let password = document.querySelector('.modal-input-password').value;
    let passwordRepeat = document.querySelector('.modal-input-password-repeat').value;    
    let emailCorrect;
    let passwordCorrect;
    
    if(!emailSubcribe){
        document.querySelector('.error-modal').innerHTML = 'Fill email';
    } else {
        if(formVaidate(emailSubcribe)){
            emailCorrect = true;                        
        } else {
            document.querySelector('.error-modal').innerHTML = '';
            document.querySelector('.error-modal').innerHTML = 'Fill email corect';
        }
    }      
    if(!password){
        document.querySelector('.error-modal-password').innerHTML = 'Fill password';
    } else {
        if(formVaidatePass(password)){            
            passwordCorrect = true;
        } else {
            document.querySelector('.error-modal-password').innerHTML = '';
            document.querySelector('.error-modal-password').innerHTML = 'Password must be at least 6 characters';
        }
    }  
    if(passwordRepeat !== password) {
        document.querySelector('.error-modal-password-repeat').innerHTML = 'Passwords do not match';
    } else {
        document.querySelector('.error-modal-password-repeat').innerHTML = '';      
        if (passwordCorrect && emailCorrect){
            let personalInformation = {
               email : emailSubcribe,
               password : password,
            };
            console.log(personalInformation);
            closeModal();            
            sendRegistrationPersonalData(personalInformation);

        }     
    }         
}


let formVaidate = (emailValue) => {
    
    let email = emailValue.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
    if (email === null){     
        email = false;         
    } 
    if(email){
        return true;
    } else {
        return false;  
    }                
}

let formVaidatePass = (password) => {
  if (password.length < 6){
      return false;
  } else {
      return true;
  }     
}