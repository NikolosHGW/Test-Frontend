import React from 'react';
import SideBar from '../SideBar/SideBar';
import './styles/Main.css';

function Main() {
  return (
    <main className="Main">
      <SideBar />
    </main>
  );
}

export default React.memo(Main);
