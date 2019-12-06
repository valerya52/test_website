'use strict';

var backgroundPhoto = ['home-bg1.jpg', 'home-bg2.jpg', 'home-bg3.jpg'];
var counter = 0;

setInterval(function () {
    var homeBg = document.querySelector('.home');
    homeBg.style.background = 'no-repeat scroll  center center url("assets/images/' + backgroundPhoto[counter] + '")';
    homeBg.style.backgroundSize = 'cover';
    counter++;
    if (counter === backgroundPhoto.length) {
        counter = 0;
    }
}, 4000);