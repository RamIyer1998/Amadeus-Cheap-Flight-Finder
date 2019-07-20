import React, { Component } from "react";

/**
 * Interface that defines the flight object that comprises the list that is passed into the component
 */
interface flight {
  id: number;
  origin: string;
  destination: string;
  departure_date: string;
  return_date: string;
  price: string;
}

/**
 * Interface that is used to define the props passed into the FlightList Component
 */
interface MyProps {
  flights: Array<flight>;
}

/**
 * Interface that is used to define the state of the FlightList Component
 */
interface MyState {
  flights: Array<flight>;
}

/**
 * Component that lists out the information of each flight in the list passed into the component
 */
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
