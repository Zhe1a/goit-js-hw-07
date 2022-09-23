import { galleryItems } from './gallery-items.js';
// Change code below this line ${description}

const div = document.querySelector(".gallery");
const img =galleryItems
.map(({preview, description, original})=>
`<div><a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
  ).join("");

  div.insertAdjacentHTML("beforeend",img);

  new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

