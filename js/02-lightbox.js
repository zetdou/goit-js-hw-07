import { galleryItems } from './gallery-items.js';
// Change code below this line

const photoGallery = document.querySelector('.gallery');
galleryItems.forEach(item => {
    const photoGalleryHTML =
        `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
            </a>
        </li>`;
    photoGallery.insertAdjacentHTML('beforeend', photoGalleryHTML);
});

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});

