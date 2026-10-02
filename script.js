'use strict';

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menu.focus();
  }
});

const grid = document.querySelector('.gallery-grid');
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    grid.querySelectorAll('figure').forEach(figure => {
      figure.hidden = filter !== 'all' && figure.dataset.category !== filter;
    });
    grid.classList.toggle('is-filtered', filter !== 'all');
  });
});

const viewer = document.querySelector('.lightbox');
const viewerImage = document.querySelector('#lightbox-image');
const caption = document.querySelector('#lightbox-caption');
const counter = document.querySelector('#lightbox-count');
let photos = [];
let photoIndex = 0;
let lastTrigger = null;
function showPhoto(index) {
  photoIndex = (index + photos.length) % photos.length;
  const photo = photos[photoIndex];
  const original = photo.querySelector('img');
  viewerImage.src = original.getAttribute('src');
  viewerImage.alt = original.alt;
  caption.textContent = photo.dataset.caption;
  counter.textContent = `${photoIndex + 1} / ${photos.length}`;
}
document.querySelectorAll('[data-gallery]').forEach(button => {
  button.addEventListener('click', () => {
    lastTrigger = button;
    photos = [...document.querySelectorAll(`[data-gallery="${button.dataset.gallery}"]`)]
      .filter(photo => !photo.closest('figure')?.hidden);
    showPhoto(photos.indexOf(button));
    viewer.showModal();
    document.body.classList.add('viewer-open');
  });
});
document.querySelector('#lightbox-close').addEventListener('click', () => viewer.close());
document.querySelector('#lightbox-prev').addEventListener('click', () => showPhoto(photoIndex - 1));
document.querySelector('#lightbox-next').addEventListener('click', () => showPhoto(photoIndex + 1));
viewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(photoIndex - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(photoIndex + 1); }
});
viewer.addEventListener('click', event => {
  if (event.target === viewer) {
    const rect = viewer.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) viewer.close();
  }
});
viewer.addEventListener('close', () => {
  document.body.classList.remove('viewer-open');
  lastTrigger?.focus();
});
