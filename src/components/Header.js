import { createRef } from "react";
import Stats from "./Stats";
import PropTypes from "prop-types";

const Header = ({ title, players }) => {
  const titleRef = createRef();

  const handleClick = () => {
    console.log("titleRef", titleRef);
    titleRef.current.style.color = "red";
  };

  return (
    <header onClick={handleClick}>
      <Stats players={players} />
      <h1 ref={titleRef}>{title}</h1>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.array,
};

Header.defaultProps = {
  title: "scoreboard",
};
