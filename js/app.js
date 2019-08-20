'use strict';

var container = document.getElementById('product-container');
var thisSet = {};
var previousSet = {};
var allImages = [];

//Items from yesterday - Start
var section = document.getElementsByTagName('section')[0];
var figure = document.createElement('figure');
var imageElement = document.createElement('img');
var imageCaption = document.createElement('figcaption');
section.appendChild(figure);
figure.appendChild(imageElement);
figure.appendChild(imageCaption);
//Items from yesterday - End

//Items from yesterday - Start
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
//Items from yesterday - End

function randomizeCatalogEntry() {
    for (var i = 0; i < allCatalogEntrysArray.length; i++) {
        var randomCatalogEntry = Math.floor(Math.random() * allCatalogEntrysArray.length);
        CatalogEntryElement.src = allCatalogEntrysArray[randomCatalogEntry].src;
        CatalogEntryCaption.textContent = allCatalogEntrysArray[randomCatalogEntry].name;
    }
}

function CatalogEntry(name, url) {
    this.id = Math.random();
    this.name = name;
    this.src = url;
    this.numClicks = 0;
    this.numViews = 0;
    allImages.push(this);
}

//Items from yesterday - Start
Image.list = [];
//Items from yesterday - End

CatalogEntry.prototype.updateViews = function() {
    this.numViews++;
}

CatalogEntry.prototype.updateClicks = function() {
    this.numClicks++;
}

function loadCatalogEntrys() {
    new CatalogEntry('RD-D2 Travel Bags', '/img/bag.jpg');
    new CatalogEntry('Banana Slicer', '/img/banana.jpg');
    new CatalogEntry('Bathroom Stand', '/img/bathroom.jpg');
    new CatalogEntry('Gross Boots', '/img/boots.jpg');
    new CatalogEntry('Breakfast Helper', '/img/breakfast.jpg');
    new CatalogEntry('Meatball Bubblegum', '/img/bubblegum.jpg');
    new CatalogEntry('Torture Chair', '/img/chair.jpg');
    new CatalogEntry('Cthulhu Toy', '/img/cthulhu.jpg');
    new CatalogEntry('Doggy Duck', '/img/dog-duck.jpg');
    new CatalogEntry('Dragon Meat', '/img/dragon.jpg');
    new CatalogEntry('Utinsle Pens', '/img/pen.jpg');
    new CatalogEntry('Pet Sweeper', '/img/pet-sweep.jpg');
    new CatalogEntry('Pizza Scissors', '/img/scissors.jpg');
    new CatalogEntry('Shark Bag', '/img/shark.jpg');
    new CatalogEntry('Little Human Sweeper', '/img/sweep.png');
    new CatalogEntry('Taun Taun Bag', '/img/tauntaun.jpg');
    new CatalogEntry('Unicorn Meat', '/img/unicorn.jpg');
    new CatalogEntry('Dragon USB', '/img/usb.gif');
    new CatalogEntry('Infinite Water Can', '/img/water-can.jpg');
    new CatalogEntry('Weird Wine Glass', '/img/wine-glass.jpg');
}

function setUpImageContainers(numImages) {
    for(var i = 1; i <= numImages; i++) {
        var img = document.createElement('img');
        img.id = `image-${i}`;
        img.src = 'http://placehold.it/200x200';
        container.appendChild(img);
    }
    //Items from yesterday - Start
    for (var i = 0; i < imagesToBeLoaded.length; i++) {
        new Image(`image-${i}`, imagesToBeLoaded[i]);
    }
    //Items from yesterday - End
}

function setUpListener() {
    container.addEventListener('click', clickHandler);
}

function clickHandler(e) {
    var imageName = e.target.alt;
    for(var i = 0; i < allImages.length; i++) {
        if (allImages[i].name === imageName) {
            allImages[i].updateClicks();
        }
    }
    showRandomImages(3);
}

