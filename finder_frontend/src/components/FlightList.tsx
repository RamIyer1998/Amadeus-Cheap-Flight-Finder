import React, { Component } from "react";

interface flight {
  id: number;
  origin: string;
  destination: string;
  departure_date: string;
  return_date: string;
  price: string;
}

interface MyProps {
  flights: Array<flight>;
}

interface MyState {
  flights: Array<flight>;
}

class FlightList extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      flights: this.props.flights
    };
  }

  render = () => {
    console.log(this.state.flights);
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
  };
}

export default FlightList;
