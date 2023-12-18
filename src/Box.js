import React from 'react';

function Box({ id, width, height, backgroundColor, removeBox }) {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor,
  };

  return (
    <div style={{ display: 'inline-block', margin: '10px' }}>
      <div style={style} />
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
}

export default Box;
