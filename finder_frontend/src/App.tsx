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
}
class App extends Component {
  state = {
    flights: Array<flight>()
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/search/?origin=PHL&destination=TYO&departure_date=2020-05-01&return_date=2020-05-05"
      );
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
            <h5>{item.departure_date}</h5>
            <h5>{item.return_date}</h5>
            <h5>{item.price}</h5>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
