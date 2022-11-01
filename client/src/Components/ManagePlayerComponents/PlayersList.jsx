import React, { useEffect } from 'react';
import { useState } from 'react';
import { simpleGet } from '../../Services/simpleGet';

const PlayersList = () => {

  const [players, setPlayers] = useState();

  const getPlayersFromService = async () => {
    try {
      const playersFromService = await simpleGet(`http://localhost:8000/api/players/`)
      console.log(playersFromService.data);
      setPlayers(playersFromService.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPlayersFromService();
  }, []);

  return (
    <div>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Prefered Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {
            players?.map(player=>
              <tr>
                <td>{player.name}</td>
                <td>{player.prefered_position}</td>
                <td><button className='btn btn-danger'>Delete</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default PlayersList;
