import React from "react";
import RecordCard from "../RecordCard/RecordCard";
import './styles/index.css';
import PersonalCard from "../PersonalCard/PersonalCard";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function PersonalArea() {
  const [currentRecords, setCurrentRecords] = React.useState([]);
  const [otherRecords, setOtherRecords] = React.useState(0);
  const { records } = useSelector(state => state.records);

  React.useEffect(() => {
    switch (records.length) {
      case 0:
        setCurrentRecords(records);
        break;
      case 1:
        setCurrentRecords(records);
        break;
      default:
        setCurrentRecords([records[0], records[1]]);
        break;
    }
  }, [records]);

  React.useEffect(() => {
    setOtherRecords(records.length - currentRecords.length);
  }, [currentRecords, records.length]);

  return (
    <div className="PersonalArea">
      <h2 className="PersonalArea__title">Записи на прием</h2>
      <div className="PersonalArea__record-card-container">
        {currentRecords[0] ? currentRecords.map(({ date, adress, avatar, name, spec }, i) => (
          <RecordCard
            key={i}
            date={date}
            adress={adress}
            avatar={avatar}
            name={name}
            spec={spec}
            index={i}
          />
        )) : (
          <p>Записей нет</p>
        )}
        {(otherRecords !== 0) && (
          <div className="PersonalArea__detail">
            <p className="PersonalArea__other-records">{`Еще ${otherRecords} записи`}</p>
            <Link className="PersonalArea__link" to="/details">Подробнее</Link>
          </div>
        )}
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
