import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
        <a class="gallery__item" href="${image.largeImageURL}">
          <div class="photo-card">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            <div class="info">
              
  <div class="info-labels">
    <p><b>Comments</b></p>
    <p><b>Likes</b></p>
    <p><b>Views</b></p>
    <p><b>Downloads</b></p>
  </div>
  <div class="info-values">
    <p>${image.comments}</p>
    <p>${image.likes}</p>
    <p>${image.views}</p>
    <p>${image.downloads}</p>
  </div>
</div>
            </div>
          
        </a>
      `;
    })
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}

export function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}
