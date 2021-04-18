import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Api from '../../utils/Api';
import { ourServerApiConfig } from '../../utils/configs';
import Header from '../Header/Header';
import './App.css';

const { baseUrl } = ourServerApiConfig;
const api = new Api(baseUrl);

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getData('photos?id=7')
      .then(data => {
        setCurrentUser(data[0]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
