import React from "react";
import PopupWithForm from "./PopupWithForm";

const DeleteCardPopup = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
    props.onDeleteCard(props.card);
  }
  return <PopupWithForm name="delete-card" title="Вы уверены?" isOpen={props.isOpen} onClose={props.onClose} button="Удалить" onSubmit={handleSubmit}></PopupWithForm>;
};
export default DeleteCardPopup;
