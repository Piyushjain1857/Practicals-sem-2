import { useState } from 'react';

const LikeButton = () => {
  const [Liked, setLiked] = useState(false);

  return (
    <div>
      <h1>Q1. Emoji Toggle Button</h1>
      <button onClick={() => setLiked(!Liked)} style={{ fontSize: '100px' , borderRadius: '40%' }}>
        {Liked ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default LikeButton;
