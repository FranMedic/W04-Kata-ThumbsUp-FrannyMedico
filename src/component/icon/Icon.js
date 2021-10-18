import { useState } from "react";
import "./Icon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Icon = ({ icon1, icon2 }) => {
  let [icon, setIcon] = useState(true);

  const toggleClick = () => {
    setIcon(!icon);
  };
  return (
    <>
      <FontAwesomeIcon icon={icon ? icon1 : icon2} onClick={toggleClick} />
    </>
  );
};
export default Icon;
