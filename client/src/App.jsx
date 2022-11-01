import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ManagePlayers from './Components/ManagePlayers';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link>Manage Players</Link> | 
          </li>
          <li>
            <Link>Manage Players Status</Link>
          </li>
        </ul>
      </nav>
      <div className="content-container">
        <Routes>
          <Route path='/players' element={<ManagePlayers />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
