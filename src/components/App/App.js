import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { RecordsContext } from '../../contexts/RecordsContext';
import Api from '../../utils/Api';
import { ourServerApiConfig } from '../../utils/configs';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import fakeData from '../../data/records.json';

const { baseUrl } = ourServerApiConfig;
const api = new Api(baseUrl, fakeData);

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [records, setRecords] = React.useState([]);

  React.useEffect(() => {
    api.getData('photos?id=7')
      .then(data => {
        setCurrentUser(data[0]);
      })
      .catch(() => setCurrentUser({
        "url": "https://via.placeholder.com/600/92c952"
      }));
    api.getFakeData()
      .then(res => setRecords(res));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <RecordsContext.Provider value={records}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </RecordsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
