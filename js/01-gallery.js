import { galleryItems } from './gallery-items.js';
// Change code below this line
const div = document.querySelector(".gallery");
const img = gallery(galleryItems)
div.addEventListener("click",galleryClick)


function gallery(params) {
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

let rev = 0


function galleryClick(evt){

const isGalleryClick = evt.target.classList.contains("gallery__image");
if(!isGalleryClick){
  return
}
const data = evt.target.dataset.source;
console.log(data);
const instance = basicLightbox.create(

  `
    <img src="${data}" width="800" height="600">
`)
instance.show()
}


div.insertAdjacentHTML("beforeend",img)