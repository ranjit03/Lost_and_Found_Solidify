import React, { Component } from "react";
import { connect } from "react-redux";
import { getLostPets } from "../actions/receiveLostPets";

export class LostPets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.lostPetsData.map(lostPet => {
          return (
            <div key={lostPet.id}>
              <img src={lostPet.photo} />
              <br />
              Name:{lostPet.name}
              <br />
              Species:{lostPet.species}
            </div>
          );
        })}
      </div>
    );
  }
}

export default LostPets
