'use strict';

var container = document.getElementById('product-container');
var allImages = [];
var thisSet = {};
var previousSet = {};
var picked = 0;

function CatalogEntry(name, url) {
    this.id = Math.random();
    this.name = name;
    this.src = url;
    this.numClicks = 0;
    this.numViews = 0;
    allImages.push(this);
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

CatalogEntry.prototype.updateViews = function() {
    this.numViews++;
}

CatalogEntry.prototype.updateClicks = function() {
    this.numClicks++;
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
    for(var i = 0; i < allImages.length; i++) {{
        if (allImages[i].name === imageName) {
            allImages[i].updateClicks();
            picked++;
        }
    }
    
    if(picked === 25) {
        showResults();
    }
    
    previousSet = this.Set;
    thisSet = {};
    setUpImageContainers();
}
showRandomImages(3);
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

function generateChart() {
var ctx = document.getElementById('productChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nameArrayChart(),
        datasets: [{
            label: 'Product Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

function readData() {
    var votes = JSON.parse(localStorage.getItem('votes'));
    var views = JSON.parse(localStorage.getItem('views'));

    for(var i = 0; i < allTheData.length; i++) {
        allTheData[i].votes = votes[i];
        allTheData[i].views = views[i];
    }
}

function savedData() {
    var votes = [];
    var views = [];
    for(var i = 0; i < allTheData.length; i++) {
        votes.push(allTheDta[i].votes);
        views.push(allTheData[i].views);
    }

    localStorage.setItem('votes', JSON.stringify(votes));
    localStorage.setItem('views', JSON.stringify(views));
}

readData();
savedData();










loadCatalogEntrys();
setUpImageContainers(3);
setUpListener();
showRandomImages(3);
generateChart();







function randomizeCatalogEntry() {
    for (var i = 0; i < allCatalogEntrysArray.length; i++) {
        var randomCatalogEntry = Math.floor(Math.random() * allCatalogEntrysArray.length);
        CatalogEntryElement.src = allCatalogEntrysArray[randomCatalogEntry].src;
        CatalogEntryCaption.textContent = allCatalogEntrysArray[randomCatalogEntry].name;
    }
}
//Items from yesterday - Start
var section = document.getElementsByTagName('section')[0];
var figure = document.createElement('figure');
var imageElement = document.createElement('img');
var imageCaption = document.createElement('figcaption');
section.appendChild(figure);
figure.appendChild(imageElement);
figure.appendChild(imageCaption);
//Items from yesterday - End

function nameArrayChart() {
    var nameChart = [];
    for(var i = 0; i < allImages.length; i++) {
        nameChart.push(allImages[i].name);
    }
    return nameChart;
}


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



//Items from yesterday - Start
Image.list = [];
//Items from yesterday - End






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



//Items from yesterday - Start
loadImages();
showRandomImage();
//Items from yesterday - End
