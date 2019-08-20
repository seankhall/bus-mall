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
    new Image('RD-D2 Travel Bags', '/img/bag.jpg');
    new Image('Banana Slicer', '/img/banana.jpg');
    new Image('Bathroom Stand', '/img/bathroom.jpg');
    new Image('Gross Boots', '/img/boots.jpg');
    new Image('Breakfast Helper', '/img/breakfast.jpg');
    new Image('Meatball Bubblegum', '/img/bubblegum.jpg');
    new Image('Torture Chair', '/img/chair.jpg');
    new Image('Cthulhu Toy', '/img/cthulhu.jpg');
    new Image('Doggy Duck', '/img/dog-duck.jpg');
    new Image('Dragon Meat', '/img/dragon.jpg');
    new Image('Utinsle Pens', '/img/pen.jpg');
    new Image('Pet Sweeper', '/img/pet-sweep.jpg');
    new Image('Pizza Scissors', '/img/scissors.jpg');
    new Image('Shark Bag', '/img/shark.jpg');
    new Image('Child Sweeper', '/img/sweep.png');
    new Image('Taun Taun Bag', '/img/tauntaun.jpg');
    new Image('Unicorn Meat', '/img/unicorn.jpg');
    new Image('Dragon USB', '/img/usb.gif');
    new Image('Infinite Water Can', '/img/water-can.jpg');
    new Image('Weird Wine Glass', '/img/wine-glass.jpg');

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