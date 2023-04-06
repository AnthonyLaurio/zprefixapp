import './stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import RouterHandler from './components/RouterHandler';

function App() {
  return (
    <div className="App vh-100 vw-100">
      <header className="App-header bg-secondary">
        <NavBar />
      </header>
      <body className="App-body bg-secondary">
        <RouterHandler />
      </body>
    </div>
  );
}

export default App;
