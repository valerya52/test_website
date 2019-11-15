'use strict'

// det data from server

let textData = new Promise( (resolve, reject) => {
    fetch('data.json')
        .then(data => {        
        resolve(data.text());
        reject('Upps! The article is not written yet.');
    })
});

textData.then(data => {
    document.querySelector('.text-article').innerHTML = data;    
})



//send registration data to server

let sendRegistrationPersonalData =  personalInformation =>{
    let formData = new FormData();    
    formData.append("file", personalInformation);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "index.html");
    xhr.send(formData);     
}