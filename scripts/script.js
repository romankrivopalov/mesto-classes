'use strict';

const profileTitle = document.querySelector('.profile__title'),
      profileSubtitle = document.querySelector('.profile__subtitle'),
      editProfileBtn = document.querySelector('.profile__edit-btn'),
      profileModal = document.querySelector('.popup[data-type="edit-popup"]'),
      modalContainer = profileModal.querySelector('.popup__container'),
      profileModalClose = profileModal.querySelector('.popup__close'),
      formEditProfile = profileModal.querySelector('.popup__form'),
      inputName = formEditProfile.querySelector('.popup__item_type_name'),
      inputSignature = formEditProfile.querySelector('.popup__item_type_about'),
      addCardsBtn = document.querySelector('.profile__add-btn'),
      cardsModal = document.querySelector('.popup[data-type="add-popup"]'),
      cardModalClose = cardsModal.querySelector('.popup__close'),
      formAddCard = cardsModal.querySelector('.popup__form'),
      inputCardName = formAddCard.querySelector('.popup__item_type_name'),
      inputCardLink = formAddCard.querySelector('.popup__item_type_about'),
      cardsList = document.querySelector('.cards__list'),
      cardsTemplate = document.querySelector('#card').content,
      initialCards = [
        {
          name: 'Архыз',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
        },
        {
          name: 'Челябинская область',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
        },
        {
          name: 'Иваново',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
        },
        {
          name: 'Камчатка',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
        },
        {
          name: 'Холмогорский район',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
        },
        {
          name: 'Байкал',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
        }
      ],
      imgModal = document.querySelector('.popup[data-type="img-popup"]'),
      imgModalImage = imgModal.querySelector('.popup__img'),
      imgModalTitle = imgModal.querySelector('.popup__title'),
      imgPopupClose = imgModal.querySelector('.popup__close');

function addDefaultCards(elem) {
  for (let i = 0; i < elem.length; i++) {
    let card = elem[i];

    addCard(card);
  }
}

function addCard(item) {
  let cardName = item.name,
      cardLink = item.link,
      cardElement = cardsTemplate.querySelector('.card').cloneNode(true),
      cardImg = cardElement.querySelector('.card__img'),
      cardDelete = cardElement.querySelector('.card__delete'),
      cardLike = cardElement.querySelector('.card__like');

  cardElement.querySelector('.card__title').textContent = cardName;
  cardImg.src = cardLink;

  deleteCard(cardDelete);
  toggleLike(cardLike);
  showModalImgCard(cardImg, cardName);

  cardsList.prepend(cardElement);
}

function formSubmitAddCard(e) {
  e.preventDefault();

  let card = {
    name: inputCardName.value,
    link: inputCardLink.value
  }

  addCard(card);
  hideModalAddCard();
}

function formSubmitHandler(e) {
  e.preventDefault();

  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputSignature.value;

  hideModalProfile();
}

function showModalProfile() {
  inputName.value = profileTitle.textContent;
  inputSignature.value = profileSubtitle.textContent;

  profileModal.classList.add('popup_opened');
}

function hideModalProfile() {
  profileModal.classList.remove('popup_opened');
}

function showModalAddCard() {
  cardsModal.classList.add('popup_opened');
}

function hideModalAddCard() {
  cardsModal.classList.remove('popup_opened');
}

function deleteCard(item) {
  item.addEventListener('click', () => {
    item.parentNode.remove();
  })
}

function toggleLike(item) {
  item.addEventListener('click', () => {
    item.classList.toggle('card__like_active');
  })
}

function showModalImgCard(img, title) {
  img.addEventListener('click', () => {
    imgModal.classList.add('popup_opened');

    imgModalImage.src = img.src;
    imgModalTitle.textContent = title;
    console.log(title);
  })
}

function hiddenModalImgCard() {
  imgModal.classList.remove('popup_opened');
}

editProfileBtn.addEventListener('click', showModalProfile);
profileModalClose.addEventListener('click', hideModalProfile);
formEditProfile.addEventListener('submit', formSubmitHandler);
profileModal.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    hideModalProfile();
  }
});
addCardsBtn.addEventListener('click', showModalAddCard);
cardModalClose.addEventListener('click', hideModalAddCard);
formAddCard.addEventListener('submit', formSubmitAddCard);
cardsModal.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    hideModalAddCard();
  }
});
imgPopupClose.addEventListener('click', hiddenModalImgCard)
imgModal.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    hiddenModalImgCard();
  }
});

addDefaultCards(initialCards);
