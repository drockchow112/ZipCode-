import React, { Component } from "react";
import ZipCode from "./components/ZipCode";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { zipcode: null };
  }

  handleChange = (e) => {
    this.setState({ zipcode: e.target.value });
  };

  showZipCode = () => {
    if (this.state.zipcode !== null) {
      if (this.state.zipcode.length === 5) {
        return <ZipCode zipcode={this.state.zipcode} />;
      }
    }
  };

  render() {
    return (
      <>
        <h1 className="App">Zip Code Search</h1>
        <input className="App" type="text" onChange={this.handleChange}></input>
        {this.showZipCode()}
      </>
    );
  }
}

export default App;
