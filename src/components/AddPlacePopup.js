import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
  const [input, setInput] = React.useState({ name: "", link: "" });

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: input.name,
      link: input.link,
    });
  }
  return (
    <PopupWithForm name="cards" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} button="Добавить">
      <input
        onChange={handleInputChange}
        type="text"
        name="name"
        placeholder="Название"
        className="popup__input popup__input-card-name"
        id="popup__input-card-name"
        required
        minLength="1"
        maxLength="30"
        autoFocus
      />
      <span className="popup__input_type_error" id="popup__input-card-name-error" />
      <input onChange={handleInputChange} type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input-link" id="popup__input-link" required />
      <span className="popup__input_type_error" id="popup__input-link-error" />
    </PopupWithForm>
  );
};
export default AddPlacePopup;
