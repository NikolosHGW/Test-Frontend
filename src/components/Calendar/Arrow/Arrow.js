import React from "react";

function Arrow({ icon }) {
  return (
    <img src={icon} alt="стрелка" />
  );
}

export default React.memo(Arrow);