function showRandomImages(numImages) {
    thisSet = {};
    for(var i = 1; i <= numImages; i++) {
        var id = `image-${i}`;
        var img = document.getElementById(id);
        var imageObject = getRandomUniqueImage();
        img.src = imageObject.src;
        img.alt = imageObject.name;
    }
    previousSet = thisSet;
    console.log(allImages);
}

function getRandomUniqueImage() {
    var found = false;
    while (!found) {
        var n = Math.floor(Math.random() * allImages.length);
        if (!thisSet[n] && !previousSet[n]) {
            found = allImages[n];
            allImages[n].updateViews();
            thisSet[n] = true;
        }
    }
    return found;
}

loadCatalogEntrys();
setUpImageContainers(3);
setUpListener();
showRandomImages(3);

//Items from yesterday - Start
// loadImages();
// showRandomImage();
//Items from yesterday - End

// var section = document.getElementsByTagName('section')[0];
// var figure = document.createElement('figure');
// var imageElement = document.createElement('img');
// var imageCaption = document.createElement('figcaption');
// section.appendChild(figure);
// figure.appendChild(imageElement);
// figure.appendChild(imageCaption);

// var imagesToBeLoaded = [
//     '/img/bag.jpg',
//     '/img/banana.jpg',
//     '/img/bathroom.jpg',
//     '/img/boots.jpg',
//     '/img/breakfast.jpg',
//     '/img/bubblegum.jpg',
//     '/img/chair.jpg',
//     '/img/cthulhu.jpg',
//     '/img/dog-duck.jpg',
//     '/img/dragon.jpg',
//     '/img/pen.jpg',
//     '/img/pet-sweep.jpg',
//     '/img/scissors.jpg',
//     '/img/shark.jpg',
//     '/img/sweep.png',
//     '/img/tauntaun.jpg',
//     '/img/unicorn.jpg',
//     '/img/usb.gif',
//     '/img/water-can.jpg',
//     '/img/wine-glass.jpg'
// ];

// function Image(name, url) {
//     this.name = name;
//     this.src = url;
//     Image.list.push(this);
// }

// Image.list = [];

// function loadImageFromArray() {
//     for (var i = 0; i < imagesToBeLoaded.length; i++) {
//         new Image(`Image-${i}`, imagesToBeLoaded[i]);
//     }
// }

// function loadImages() {
//     new Image('RD-D2 Travel Bags', '/img/bag.jpg');
//     new Image('Banana Slicer', '/img/banana.jpg');
//     new Image('Bathroom Stand', '/img/bathroom.jpg');
//     new Image('Gross Boots', '/img/boots.jpg');
//     new Image('Breakfast Helper', '/img/breakfast.jpg');
//     new Image('Meatball Bubblegum', '/img/bubblegum.jpg');
//     new Image('Torture Chair', '/img/chair.jpg');
//     new Image('Cthulhu Toy', '/img/cthulhu.jpg');
//     new Image('Doggy Duck', '/img/dog-duck.jpg');
//     new Image('Dragon Meat', '/img/dragon.jpg');
//     new Image('Utinsle Pens', '/img/pen.jpg');
//     new Image('Pet Sweeper', '/img/pet-sweep.jpg');
//     new Image('Pizza Scissors', '/img/scissors.jpg');
//     new Image('Shark Bag', '/img/shark.jpg');
//     new Image('Child Sweeper', '/img/sweep.png');
//     new Image('Taun Taun Bag', '/img/tauntaun.jpg');
//     new Image('Unicorn Meat', '/img/unicorn.jpg');
//     new Image('Dragon USB', '/img/usb.gif');
//     new Image('Infinite Water Can', '/img/water-can.jpg');
//     new Image('Weird Wine Glass', '/img/wine-glass.jpg');

//     console.log(Image.list);
// }

// function showRandomImage() {
//     var randomNumber = Math.floor(Math.random() * Image.list.length);

//     imageElement.src = Image.list[randomNumber].src;
//     imageCaption.textContent = Image.list[randomNumber].name;
// }

// imageElement.addEventListener('click', showRandomImage);

// loadImages();

// showRandomImage();