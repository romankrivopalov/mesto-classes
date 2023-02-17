'use strict';

export default
class Card {
  constructor(cardElement, cardSetting, handleCardClick, handleConfirmClick) {
    this._cardSetting = cardSetting;
    this._name = cardElement.name;
    this._link = cardElement.link;
    this._likeCounter = cardElement.likes.length;

    this._handleCardClick = handleCardClick;
    this._handleConfirmClick = handleConfirmClick;
  }

  deleteCard = () => {
    this._card.remove();
    this._cardImg = null;
    this._card = null;
  }

  _askUser = (card) => {
    console.log(card)
    this._handleConfirmClick(card);
  }

  _toggleCardLike = () => {
    this._cardLikeBtn.classList.toggle(this._cardSetting.activeLikeBtnClass);
  }

  _setEventListeners = () => {
    const cardDeleteBtn = this._card.querySelector(this._cardSetting.cardDeleteBtnSelector);

    this._cardLikeBtn = this._card.querySelector(this._cardSetting.cardLikeBtnSelector);

    cardDeleteBtn.addEventListener('click', () => {
      this._askUser()
    })

    this._cardLikeBtn.addEventListener('click', () => {
      this._toggleCardLike()
    })

    this._cardImg.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    })
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._cardSetting.cardTemplate)
      .content
      .querySelector(this._cardSetting.cardSelector)
      .cloneNode(true);

    return cardElement;
  }

  generateCard = () => {
    this._card = this._getTemplate();
    this._cardImg = this._card.querySelector(this._cardSetting.cardImgSelector);

    this._cardImg.src = this._link;
    this._cardImg.alt = ` ${this._link}.`;
    this._card.querySelector(this._cardSetting.cardTitleSelector).textContent = this._name;

    this._cardLikeCounter = this._card.querySelector(this._cardSetting.cardLikeCounter);
    this._cardLikeCounter.textContent = this._likeCounter;

    this._setEventListeners();

    return this._card;
  }
}
