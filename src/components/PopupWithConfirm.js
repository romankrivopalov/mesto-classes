'use strict'

import Popup from "./Popup";

export default
class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._confirmBtn = this._popup.querySelector('.popup__submit-btn');
    this._handleFormSubmit = handleFormSubmit;

  }

  setEventListeners() {
    super.setEventListeners();

    this._confirmBtn.addEventListener('click', () => {
      this._handleFormSubmit(this._cardId, this._cardElemment)
    })
  }

  open(cardId, cardElemment) {
    super.open()

    this._cardId = cardId;
    this._cardElemment = cardElemment;
  }
}
