'use strict';

var section = document.getElementsByTagName('section')[0];
var figure = document.createElement('figure');
var imageElement = document.createElement('img');
var imageCaption = document.createElement('figcaption');
section.appendChild(figure);
figure.appendChild(imageElement);
figure.appendChild(imageCaption);

var imagesToBeLoaded = [
    '/img/bag.jpg',
    '/img/banana.jpg',
    '/img/bathroom.jpg',
    '/img/boots.jpg',
    '/img/breakfast.jpg',
    '/img/bubblegum.jpg',
    '/img/chair.jpg',
    '/img/cthulhu.jpg',
    '/img/dog-duck.jpg',
    '/img/dragon.jpg',
    '/img/pen.jpg',
    '/img/pet-sweep.jpg',
    '/img/scissors.jpg',
    '/img/shark.jpg',
    '/img/sweep.png',
    '/img/tauntaun.jpg',
    '/img/unicorn.jpg',
    '/img/usb.gif',
    '/img/water-can.jpg',
    '/img/wine-glass.jpg'
];

function Image(name, url) {
    this.name = name;
    this.src = url;
    Image.list.push(this);
}
Image.list = [];

function loadImageFromArray() {
    for (var i = 0; i < imagesToBeLoaded.length; i++) {
        new Image(`Image-${i}`, imagesToBeLoaded[i]);
    }
}

function loadImages() {
    new Image('RD-D2', '/img/bag.jpg');
    new Image('RD-D2', '/img/banana.jpg');
    new Image('RD-D2', '/img/bathroom.jpg');
    new Image('RD-D2', '/img/boots.jpg');
    new Image('RD-D2', '/img/breakfast.jpg');
    new Image('RD-D2', '/img/bubblegum.jpg');
    new Image('RD-D2', '/img/chair.jpg');
    new Image('RD-D2', '/img/cthulhu.jpg');
    new Image('RD-D2', '/img/dog-duck.jpg');
    new Image('RD-D2', '/img/dragon.jpg');
    new Image('RD-D2', '/img/pen.jpg');
    new Image('RD-D2', '/img/pet-sweep.jpg');
    new Image('RD-D2', '/img/scissors.jpg');
    new Image('RD-D2', '/img/shark.jpg');
    new Image('RD-D2', '/img/sweep.png');
    new Image('RD-D2', '/img/tauntaun.jpg');
    new Image('RD-D2', '/img/unicorn.jpg');
    new Image('RD-D2', '/img/usb.gif');
    new Image('RD-D2', '/img/water-can.jpg');
    new Image('RD-D2', '/img/wine-glass.jpg');

    console.log(Image.list);
}

function showRandomImage() {
    var randomNumber = Math.floor(Math.random() * Image.list.length);

    imageElement.src = Image.list[randomNumber].src;
    imageCaption.textContent = Image.list[randomNumber].name;
}

imageElement.addEventListener('click', showRandomImage);

loadImages();

showRandomImage();