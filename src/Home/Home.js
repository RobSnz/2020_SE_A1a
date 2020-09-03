import React, { Component, useState } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
import Tweet from "../tweet"

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>SEARCH ARTICLES</h1>
          <form>
            <label>
              <input type="text" name="name"/>
            </label>
          </form>
        </div>
      </div>
    );
  }
}
