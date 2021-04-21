import React from "react";
import { RecordsContext } from "../../contexts/RecordsContext";
import CustomScroll from "../CustomScroll/CustomScroll";
import RecordCard from "../RecordCard/RecordCard";
import './styles/index.css';

function ContainerScroll() {
  const records = React.useContext(RecordsContext);

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
          />
        ))}
      </CustomScroll>
    </div>
  );
}

export default React.memo(ContainerScroll);
