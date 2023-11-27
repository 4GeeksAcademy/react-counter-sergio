import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const myComponentStyle = {
    "font-size": "100px",
};

const ClockIcon = () => {
  return (
    <div className="m-2" style={myComponentStyle}>
      <FontAwesomeIcon icon={faClock} />
    </div>
  );
};

export default ClockIcon;