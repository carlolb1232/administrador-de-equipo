import React from 'react';
import { useNavigate } from 'react-router-dom';
import { simplePost } from '../../Services/simplePost';
import PlayerForm from '../PlayerForm';

const AddPlayer = () => {

  const navigate = useNavigate();

  const createPlayer = async (player) => {
    try {
      const newPlayer = await simplePost(player);
      console.log(newPlayer)
      navigate("/players/list")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='component-container'>
      <PlayerForm name="" prefered_position="" onSubmitProps={createPlayer} />
    </div>
  );
}

export default AddPlayer;
