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
import getArticle from './getArticle';
import axios from "axios";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {                          //keeps track of state of users current search
      search: '',
      dateFrom: new Date("01/01/1990"),
      dateTo: new Date(),
      constraints: [],
      articleList: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);                           //binders to handle data changes and present them
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
  }

  componentDidMount = () => {
    this.getArticleResult();
  };

  handleFromDate = dateFrom => {
    this.setState({ dateFrom });
  };

  handleToDate = dateTo => {
    this.setState({ dateTo });
  };

  handleSubmit(event) {                                               //once user clicks on search
    event.preventDefault();
  }

  getArticleResult = () => {
    axios.post('/article/')
      .then((response) => {
        const data = response.data;
        this.setState({ articleList: data });
      })
      .catch(() => {
        alert('Error retrieving data');
      });
  }

  render() {
    console.log(this.state.articleList)
    return (
      <div>
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
          {this.state.articleList.map(article => {
             return <div> 
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <Card>
                      <Card.Body>
                        <Card.Title>Title: {article.title}</Card.Title>
                        <Card.Text>
                          Author: {article.author}<br/>
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </form>
              </div>;
          })}
      </div>
    );
  }
}

export default Results;