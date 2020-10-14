import React from "react";
import "../Home/Home.css";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/RemoveCircle'
import SearchIcon from '@material-ui/icons/SearchSharp';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import DatePicker from "react-datepicker";
import ListGroup from 'react-bootstrap/ListGroup';
//import AnalystFunctions from './AnalystFunctions.js'
import "react-datepicker/dist/react-datepicker.css";
//const AnalystFunctions = require('./AnalystFunctions');
import { Link } from "react-router-dom";

class Analyst extends React.Component {
  constructor(props) {
    super(props);

    this.openArticle = this.openArticle.bind(this);
  }

  openArticle() {
    alert('You want to open an article');
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>ANALYSE ARTICLES</h1>
            <ListGroup>
              <ListGroup.Item action onClick={this.openArticle}>
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action onClick={this.openArticle}>
                Link 2
              </ListGroup.Item>
              <ListGroup.Item action onClick={this.openArticle}>
                This one is a button
              </ListGroup.Item>
            </ListGroup>
        </div>
      </div>
    );
  }
}

export default Analyst;