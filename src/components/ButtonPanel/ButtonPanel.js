import React from 'react';
import Button from '../Button/Button';

const buttonPanel = () => {


  return (
    <div>
      <div className="group group-1">
        <Button name="AC" color="#E0E0E0" />
        <Button name="+/-" color="#E0E0E0" />
        <Button name="%" color="#E0E0E0" />
        <Button name="/" color="#F5913E" />
      </div>


      <div className="group group-2">
        <Button name="7" color="#E0E0E0" />
        <Button name="8" color="#E0E0E0" />
        <Button name="9" color="#E0E0E0" />
        <Button name="X" color="#F5913E" />
      </div>


      <div className="group group-3">
        <Button name="4" color="#E0E0E0" />
        <Button name="5" color="#E0E0E0" />
        <Button name="6" color="#E0E0E0" />
        <Button name="-" color="#F5913E" />
      </div>


      <div className="group group-4">
        <Button name="1" color="#E0E0E0" />
        <Button name="2" color="#E0E0E0" />
        <Button name="3" color="#E0E0E0" />
        <Button name="+" color="#F5913E" />
      </div>


      <div className="group group-5">
        <Button name="0" color="#E0E0E0" wide="true" />
        <Button name="." color="#E0E0E0" />
        <Button name="=" color="#F5913E" />
      </div>


    </div>
  );
}


export default buttonPanel;
