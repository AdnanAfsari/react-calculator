import React from 'react';
import Button from '../Button/Button';

const buttonPanel = ({ clickHandler }) => (
  <div>
    <div className="group group-1">
      <Button name="AC" clickHandler={clickHandler} />
      <Button name="+/-" clickHandler={clickHandler} />
      <Button name="%" clickHandler={clickHandler} />
      <Button name="/" dif="true" clickHandler={clickHandler} />
    </div>


    <div className="group group-2">
      <Button name="7" clickHandler={clickHandler} />
      <Button name="8" clickHandler={clickHandler} />
      <Button name="9" clickHandler={clickHandler} />
      <Button name="X" dif="true" clickHandler={clickHandler} />
    </div>


    <div className="group group-3">
      <Button name="4" clickHandler={clickHandler} />
      <Button name="5" clickHandler={clickHandler} />
      <Button name="6" clickHandler={clickHandler} />
      <Button name="-" dif="true" clickHandler={clickHandler} />
    </div>


    <div className="group group-4">
      <Button name="1" clickHandler={clickHandler} />
      <Button name="2" clickHandler={clickHandler} />
      <Button name="3" clickHandler={clickHandler} />
      <Button name="+" dif="true" clickHandler={clickHandler} />
    </div>


    <div className="group group-5">
      <Button name="0" color="#E0E0E0" wide="true" clickHandler={clickHandler} />
      <Button name="." color="#E0E0E0" clickHandler={clickHandler} />
      <Button name="=" dif="true" clickHandler={clickHandler} />
    </div>
  </div>
);


export default buttonPanel;
