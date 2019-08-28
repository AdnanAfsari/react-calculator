import React from 'react';

const button = (props) => {

  const wide = props.wide ? '50%' : '25%';

  const style = {
    background: props.color,
    width: wide,
  };
  return (
    <div className="button" style={style} >
      <h3>{props.name}</h3>
    </div>
  );
}


export default button;
