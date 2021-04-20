import React from "react";
import './styles/index.css';

function RecordCard({ date, adress, avatar, name, spec }) {
  return (
    <div className="RecordCard">
      <h3 className="RecordCard__date">
        {date}
      </h3>
      <p className="RecordCard__adress">
        {adress}
      </p>
      <div className="RecordCard__container">
        <figure className="RecordCard__doctor">
          <img className="RecordCard__avatar" src={avatar} alt="Аватарка врача" />
          <figcaption className="RecordCard__caption">
            <span className="RecordCard__name">{name}</span>
            <span className="RecordCard__spec">{spec}</span>
          </figcaption>
        </figure>
        <button className="RecordCard__cancel-button">Отменить</button>
      </div>
    </div>
  );
}

export default React.memo(RecordCard);
