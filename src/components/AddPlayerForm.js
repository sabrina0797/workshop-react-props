import { shape } from "prop-types";
import React, { Component } from "react";

export default class AddPlayerForm extends Component {
  handleInput(event) {
    console.log("INPUT VALUE", event.target.name, event.target.value);
  }
  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Entre a player's name"
          name="player-name"
          onChange={this.handleInput}
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}
