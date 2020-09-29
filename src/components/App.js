import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([].reverse());

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAddPlaceSubmit(obj) {
    api
      .addNewCard(obj)
      .then((data) => {
        setCards([data,...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id).catch((err) => console.log(err));
    setCards(
      cards.filter(function (item) {
        return item._id !== card._id;
      })
    );
  }

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
    setSelectedCard(null);
  }
  function handleCardClick(value) {
    setSelectedCard(value);
  }
  function handleUpdateUser(obj) {
    api
      .updateUserInfo(obj)
      .then((data) => {
        setCurrentUser({
          ...currentUser,
          name: data.name,
          about: data.about,
        });
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleUpdateAvatar(data) {
    api.updateAvatar(data).then((data) => {
      setCurrentUser({
        ...currentUser,
        avatar: data.avatar,
      });
    });
    closeAllPopups();
  }
  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPlacePopup key={Math.random()} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
        <PopupWithForm name="delete-card" title="Вы уверены?" isOpen={isDeletePlacePopupOpen} onClose={closeAllPopups} button="Удалить"></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
