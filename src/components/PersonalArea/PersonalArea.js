import React from "react";
import RecordCard from "../RecordCard/RecordCard";
import './styles/index.css';
import doctor from '../../images/doctor.svg';
import PersonalCard from "../PersonalCard/PersonalCard";

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
      <h2 className="PersonalArea__title PersonalArea__title_el-card">Электронная карта</h2>
      <div className="PersonalArea__personal-cards-container">
        <PersonalCard
          path="/a"
          modificator="PersonalCard__image_type_first"
          title="Информация о пациенте"
        >
          <ul className="PersonalCard__list">
            <li className="PersonalCard__line">
              Ваши личные данные
            </li>
            <li className="PersonalCard__line">
              Рекомендации врачей
            </li>
            <li className="PersonalCard__line">
              История болезней
            </li>
          </ul>
        </PersonalCard>
        <PersonalCard
          path="/c"
          modificator="PersonalCard__image_type_third"
          title="Результаты анализов"
          text="Вы можете узнать здесь результаты своих анализов"
        />
        <PersonalCard
          path="/b"
          modificator="PersonalCard__image_type_second"
          title="Добавить  информацию"
          text="Добавляйте в свою электронную медицинскую карту новые данные"
        />
        <PersonalCard
          path="/d"
          modificator="PersonalCard__image_type_fourth"
          title="История приемов"
          text="Вся информация о полученных услугах за все время хранится здесь"
        />
      </div>
    </div>
  );
}

export default React.memo(PersonalArea);
