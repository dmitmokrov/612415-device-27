var contactButton = document.querySelector('.js-contact');
var modalContact = document.querySelector('.modal-contact');
var modalClose = document.querySelectorAll('.modal-close');
var modals = document.querySelectorAll('.modal');
var form = modalContact.querySelector('form');
var contactName = modalContact.querySelector('#contact-name');
var contactEmail = modalContact.querySelector('#contact-email');
var contactText = modalContact.querySelector('#contact-letter');
var contactsMap = document.querySelector('.contacts-map');
var modalMap = document.querySelector('.modal-map');
var slides = document.querySelectorAll('.best-offer');
var slidesControls = document.querySelectorAll('.slider-button');
var services = document.querySelectorAll('.services-item');
var servicesControls = document.querySelectorAll('.services-control button');
var isStorageSupport = true;
var name = '';
var email = '';

// Слайдер с лучшими предложениями

for (let i = 0; i < slides.length; i++) {
  slidesControls[i].addEventListener('click', function () {
    slides.forEach(slide => slide.classList.remove('active'));
    slidesControls.forEach(control => control.classList.remove('active'));
    slides[i].classList.add('active');
    this.classList.add('active');
  });
}

// Слайдер "Сервисы"

for (let i = 0; i < services.length; i++) {
    servicesControls[i].addEventListener('click', function () {
    services.forEach(service => service.classList.remove('active'));
    servicesControls.forEach(control => control.classList.remove('active'));
    services[i].classList.add('active');
    this.classList.add('active');
  });
}


try {
  name = localStorage.getItem('name');
  email = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

// Открытие модального окна "Напишите нам"
contactButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalContact.classList.add('modal-show');
  if (name && email) {
    contactName.value = name;
    contactEmail.value = email;
    contactText.focus();
  } else {
    contactName.focus();
  }
});

//  Закрытие модального окна по крестику
modalClose.forEach(elem => elem.addEventListener('click', function () {
  this.parentNode.classList.remove('modal-show');
}));

//  Закрытие модального окна по клавише Escape
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modals.forEach(elem => {
      if (elem.classList.contains('modal-show')) {
        evt.preventDefault();
        elem.classList.remove('modal-show');
      }})
  }
});

// Отправка формы

form.addEventListener('submit', function (evt) {
  if (!contactName.value || !contactEmail.value || !contactText.textContent) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', contactName.value);
      localStorage.setItem('email', contactEmail.value);
    }
  }
});

// Открытие модального окна "Мы на карте"

contactsMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

