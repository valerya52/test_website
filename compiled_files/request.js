'use strict';

// det data from server

var textData = new Promise(function (resolve, reject) {
    fetch('data.json').then(function (data) {
        resolve(data.text());
        reject('Upps! The article is not written yet.');
    });
});

textData.then(function (data) {
    document.querySelector('.text-article').innerHTML = data;
});

//send registration data to server

var sendRegistrationPersonalData = function sendRegistrationPersonalData(personalInformation) {
    var formData = new FormData();
    formData.append("file", personalInformation);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "index.html");
    xhr.send(formData);
};