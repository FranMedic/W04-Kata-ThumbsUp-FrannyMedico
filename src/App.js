import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import Icon from "./component/icon/Icon.js";

function App() {
  const iconA = faCoffee;
  const iconB = faArrowCircleDown;

  return (
    <>
      <Icon icon1={iconA} icon2={iconB} />
    </>
  );
}

export default App;
