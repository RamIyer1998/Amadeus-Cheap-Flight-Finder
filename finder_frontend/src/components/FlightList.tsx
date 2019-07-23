import React, { Component } from "react";
import Flight from "./Flight";
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
            <Flight
              origin={item.origin}
              destination={item.destination}
              departure_date={item.departure_date}
              return_date={item.return_date}
              price={item.price}
            />
          ))}
        </div>
      );
    }
  };
}

export default FlightList;
