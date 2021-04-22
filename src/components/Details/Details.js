import React from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import ContainerScroll from "../ContainerScroll/ContainerScroll";
import './styles/index.css';
import './styles/react-calendar/index.css';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import Arrow from "../Calendar/Arrow/Arrow";
import TileContent from "../Calendar/TileContent/TileContent";
import { daysWeek } from "../../utils/utils";
import { RecordsContext } from "../../contexts/RecordsContext";

function Details() {
  const records = React.useContext(RecordsContext);

  //Находим в массиве записей дату, которая соответствует текущему дню в календаре
  //Если нашли такую дату, то вставляем в текущий день компонент с кол-вом записей
  function setRecordsOnDay({ date }) {
    const toDay = date.toLocaleString(
      'ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit' }
    );
    const result = records
      .some(item => item.date.includes(toDay));

    let count = 0;

    records.forEach(item => {
      if (item.date.includes(toDay)) {
        count += 1;
      }
    });

    return result ? <TileContent number={count} /> : null;
  }

  //Проверяем совпадает ли месяц из конкретной ячейки дня с текущим месяцем
  //если да, то устанавливаем класс с белым фоном, если нет, то класс с серым фоном
  function setDisabledDay({ date }) {
    let currentDate = new Date();
    return currentDate.getMonth() === date.getMonth()
      ? 'Details__tile' : 'Details__tile_off';
  }

  //Получаем текущий месяц, устанавливаем заглавную букву
  //и выводим "Месяц, год" в лэйбл календаря
  function setNavigationLabel({ date }) {
    const month = date.toLocaleString(
      'default', { month: 'long' }
    );
    const monthCapitalize = month.charAt(0).toUpperCase() + month.slice(1);
    return `${monthCapitalize}, ${date.getFullYear()}`;
  }

  //В массиве daysWeek находятся названия дней недели
  //Достаем то название, которое соответствует номеру дня недели
  function setFormatWeekDay(_locale, date) {
    return daysWeek[date.getDay()];
  }

  return (
    <div className="Details">
      <Link className="Details__link" to="/">Мои записи</Link>
      <div className="Details__container">
        <ContainerScroll />
        <Calendar
          className="Details__calendar"
          tileClassName={setDisabledDay}
          tileContent={setRecordsOnDay}
          navigationLabel={setNavigationLabel}
          prevLabel={<Arrow icon={arrowLeft} />}
          nextLabel={<Arrow icon={arrowRight} />}
          formatShortWeekday={setFormatWeekDay}
        />
      </div>
    </div>
  );
}

export default React.memo(Details);
