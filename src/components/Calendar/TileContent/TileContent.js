import React from "react";
import './styles/index.css';

function TileContent({ number = 0 }) {
  return (
    <div className="TileContent">
      <div className="TileContent__number">{number}</div>
    </div>
  );
}

export default React.memo(TileContent);
