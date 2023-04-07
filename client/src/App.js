import './stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import RouterHandler from './components/RouterHandler';
import { createContext, useState, useEffect } from 'react';

export const myContext = createContext();

function App() { 
  const [loggedIn, setLoggedIn] = useState({userId: null, auth: false});
  const [url] = useState('https://anthonylserver.onrender.com');//Change to express url

  useEffect(() => {
    fetch(`${url}/checkAuth`)
      .then(res => res.json())
      .then(data => {
        setLoggedIn(data);
      }
      )
  }, [])

  return (
    <div className="App vh-100 vw-100">
      <myContext.Provider value={{loggedIn, setLoggedIn, url}}>
      <header className="App-header bg-secondary">
        <NavBar />
      </header>
      <div className="App-body bg-secondary">
        <RouterHandler />
      </div>
      </myContext.Provider>
    </div>
  );
}

export default App;
