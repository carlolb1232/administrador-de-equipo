import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AddPlayer from './ManagePlayerComponents/AddPlayer';
import PlayersList from './ManagePlayerComponents/PlayersList';

const ManagePlayers = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link>List |</Link>
          </li>
          <li>
            <Link>Add Player</Link>
          </li>
        </ul>
      </nav>
      <div className="manage-player-content">
        <Routes>
          <Route path='/list' element={<PlayersList />}/>
        </Routes>
        {/* <PlayersList /> */}
        {/* <AddPlayer /> */}
      </div>
    </div>
  );
}

export default ManagePlayers;
