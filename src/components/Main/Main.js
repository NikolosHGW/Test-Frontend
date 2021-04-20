import React from 'react';
import Content from '../Content/Content';
import SideBar from '../SideBar/SideBar';
import './styles/Main.css';

function Main() {
  return (
    <main className="Main">
      <SideBar />
      <Content />
    </main>
  );
}

export default React.memo(Main);
