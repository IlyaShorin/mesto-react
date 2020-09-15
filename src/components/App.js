import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupFigure from "./PopupFigure";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeletePlacePopupOpen(false);
    setSelectedCard(null)
  }
  function handleCardClick(value){
    setSelectedCard(value)
  }
  return (
    <div>
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input-avatar-link" id="popup__input-avatar-link" required />
        <span className="popup__input_type_error" id="popup__input-avatar-link-error"></span>
      </PopupWithForm>
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input
          type="text"
          name="name"
          className="popup__input popup__input-profile-name"
          id="popup__input-profile-name"
          required
          minLength="2"
          maxLength="40"
          pattern="^[A-Za-zА-Яа-яЁё\s -]+$"
          autoFocus
        />
        <span className="popup__input_type_error" id="popup__input-profile-name-error"></span>
        <input type="text" name="title" className="popup__input popup__input-title" id="popup__input-title" required minLength="2" maxLength="200" />
        <span className="popup__input_type_error" id="popup__input-title-error"></span>
      </PopupWithForm>
      <PopupWithForm name="cards" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" name="name" placeholder="Название" className="popup__input popup__input-card-name" id="popup__input-card-name" required minLength="1" maxLength="30" autoFocus />
        <span className="popup__input_type_error" id="popup__input-card-name-error"></span>
        <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input-link" id="popup__input-link" required />
        <span className="popup__input_type_error" id="popup__input-link-error"></span>
      </PopupWithForm>
      <PopupWithForm name="delete-card" title="Вы уверены?" isOpen={isDeletePlacePopupOpen} onClose={closeAllPopups}></PopupWithForm>
      <PopupFigure card={selectedCard} onClose={closeAllPopups}></PopupFigure>
    </div>
  );
}

export default App;
