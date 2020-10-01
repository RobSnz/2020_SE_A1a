import React from "react";
import "./Results.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@material-ui/icons/SearchSharp';
import IconButton from '@material-ui/core/IconButton';
import DatePicker from "react-datepicker";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {                          //keeps track of state of users current search
      search: '',
      dateFrom: new Date("01/01/1990"),
      dateTo: new Date(),
      constraints: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);                           //binders to handle data changes and present them
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
  }
  

  handleFromDate = dateFrom => {
    this.setState({ dateFrom });
  };

  handleToDate = dateTo => {
    this.setState({ dateTo });
  };

handleSubmit(event) {                                               //once user clicks on search
  event.preventDefault();
}

render() {
  return (
    
    <div className="Home">
      <Navbar bg="light" variant="light">
            <Form>
                <Form.Row className="align-items-center">
                    <Col sm={3} className="my-1" style={{ width: "1000px" }}>
                        <InputGroup>
                            <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
                                Search
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="What are you looking for?" />

                            <InputGroup.Append>
                                <IconButton aria-label="search" style={{ float: "right", margin: "-5px 0 0 0" }}>
                                    <SearchIcon />
                                </IconButton>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                    <Col sm={3} className="my-1" style={{ margin: "0 -100px 0 0"}}>
                      <DatePicker className="dateFontSize" selected={this.state.dateFrom} onChange={this.handleFromDate}/>
                    </Col>
                    <Col sm={3} className="my-1">
                      <DatePicker className="dateFontSize" selected={this.state.dateTo} onChange={this.handleToDate} minDate={this.state.dateFrom} />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button type="submit" style={{ margin: "0 0 0 -60px"}}>Constraints</Button>
                    </Col>
                </Form.Row>
            </Form>
        </Navbar>
      <div className="lander">
        <form onSubmit={this.handleSubmit}>
          <div className="input-box">
            <Card>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
}
}

export default Results;