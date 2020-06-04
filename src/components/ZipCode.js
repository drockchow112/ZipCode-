import React, { Component } from "react";
import axios from "axios";

class ZipCode extends Component {
  constructor(props) {
    super(props);
    this.state = { zipcode: this.props.zipcode, zipcodes: [] };
  }

  componentDidMount() {
    axios
      .get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zipcode}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ zipcodes: res.data });
      });
  }

  render() {
    const showPlaces = this.state.zipcodes.map((place) => {
      let locationText = place.LocationText;
      let state = place.State;
      let location = place.Location;
      let population = place.EstimatedPopulation;
      let wages = place.TotalWages;
      return (
        <>
          <div className="card inline" style={{ width: "18rem" }}>
            <div className="card-header">{locationText}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">State: {state}</li>
              <li className="list-group-item">Location: {location}</li>
              <li className="list-group-item">Population: {population}</li>
              <li className="list-group-item">Wages: {wages}</li>
            </ul>
          </div>
        </>
      );
    });
    return <div className="App row">{showPlaces}</div>;
  }
}

export default ZipCode;
