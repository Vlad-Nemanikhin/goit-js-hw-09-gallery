import './sass/main.scss';
import beach340 from './images/beach-4206785__340.jpg';
import beach1280 from './images/beach-4206785_1280.jpg';
import cont340 from './images/container-4203677__340.jpg';
import cont1280 from './images/container-4203677_1280.jpg';
import flow340 from './images/flowers-1835619__340.jpg';
import flow1280 from './images/flowers-1835619_1280.jpg';
import himal340 from './images/himilayan-blue-poppy-4202825__340.jpg';
import himal1280 from './images/himilayan-blue-poppy-4202825_1280.jpg';
import alps340 from './images/the-alps-4209272__340.jpg';
import alps1280 from './images/the-alps-4209272_1280.jpg';
import landscape340 from './images/landscape-4208255__340.jpg';
import landscape1280 from './images/landscape-4208255_1280.jpg';
import lake340 from './images/landscape-4208571__340.jpg';
import lake1280 from './images/landscape-4208571_1280.jpg';
import lighthouse340 from './images/lighthouse-4208843__340.jpg';
import light from './images/lighthouse-4208843_1280.jpg';
import mountains340 from './images/mountains-3674334__340.jpg';
import mountains1280 from './images/mountains-3674334_1280.jpg';


const galleryItems = [
  {
    preview: himal340,
    original: himal1280,
    description: "Hokkaido Flower",
  },
  {
    preview: cont340,
    original: cont1280,
    description: "Container Haulage Freight",
  },
  {
    preview: beach340,
    original: beach1280,
    description: "Aerial Beach View",
  },
  {
    preview: flow340,
    original: flow1280,
    description: "Flower Blooms",
  },
  {
    preview: mountains340,
    original: mountains1280,
    description: "Alpine Mountains",
  },
  {
    preview: lake340,
    original: lake1280,
    description: "Mountain Lake Sailing",
  },
  {
    preview: alps340,
    original: alps1280,
    description: "Alpine Spring Meadows",
  },
  {
    preview: landscape340,
    original: landscape1280,
    description: "Nature Landscape",
  },
  {
    preview: lighthouse340,
    original: light,
    description: "Lighthouse Coast Sea",
  },
];

const refs = {
  lightboxImageEl: document.querySelector('.lightbox__image'),
  closeLightboxEl: document.querySelector('.lightbox__button'),
  backdropEl: document.querySelector('.js-lightbox'),
  gallery: document.querySelector('.js-gallery'),
  lightboxOverlayEl: document.querySelector('.lightbox__overlay')
}


refs.gallery.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

function createGalleryItems(array) {
	const galleryMarkup = galleryItems.map(({ original, preview, description }) => {
		return `<li class="gallery__item">
			<a class="gallery__link" href="${original}">
				<img class="gallery__image" src="${preview}" data-source="${original}" 
				alt="${description}"/>
			</a>
		</li>`
	}
	).join('');
	return galleryMarkup;
	
}

refs.gallery.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(e) {
  e.preventDefault();
  
  if (!e.target.classList.contains('gallery__image')) {
    return
  } 
  refs.backdropEl.classList.add('is-open');
  addImageAttribute( e.target.alt, e.target.closest('.gallery__link').href );
  window.addEventListener('keydown', onEskKeyPress);
}

function addImageAttribute(alt, src) {
  refs.lightboxImageEl.src = '';
  if (refs.backdropEl.classList.contains('is-open')) {
    refs.lightboxImageEl.src = src;
    refs.lightboxImageEl.alt = alt;
  } 
  
}

refs.closeLightboxEl.addEventListener('click', onCloseElClick);

function onCloseElClick(e) {
  window.removeEventListener('keydown', onEskKeyPress);
  if (refs.backdropEl.classList.contains('is-open')){
    refs.backdropEl.classList.remove('is-open')
  }
}

refs.lightboxOverlayEl.addEventListener('click', onCloseElClick);

function onEskKeyPress(e) {
  if (e.code === 'Escape') { onCloseElClick() };
}