import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = (props) => {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id)
  function handleLikeClick(){
    props.onCardLike(props.card)
  }
  function handleClick() {
    props.onCardClick(props.card);
  }
  function handleDeleteClick(){
    props.onCardDelete(props.card)
  }
  return (
    <li className="cards__item">
      <img src={props.card.link} alt={props.card.alt} className="cards__image" onClick={handleClick} />
      <button type="button" className="cards__delete-button" style={{display: isOwn ? 'block' : 'none' }} onClick={handleDeleteClick}></button>
      <div className="cards__caption">
        <p className="cards__title">{props.card.name}</p>
        <div className="cards__like">
          <button type="button" className={isLiked ? "cards__button cards__button_active":"cards__button"} onClick={handleLikeClick}></button>
          <p className="cards__counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};
export default Card;
