'use strict'

var ladujKonsole = document.getElementById('wyslij');
ladujKonsole.addEventListener('click', noneRefresh); 

var imie = document.getElementById('user-name');
var nazwisko = document.getElementById('user-surname');

function noneRefresh (e) {
    e.preventDefault();
    console.log(imie.value);
    console.log(nazwisko.value);
    
}

