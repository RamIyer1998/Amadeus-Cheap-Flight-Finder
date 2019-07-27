import React, { Component } from "react";
import styles from "../styles/Flight.module.css";

/**
 * Interface that is used to define the props passed into the FlightList Component
 */
interface MyProps {
  origin: string;
  destination: string;
  departure_date: string;
  return_date: string;
  price: string;
}

/**
 * Interface that is used to define the state of the FlightList Component
 */
interface MyState {
  origin: string;
  destination: string;
  departure_date: string;
  return_date: string;
  price: string;
}

/**
 * Component that lists out the information of each flight in the list passed into the component
 */
class Flight extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      origin: this.props.origin,
      destination: this.props.destination,
      departure_date: this.props.destination,
      return_date: this.props.return_date,
      price: this.props.price
    };
  }

  render = () => {
    return (
      <div className={styles.item}>
        <div className={styles.subheader}>
          <h5>Origin: {this.state.origin}</h5>
          <h5>Destination: {this.state.destination}</h5>
        </div>
        <div className={styles.subheader}>
          <h5>Departure Date: {this.state.departure_date}</h5>
          <h5>Return Date: {this.state.return_date}</h5>
        </div>
        <div className={styles.subheader}>
          <h5>Total Price (Taxes Included): ${this.state.price}</h5>
        </div>
        <br />
      </div>
    );
  };
}

export default Flight;
