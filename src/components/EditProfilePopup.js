import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfilePopup = (props) => {
  const [input, setInput] = React.useState({ name: "", about: "" });
  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    if (props.isOpen) {
      setInput({
        name: currentUser.name,
        about: currentUser.about,
      });
    }
  }, [currentUser, props.isOpen]);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateUser({
      name: input.name,
      about: input.about,
    });
  };

  return (
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} button="Сохранить" onSubmit={handleSubmit}>
      <input
        value={input.name}
        type="text"
        name="name"
        className="popup__input popup__input-profile-name"
        id="popup__input-profile-name"
        required
        minLength="2"
        maxLength="40"
        pattern="^[A-Za-zА-Яа-яЁё\s -]+$"
        placeholder="Ваше имя"
        autoFocus
        onChange={handleInputChange}
      />
      <span className="popup__input_type_error" id="popup__input-profile-name-error" />
      <input
        value={input.about}
        type="text"
        name="about"
        className="popup__input popup__input-title"
        id="popup__input-title"
        required
        minLength="2"
        maxLength="200"
        placeholder="Ваш род деятельности"
        onChange={handleInputChange}
      />
      <span className="popup__input_type_error" id="popup__input-title-error" />
    </PopupWithForm>
  );
};
export default EditProfilePopup;
