import React from "react";
import CustomScroll from "../CustomScroll/CustomScroll";
import RecordCard from "../RecordCard/RecordCard";
import './styles/index.css';
import { useSelector } from 'react-redux';

function ContainerScroll() {
  const { records } = useSelector(state => state.records)

  return (
    <div className="ContainerScroll">
      <CustomScroll>
        {records.map(({ date, adress, avatar, name, spec }, i) => (
          <RecordCard
            key={i}
            date={date}
            adress={adress}
            avatar={avatar}
            name={name}
            spec={spec}
            index={i}
          />
        ))}
      </CustomScroll>
    </div>
  );
}

export default React.memo(ContainerScroll);
