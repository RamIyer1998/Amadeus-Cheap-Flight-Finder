import React, { Component } from "react";
import styles from "../styles/FlightForm.module.css";

import FlightList from "./FlightList";

/**
 * Interface that defines the flight object that comprises the list returned
 * by the Django backend
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
 * Interface that is used to define the state of the FlightForm Component
 */
interface MyState {
  origin: string;
  destination: string;
  departure_date: string;
  return_date: string;
  flights: Array<flight>;
}

/**
 * Form that takes in information necessary to search for flights using Amadeus, and renders the results
 * using FlightList
 */
class FlightForm extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      origin: "",
      destination: "",
      departure_date: "",
      return_date: "",
      flights: Array<flight>()
    };

    this.handleOriginChange = this.handleOriginChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleDeptChange = this.handleDeptChange.bind(this);
    this.handleRetChange = this.handleRetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderFlights = this.renderFlights.bind(this);
  }

  /**
   * Function to update the origin element in the FlightForm's state
   * @param event that occurs after the textfield input dictating origin is changed
   */
  handleOriginChange(event: any) {
    this.setState({ origin: event.target.value });
  }

  /**
   * Function to update the destination element in the FlightForm's state
   * @param event that occurs after the textfield input dictating destination is changed
   */
  handleDestinationChange(event: any) {
    this.setState({ destination: event.target.value });
  }

  /**
   * Function to update the departure date element in the FlightForm's state
   * @param event that occurs after the textfield input dictating departure date is changed
   */
  handleDeptChange(event: any) {
    this.setState({ departure_date: event.target.value });
  }

  /**
   * Function to update the return date element in the FlightForm's state
   * @param event that occurs after the textfield input dictating return date is changed
   */
  handleRetChange(event: any) {
    this.setState({ return_date: event.target.value });
  }

  /**
   * Function that sends the data to the Django backend via the fetch api and
   * sets the flights element of the FlightForm to the returned response after
   * the user hits the response button
   * @param event that occurs after the user hits the submit button
   */
  async handleSubmit(event: any) {
    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/search/?origin=" +
          this.state.origin +
          "&destination=" +
          this.state.destination +
          "&departure_date=" +
          this.state.departure_date +
          "&return_date=" +
          this.state.return_date
      );
      const flights = await res.json();
      this.setState({
        flights
      });
      this.render();
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Function called within render that creates a FlightList if the flights element
   * of the FlightForm isn't empty
   */
  renderFlights() {
    if (!(this.state.flights.length === 0)) {
      return <FlightList flights={this.state.flights} />;
    }
  }

  /**
   * Renders the form and the result of the form submission
   */
  render() {
    return (
      <div>
        <form className={styles.main_div}>
          <label>
            Origin:
            <input
              type="text"
              value={this.state.origin}
              onChange={this.handleOriginChange}
            />
          </label>
          <br />
          <label>
            Destination:
            <input
              type="text"
              value={this.state.destination}
              onChange={this.handleDestinationChange}
            />
          </label>
          <br />
          <label>
            Departure Date (YYYY-MM-DD):
            <input
              type="text"
              value={this.state.departure_date}
              onChange={this.handleDeptChange}
            />
          </label>
          <br />
          <label>
            Return Date (YYYY-MM-DD):
            <input
              type="text"
              value={this.state.return_date}
              onChange={this.handleRetChange}
            />
          </label>
          <br />
          <input type="button" value="Submit" onClick={this.handleSubmit} />
        </form>
        {this.renderFlights()}
      </div>
    );
  }
}

export default FlightForm;
