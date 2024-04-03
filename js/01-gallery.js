import { galleryItems } from './gallery-items.js';
// Change code below this line
// const gallery = document.querySelector('.gallery');

// galleryItems.forEach(item => {
//     const listItem = document.createElement('li');
//     listItem.classList.add('gallery__item');

//     const itemLink = document.createElement('a');
//     itemLink.classList.add('gallery__link');

//     const itemImage = document.createElement('img');
//     itemImage.classList.add('gallery__image');
//     itemImage.src = item.preview;
//     itemImage.alt = item.description;
//     itemImage.setAttribute('data-source', item.original);
    
//     itemLink.appendChild(itemImage);
//     listItem.appendChild(itemLink);
//     gallery.appendChild(listItem);
// });

// gallery.addEventListener("click", (ev) => {
//     ev.preventDefault();
//     const zoomImage = ev.target.dataset.source;
//     basicLightbox.create('<img src="${zoomImage}"/>').show();
// });

const photoGallery = document.querySelector('.gallery');

for (const item of galleryItems) {
    const photoGalleryHTML = 
    `<li class="gallery__item">
        <a href="${item.original}" class="gallery__link">
            <img src="${item.preview}" alt="${item.description}" class="gallery__image" data-source="${item.original}"/>
        </a>
    </li>
`;
    photoGallery.insertAdjacentHTML('beforeend', photoGalleryHTML);
};

photoGallery.addEventListener("click", (ev) => {
    ev.preventDefault();
    const zoomPhoto = ev.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${zoomPhoto}"/>`);
    instance.show();

    const keyPress = document.addEventListener("keydown", (ev) => {
            instance.close();
    });
});






