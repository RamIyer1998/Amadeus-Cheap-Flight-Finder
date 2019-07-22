import React, { Component } from "react";
import "../styles/FlightList.css";

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
    if (this.state.flights.length === 0) {
      return;
    } else {
      return (
        <div>
          {this.state.flights.map(item => (
            <div>
              <div>
                <h5>Origin: {item.origin}</h5>
                <h5>Destination: {item.destination}</h5>
              </div>
              <div>
                <h5>Departure Date: {item.departure_date}</h5>
                <h5>Return Date: {item.return_date}</h5>
              </div>
              <h5>Total Price (Taxes Included): {item.price}</h5>
              <br />
            </div>
          ))}
        </div>
      );
    }
  };
}

export default FlightList;
