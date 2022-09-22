import { galleryItems } from './gallery-items.js';
// Change code below this line
const div = document.querySelector(".gallery");
const img = galleryy(galleryItems)


function galleryy(params) {
    return params.map(({preview, description, original})=>
    `<div class="gallery__item">
    <a class="gallery__link" href="#">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  ).join(" ")};
  function galleryClick(evt){
    const isGalleryClick = evt.target.classList.contains("gallery__image");
    if(!isGalleryClick){
      return 
    }
    
    const data = evt.target.dataset.source;
    var lightbox = $('.gallery a').simpleLightbox({ 
  

     });
    }
    div.addEventListener("click",galleryClick)
  div.insertAdjacentHTML("beforeend",img)
