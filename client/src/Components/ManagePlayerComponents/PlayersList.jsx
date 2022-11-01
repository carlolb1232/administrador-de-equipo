import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { simpleDelete } from '../../Services/simpleDelete';
import { simpleGet } from '../../Services/simpleGet';
import Swal from 'sweetalert2'

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

  const deleteOnePlayer = async (id) => {
    try {
      const playerDeleted = await simpleDelete(id)
      console.log(playerDeleted);
      setPlayers(players.filter(player=>player._id!==id))
    } catch (error) {
      console.log(error)
    }
  }

  const deleteAction = (id) => {
    Swal.fire({
      title: '¿Esta seguro de eliminar este jugador?',
      text: "No podra revertir está acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOnePlayer(id)
        Swal.fire(
          '¡Realizado!',
          'Jugador Eliminado'
        )
      }
    })
  }

  return (
    <div className='component-container'>
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
              <tr key={player._id}>
                <td><Link to={`/players/update/${player._id}`}>{player.name}</Link></td>
                <td>{player.prefered_position}</td>
                <td><button className='btn btn-danger' onClick={()=>deleteAction(player._id)}>Delete</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default PlayersList;
