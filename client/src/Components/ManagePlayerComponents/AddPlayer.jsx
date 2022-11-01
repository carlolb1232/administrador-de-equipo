import React from 'react';
import { simplePost } from '../../Services/simplePost';
import PlayerForm from '../PlayerForm';

const AddPlayer = () => {

  const createPlayer = async (player) => {
    try {
      const newPlayer = await simplePost(player);
      console.log(newPlayer)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <PlayerForm name="" prefered_position="" onSubmitProps={createPlayer} />
    </div>
  );
}

export default AddPlayer;
