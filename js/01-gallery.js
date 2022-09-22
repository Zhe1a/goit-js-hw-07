import { galleryItems } from './gallery-items.js';
// Change code below this line
const div = document.querySelector(".gallery");
const img = gallery(galleryItems)


div.insertAdjacentHTML("beforeend",img)

document.querySelector('.gallery__item').onclick = () => {

	basicLightbox.create(
  gallery
  ).show()

}
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
  ).join(" ")}