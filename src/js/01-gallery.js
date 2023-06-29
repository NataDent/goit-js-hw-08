// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
console.log(SimpleLightbox);
const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
   </a>
</li>`).join('');  
}
gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));


 new SimpleLightbox('.gallery a', { captionDelay: 250 });

