// App.js
import React, { Component } from "react";

class App extends Component {
  state = {
    flights: []
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/");
      const flights = await res.json();
      this.setState({
        flights
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.flights.map(item => (
          <div>
            <h2>
              {item.origin} -> {item.destination}
            </h2>
            <h3>Departure Date: {item.departure_date}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
