import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { simpleGet } from '../../Services/simpleGet';
import { simplePut } from '../../Services/simplePut';
import PlayerForm from '../PlayerForm';

const UpdatePlayer = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState();
  
  const getOnePlayerFromService = async () => {
    try {
      const onePlayerFromService = await simpleGet(`http://localhost:8000/api/players/${id}`)
      console.log(onePlayerFromService.data)
      setPlayer(onePlayerFromService.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOnePlayerFromService()
  }, []);

  const updatePlayer = async (player) => {
    try {
      const updatedPlayer = await simplePut(id, player);
      console.log(updatedPlayer)
      navigate("/players/list")
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className='component-container'>
      {
        player&&
        <PlayerForm name={player.name} prefered_position={player.prefered_position} onSubmitProps={updatePlayer} />
      }
    </div>
  );
}

export default UpdatePlayer;
