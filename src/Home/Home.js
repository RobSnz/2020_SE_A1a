import React from "react";
import "./Home.css";
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

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      dateFrom: new Date("01/01/1990"),
      dateTo: new Date()
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleOperatorChange = this.handleOperatorChange.bind(this);
    this.handleValue = this.handleValue.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { search } = this.state;

    console.log(search);

    this.setState({ search: '' })
  }

  setStartDate = startDate => {
    this.setState({ startDate });
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleFromDate = dateFrom => {
    this.setState({ dateFrom });
  };

  handleToDate = dateTo => {
    this.setState({ dateTo })
  };

  handleFieldChange(event) {
    this.setState({ value: event.target.value })
  }

  handleOperatorChange(event) {
    this.setState({ value2: event.target.value })
  }

  handleValue(event) {
    this.setState({ value3: event.target.value })
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <form onSubmit={this.handleSubmit}>

            <div className="input-box">
              <h1 style={{ float: "left" }}>SEARCH ARTICLES</h1>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="What are you looking for?"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <IconButton aria-label="search" style={{ float: "right", margin: "-5px 0 0 0" }}>
                    <SearchIcon />
                  </IconButton>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <div className="dates">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="dateFromPicker">
                    <Form.Label style={{ float: "left" }}>DATE FROM</Form.Label>
                    <DatePicker className="dateFontSize" selected={this.state.dateFrom} onChange={this.handleFromDate} />
                  </Form.Group>
                  <Form.Group as={Col} controlId="dateToPicker">
                    <Form.Label style={{ float: "left" }}>DATE TO</Form.Label>
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
                    <Form.Control as="select" defaultValue="Select...">
                      <option>Select...</option>
                      <option>Title</option>
                      <option>Author</option>
                      <option>Method</option>
                      <option>Benefit</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridOperator">
                    <Form.Label style={{ float: "left" }}>OPERATOR</Form.Label>
                    <Form.Control as="select" defaultValue="Select...">
                      <option>Select...</option>
                      <option>Contains</option>
                      <option>Does not contains</option>
                      <option>Begins with</option>
                      <option>Ends with</option>
                      <option>Is equal to</option>
                      <option>Is greather than</option>
                      <option>Is less than</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridValue">
                    <Form.Label style={{ float: "left" }}>VALUE</Form.Label>
                    <InputGroup className="mb-3">
                      <FormControl
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Append>
                        <IconButton aria-label="add" style={{ float: "right", margin: "-5px 0 0 0" }}>
                          <AddIcon />
                        </IconButton>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
              </Form>
              <div className="constraints">
                <div className="mainPageHeadings">CONSTRAINTS</div>
                <ListGroup>
                  <InputGroup className="mb-3" style={{width:"100%"}}>
                    <ListGroup.Item >Method is equal to test driven development.</ListGroup.Item>
                    <InputGroup.Append>
                      <IconButton aria-label="remove" style={{ float: "right", margin: "-5px 0 0 0" }}>
                        <RemoveIcon />
                      </IconButton>
                    </InputGroup.Append>
                  </InputGroup>
                  <InputGroup className="mb-3" style={{width:"100%"}}>
                    <ListGroup.Item >Benefit contains performance.</ListGroup.Item>
                    <InputGroup.Append>
                      <IconButton aria-label="remove" style={{ float: "right", margin: "-5px 0 0 0" }}>
                        <RemoveIcon />
                      </IconButton>
                    </InputGroup.Append>
                  </InputGroup>
                </ListGroup>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Home;