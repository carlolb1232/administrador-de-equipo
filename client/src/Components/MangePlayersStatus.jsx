import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ManagePlayersGame from './MangePlayersStatusComponents/ManagePlayersGame';

const MangePlayersStatus = () => {
  const { id } = useParams();
  return (
    <div className='component-container'>
      <h2>Player Status - Game {id}</h2>
      <nav className='nav-ul'>
        <ul>
          <li>
            <Link to="/players/game/1">
              Game 1
            </Link> |
          </li>
          <li>
            <Link to="/players/game/2">
              Game 2
            </Link> |
          </li>
          <li>
            <Link to="/players/game/3">
              Game 3
            </Link>
          </li>
        </ul>
      </nav>
      <ManagePlayersGame game={id}/>
    </div>
  );
}

export default MangePlayersStatus;
