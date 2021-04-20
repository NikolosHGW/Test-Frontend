import React from "react";
import RecordCard from "../RecordCard/RecordCard";
import './styles/index.css';
import doctor from '../../images/doctor.svg';

function PersonalArea() {
  return (
    <div className="PersonalArea">
      <h2 className="PersonalArea__title">Записи на прием</h2>
      <div className="PersonalArea__record-card-container">
        <RecordCard
          date="Понедельник 15.06.20 | 15:30"
          adress='СПБ ГБУЗ "Городская поликлиника №25", пр.&nbsp;Солидарности, д. 1, к. 1, лит. А'
          avatar={doctor}
          name="Малушко Т. Н."
          spec="Хирургия"
        />
      </div>
      <h2 className="PersonalArea__title">Электронная карта</h2>
      <div className="PersonalArea__personal-card-container"></div>
    </div>
  );
}

export default React.memo(PersonalArea);
