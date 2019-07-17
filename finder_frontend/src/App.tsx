// App.js
import React, { Component } from "react";
import { isUndefined } from "util";

interface flight {
  id: number;
  origin: string;
  destination: string;
  departure_date: string;
  return_date: string;
  price: string;
  direct_flight: boolean;
}
class App extends Component {
  state = {
    flights: Array<flight>()
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
            <h1>{item.origin}</h1>
            <h1>{item.destination}</h1>
            <span>{item.departure_date}</span>
            <span>{item.return_date}</span>
            <span>{item.price}</span>
            <span>{item.direct_flight}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
