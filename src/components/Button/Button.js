import React from 'react';

const button = props => {
  const { name, clickHandler } = props;

  const handleClick = () => clickHandler(name);
  const classes = [];
  if (props.wide) classes.push('wide');
  if (props.dif) classes.push('btn');

  return (
    <div className={`button r-${classes.join(' ')}`} onClick={handleClick} role="presentation">
      <h3>{props.name}</h3>
    </div>
  );
};

export default button;
