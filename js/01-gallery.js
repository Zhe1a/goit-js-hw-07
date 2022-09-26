import { galleryItems } from './gallery-items.js';
// Change code below this line
const div = document.querySelector(".gallery");
const img = gallery(galleryItems);

function gallery(params) {
    return params.map(({preview, description, original})=>
    `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
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
  evt.preventDefault()
const isGalleryClick = evt.target.classList.contains("gallery__image");
if(!isGalleryClick){
  return 
}

const data = evt.target.dataset.source;
const instance = basicLightbox.create(`
    <img src="${data}" width="800" height="600">
`, 
);

instance.show();

// document.addEventListener("keydown", event => {
//   if(event.code === "Escape"){
   //instance.close()
//   }
//   });
};
div.addEventListener("click",galleryClick);
div.insertAdjacentHTML("beforeend",img);


// ESCAPE