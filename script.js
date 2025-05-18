function scrollCarousel(direction) {
  const container = document.getElementById('carousel');
  const scrollAmount = 320; // ancho + margen
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function openPopup(src) {
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  popupImg.src = src;
  popup.style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function scrollCarousel(id, direction) {
  const container = document.getElementById(id);
  const scrollAmount = 320; // ajustá según el ancho de tus imágenes
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

function openPopup(src) {
  const popup = document.getElementById('popup-container');
  const popupImage = document.getElementById('popup-image');
  popupImage.src = src;
  popup.classList.add('popup-visible');
}

function closePopup() {
  const popup = document.getElementById('popup-container');
  popup.classList.remove('popup-visible');
}
