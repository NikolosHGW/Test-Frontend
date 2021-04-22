import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import { useDispatch } from 'react-redux';
import getRecords from '../../redux/thunk/recordsAsync';
import getUser from '../../redux/thunk/userAsync';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUser());
    dispatch(getRecords());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
