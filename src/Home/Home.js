import React from "react";
import './Home.css';
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
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {                          //keeps track of state of users current search
      search: "",
      dateFrom: new Date("01/01/2020"),
      dateTo: new Date(),
      selectField: 'Nothing Selected...',
      selectOperator: '',
      selectValue: '',
      constraints: []
    };

    this.handleFromDate = this.handleFromDate.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.selectFieldHandler = this.selectFieldHandler.bind(this);
    this.addConstraintHandler = this.addConstraintHandler.bind(this);
    this.selectOperatorHandler = this.selectOperatorHandler.bind(this);
    this.selectValueHandler = this.selectValueHandler.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.removeConstraintHandler = this.removeConstraintHandler.bind(this);
  }

  handleFromDate = dateFrom => {
    this.setState({ dateFrom });
  };

  handleToDate = dateTo => {
    this.setState({ dateTo });
  };

  selectFieldHandler(event) {
    this.setState({ selectField: event.target.value });         //updates field value
  };

  selectOperatorHandler(event) {
    this.setState({ selectOperator: event.target.value });      //updates operator value
  };

  selectValueHandler(event) {
    this.setState({ selectValue: event.target.value });         //updates value
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });         //updates value
  }

  addConstraintHandler() {
    this.state.constraints.push({ field: this.state.selectField, operator: this.state.selectOperator, value: this.state.selectValue, id: Math.random() * 1000 });

    this.setState({ selectField: 'Nothing Selected...', selectOperator: '', selectValue: '' });
  }

  removeConstraintHandler = id => {
    this.state.constraints = this.state.constraints.filter(item => item.id !== id);
    this.setState({ selectField: 'Nothing Selected...', selectOperator: '', selectValue: '' });
  }

  render() {
    let constraintView;

    if (this.state.constraints.length > 0) {
      constraintView =
        <ListGroup>
          {this.state.constraints.map(item => (
            <InputGroup className="mb-3" style={{ width: "150%", alignItems: "left" }}>
              <ListGroup.Item>{item.field} {item.operator} {item.value}</ListGroup.Item>
              <InputGroup.Append>
                <IconButton onClick={() => this.removeConstraintHandler(item.id)} aria-label="remove" style={{ float: "right", margin: "-5px 0 0 0" }}>
                  <RemoveIcon />
                </IconButton>
              </InputGroup.Append>
            </InputGroup>
          ))}
        </ListGroup>;
    } else {
      constraintView = <h4>You currently have no constraints.</h4>;
    }
    return (
      <div className="Home">
        <div className="lander">
          <div className="">
            <div className="input-box">
              <h1 style={{ float: "left" }}>SEARCH ARTICLES</h1>
              <InputGroup className="mb-3">
                <FormControl
                  value={this.state.search}
                  onChange={this.updateSearch}
                  placeholder="What are you looking for?"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <IconButton>
                    <Link to={{ pathname: '/Results', data: this.state }}><SearchIcon aria-label="search" style={{ float: "right", margin: "-5px 0 0 0", color: "grey" }} /></Link>
                  </IconButton>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <div className="dates">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="dateFromPicker">
                    <Form.Label style={{ float: "left", paddingRight: "10px" }}>DATE FROM</Form.Label>
                    <DatePicker className="dateFontSize" selected={this.state.dateFrom} onChange={this.handleFromDate} />
                  </Form.Group>
                  <Form.Group as={Col} controlId="dateToPicker">
                    <Form.Label style={{ float: "left", paddingRight: "50px" }}>DATE TO</Form.Label>
                    <DatePicker className="dateFontSize" selected={this.state.dateTo} onChange={this.handleToDate} minDate={this.state.dateFrom} />
                  </Form.Group>
                </Form.Row>
              </Form>
            </div>
            <div className="input-box">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridField">
                    <Form.Label style={{ float: "left" }}>FIELD</Form.Label>
                    <Form.Control as="select" value={this.state.selectField} onChange={this.selectFieldHandler}>
                      <option>Select a field...</option>
                      <option>Title</option>
                      <option>Author</option>
                      <option>Method</option>
                      <option>Benefit</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridOperator">
                    <Form.Label style={{ float: "left" }}>OPERATOR</Form.Label>
                    <Form.Control as="select" value={this.state.selectOperator} onChange={this.selectOperatorHandler}>
                      <option>Select an operator...</option>
                      <option>Contains</option>
                      <option>Does not contain</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridValue">
                    <Form.Label style={{ float: "left" }}>VALUE</Form.Label>
                    <InputGroup className="mb-3">
                      <FormControl
                        value={this.state.selectValue}
                        onChange={this.selectValueHandler}
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Append>
                        <IconButton onClick={this.addConstraintHandler} aria-label="add" style={{ float: "right", margin: "-5px 0 0 0" }}>
                          <AddIcon />
                        </IconButton>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
              </Form>
              <div className="constraints">
                <div className="mainPageHeadings">CONSTRAINTS</div>
                  {constraintView}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;