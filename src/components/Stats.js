import PropTypes from "prop-types";

const Stats = (props) => {
  const { players } = props;

  const totalPlayers = players.length;
  const totalScore = players.reduce((total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({ score: PropTypes.number })),
};
