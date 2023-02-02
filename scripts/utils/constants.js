'use strict';

export
const initialCards = [
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
];

export
const formSetting = {
      formSelector: '.popup__form',
      inputSelector: '.popup__input',
      submitButtonSelector: '.popup__save-btn',
      inactiveButtonClass: 'popup__save-btn_inactive',
      inputErrorClass: 'popup__input_type_error',
      errorClass: 'popup__input-error_active'
};

export
const cardSetting = {
      cardTemplate: '#card',
      cardSelector: '.card',
      cardImgSelector: '.card__img',
      cardTitleSelector: '.card__title',
      cardDeleteBtnSelector: '.card__delete',
      cardLikeBtnSelector: '.card__like',
      activeLikeBtnClass: 'card__like_active'
};

export
const userInfoData = {
      profileTitle: '.profile__title',
      profileSubtitle: '.profile__subtitle'
};

export
const popupSelectors = {
      profilePopup: '.popup[data-type="edit-popup"]',
      cardsPopup: '.popup[data-type="add-popup"]',
      imgPopup: '.popup[data-type="img-popup"]'
}

export
const popupList = document.querySelectorAll('.popup'),
      profileEditBtn = document.querySelector('.profile__edit-btn'),
      formEditProfile = document.forms['profile-form'],
      inputTitle = formEditProfile.querySelector('.popup__input_type_name'),
      inputSubtitle = formEditProfile.querySelector('.popup__input_type_about'),
      cardsAddBtn = document.querySelector('.profile__add-btn'),
      formAddCard = document.forms['card-form'],
      inputCardName = formAddCard.querySelector('.popup__input_type_name'),
      inputCardLink = formAddCard.querySelector('.popup__input_type_about'),
      cardsContainer = document.querySelector('.cards__list');
