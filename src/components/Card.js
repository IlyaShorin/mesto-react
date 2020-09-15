import React from "react";

const Card = (props) => {
function handleClick(){
  props.onCardClick(props.card)
}
  return (
    <li className="cards__item">
      <img src={props.card.link} alt={props.card.alt} className="cards__image" onClick={handleClick}/>
      <button type="button" className="cards__delete-button"></button>
      <div className="cards__caption">
        <p className="cards__title">{props.card.name}</p>
        <div className="cards__like">
          <button type="button" className="cards__button"></button>
          <p className="cards__counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};
export default Card;
