import React, { Component } from "react";

interface flight {
  id: number;
  origin: string;
  destination: string;
  departure_date: string;
  return_date: string;
  price: string;
}

interface MyState {
  origin: string;
  destination: string;
  departure_date: string;
  return_date: string;
  flights: Array<flight>;
}

interface MyProps {
  flights: Array<flight>;
}

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

  handleOriginChange(event: any) {
    this.setState({ origin: event.target.value });
  }

  handleDestinationChange(event: any) {
    this.setState({ destination: event.target.value });
  }

  handleDeptChange(event: any) {
    this.setState({ departure_date: event.target.value });
  }

  handleRetChange(event: any) {
    this.setState({ return_date: event.target.value });
  }

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

  renderFlights() {
    if (!(this.state.flights.length === 0)) {
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

  render() {
    return (
      <div>
        <form>
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
