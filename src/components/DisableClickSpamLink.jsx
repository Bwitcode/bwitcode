import React, { useState } from "react";
import { Link } from "react-router-dom";

const DisableClickSpamLink = ({ to, children }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 1000);
  };

  return (
    <Link to={to} onClick={handleClick} disabled={isDisabled}>
      {children}
    </Link>
  );
};

export default DisableClickSpamLink;
