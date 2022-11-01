import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AddPlayer from './ManagePlayerComponents/AddPlayer';
import PlayersList from './ManagePlayerComponents/PlayersList';

const ManagePlayersAdd = () => {
  return (
    <div className='component-container'>
      <nav>
        <ul>
          <li>
            <Link to='/players/list'>List |</Link>
          </li>
          <li>
            <Link to='/players/add'>Add Player</Link>
          </li>
        </ul>
      </nav>
      <div className="manage-player-content">
        <AddPlayer />
      </div>
    </div>
  );
}

export default ManagePlayersAdd;
