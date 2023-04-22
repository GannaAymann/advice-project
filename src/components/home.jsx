import React, { Component } from "react";
import axios from "axios";
import style from "./home.module.css";
class Home extends Component {
  state = { advice: "" };
  fetchData = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        console.log(advice);
        this.setState({ advice: advice }); // if advice property that in state as name as value advice we then write advice only once in setstate
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.fetchData();
  }

  render() {
    return (
      <div className={style.divv}>
        <div className={style.card}>
          <h1 className={style.heading}>{this.state.advice}</h1>
          <button className={style.button} onClick={this.fetchData}>
            <span>Give me advice!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
