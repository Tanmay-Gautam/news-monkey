import "./component.css";
import React, { Component } from "react";
import Spinner from "./Spinner";
import { FiSunrise, FiSunset } from "react-icons/fi";

export default class WeatherCard extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      data: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let success = (pos) => {
      const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=a2d55cddcf1d8175ebb4b92368c97ffe`;
      this.setState({ url: myUrl, loading: false });
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  async componentDidUpdate(_, prevState) {
    if (this.state.url !== "" && this.state.url !== prevState.url) {
      const res = await fetch(this.state.url);
      const jsonData = await res.json();
      this.state.data.pop(0)
      this.setState({ data: [...this.state.data, jsonData] });
    }
  }

  render() {
    const UnixToTime = (props) => {
      let dateObj = new Date(props.unix * 1000);
      let time = dateObj.toLocaleString().slice(-10, -6);
      return time;
    };

    if (this.state.data.length === 0) {
      return <div className="loading"><Spinner /></div>;
    } else {
      return (
          <div className={`WeatherCard text-center my-1 bg-${this.props.Theme + " border border-secondary"} text-${this.props.Theme === "dark" ? "white" : "dark"}`}>
              <div className="row mt-4">
              <div className="temp col-5 my-auto p-0">
                <h1 className="text-center">
                  {Math.floor(this.state.data[0].main.temp)}
                  <sup>°C</sup>
                </h1>
              </div>
              <div className="otherInfo col-7 p-0">
                <div className="weatherIconTag p-0">
                  <img
                    className="mx-2 rounded-circle"
                    src={`http://openweathermap.org/img/wn/${this.state.data[0].weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <h3>{this.state.data[0].weather[0].main}</h3>
                </div>
              </div>
              </div>
                <div className="sunRiseSet p-0">
                  <h3>
                    <FiSunrise /> <UnixToTime unix={this.state.data[0].sys.sunrise} /> AM
                  </h3>
                  <h3>|</h3>
                  <h3>
                    <FiSunset /> <UnixToTime unix={this.state.data[0].sys.sunset} /> PM
                  </h3>
                </div>
          </div>
      );
    }
  }
}