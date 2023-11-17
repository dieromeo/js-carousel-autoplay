'use strict';

const imageArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']; // array con immagini
const divItems = document.querySelector('.items'); // div items
let contatoreImmagini = 0; // contatore
// let contatoreThumbnail = 0;
const start = document.getElementById('start');  // elemento prev
const end = document.getElementById('stop'); // elemento next
const divThumbnail = document.querySelector('.thumbnail'); // elemento thumbnail

for (let i = 0; i <= imageArray.length - 1; i++) {

    // div contenitore per le immagini
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('item');

    // immagini
    const image = document.createElement('img');
    image.src = `/img/${imageArray[i]}`;
    image.alt = `paesaggio${i}`;

    imageContainer.append(image);
    divItems.append(imageContainer);

    // thumbnail container
    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.classList.add('thumbnail-container');

    //thumbnail
    const thumbnailImage = document.createElement('img');
    thumbnailImage.src = `/img/${imageArray[i]}`;
    thumbnailImage.alt = `thumbnail${i}`;

    thumbnailContainer.addEventListener('click', function () {
        imageContainer.classList.add('active');
    })

    thumbnailContainer.append(thumbnailImage);
    divThumbnail.append(thumbnailContainer);

    if (i === contatoreImmagini) {  // assegno la classe active al primo elemento e thumbnail-active alla prima thumbnail
        imageContainer.classList.add('active');
        thumbnailContainer.classList.add('thumbnail-active');
    }
}

const selectAllItem = document.querySelectorAll('.item'); // simil array che contiene tutti i div con le immagini
const selectAllThumbnail = document.querySelectorAll('.thumbnail-container'); //simil array che contiene tutti i div con le thumbnail

let changeImage;

start.addEventListener('click', function () {
    changeImage = setInterval(nextImage, 1000);
})

end.addEventListener('click', function () {
    clearInterval(changeImage);
})

function nextImage() { // tolgo active e thumbnail-active la assegno al successivo
    if (contatoreImmagini < selectAllItem.length - 1) {

        selectAllItem[contatoreImmagini].classList.remove('active');
        selectAllThumbnail[contatoreImmagini].classList.remove('thumbnail-active');
        contatoreImmagini++;
        selectAllItem[contatoreImmagini].classList.add('active');
        selectAllThumbnail[contatoreImmagini].classList.add('thumbnail-active');
    }
    else {
        // resetta il contatore imagini a zero
        selectAllItem[contatoreImmagini].classList.remove('active');
        selectAllThumbnail[contatoreImmagini].classList.remove('thumbnail-active');
        contatoreImmagini = 0;
        selectAllItem[contatoreImmagini].classList.add('active');
        selectAllThumbnail[contatoreImmagini].classList.add('thumbnail-active');
    }
}
