import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { simpleGet } from '../../Services/simpleGet';
import { simplePut } from '../../Services/simplePut';

const ManagePlayersGame = (props) => {

  const { game } = props;

  const [players, setPlayers] = useState();

  const gameSelected = `game_${game}`
  console.log(gameSelected);
  console.log(typeof gameSelected)

  const getAllPlayers = async () => {
    try {
      const playersFromService = await simpleGet(`http://localhost:8000/api/players/`);
      const data = playersFromService.data
      console.log(data)
      setPlayers(data);
      // console.log(data.map(player => {
      //   console.log(player[`game_${game}`])
      //   return player
      // }))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllPlayers()
  }, []);

  const updateState = async (id, status) => {
    try {
      const gameStatus = {
        [gameSelected]: status
      }
      const updatedUser = await simplePut(id, gameStatus);
      console.log(updatedUser);
      getAllPlayers()
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <div className='component-container'>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>
              Team Name
            </th>
            <th>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
        {
          players?.map(player=>
            <tr>
              <td><Link to={`/players/update/${player._id}`}>{player.name}</Link></td>
              <td className='button-container'>
                <button className='btn' onClick={()=>updateState(player._id, "playing")} style={player[gameSelected]==="playing"?{backgroundColor:'green'}:{backgroundColor:'white'}}>Playing</button>
                <button className='btn' onClick={()=>updateState(player._id, "not playing")} style={player[gameSelected]==="not playing"?{backgroundColor:'red'}:{backgroundColor:'white'}}>Not Playing</button>
                <button  className='btn' onClick={()=>updateState(player._id, "undecided")} style={player[gameSelected]==="undecided"?{backgroundColor:'yellow'}:{backgroundColor:'white'}}>Undecided</button>
              </td>
              {/* <td>{player[gameSelected]}</td> */}
            </tr>  
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default ManagePlayersGame;
