import React, { Component } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Header from "./Header";
import Player from "./Player";

const players = [
  {
    name: "Sihem",
    score: 20,
    id: 1,
  },
  {
    name: "Manel",
    score: 10,
    id: 2,
  },
  {
    name: "Malek",
    score: 0,
    id: 3,
  },
  {
    name: "Samy",
    score: 1,
    id: 4,
  },
  {
    name: "Sophia",
    score: 0,
    id: 5,
  },
  {
    name: "Sabrina",
    score: 0,
    id: 6,
  },
  {
    name: "Yasmine",
    score: 0,
    id: 7,
  },
  {
    name: "Fatma",
    score: 0,
    id: 8,
  },
];

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <Header players={players} />
        {players.map((player) => (
          <Player {...player} key={player.id} />
        ))}
        <AddPlayerForm />
      </div>
    );
  }
}

export default App;
