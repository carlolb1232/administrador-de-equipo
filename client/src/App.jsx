import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ManagePlayersList from './Components/ManagePlayersList';
import ManagePlayersAdd from './Components/ManagePlayersAdd';
import UpdatePlayer from './Components/ManagePlayerComponents/UpdatePlayer';
import MangePlayersStatus from './Components/MangePlayersStatus';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/players/list'>Manage Players</Link> | 
          </li>
          <li>
            <Link to="/players/game/1">Manage Players Status</Link>
          </li>
        </ul>
      </nav>
      <div className="content-container">
        <Routes>
          <Route path='/players/list' element={<ManagePlayersList />}/>
          <Route path='/players/add' element={<ManagePlayersAdd />}/>
          <Route path='/players/update/:id' element={<UpdatePlayer />}/>
          <Route path='/players/game/:id' element={<MangePlayersStatus />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
