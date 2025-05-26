import React from "react";
import { useIsOpen } from "../Context/IsOpen";

const Hamburger = () => {
  const { toggleOpen } = useIsOpen();

  return (
    <button onClick={toggleOpen}>
      <i className="fa-solid fa-bars"></i>
    </button>
  );
};

export default Hamburger;
