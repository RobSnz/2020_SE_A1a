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
import axios from "axios";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      dateFrom: new Date(),
      dateTo: new Date(),
      constraints: [],
      articleList: [],
      potato: " "
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
  }

  componentDidMount = () => {
    if(this.props.location.data != null) {
      this.state.constraints = this.props.location.data.constraints;
      this.state.dateFrom = this.props.location.data.dateFrom;
      this.state.dateTo = this.props.location.data.dateTo;
      this.state.search = this.props.location.data.search;
    }
    this.getArticleResult();
  };

  handleFromDate = dateFrom => {
    this.setState({ dateFrom });
  };

  handleToDate = dateTo => {
    this.setState({ dateTo });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  handleFilter() {
    if(this.state.constraints != null) {
      for(var x = 0; x < this.state.constraints.length; x++) {
        var tempVar = this.state.constraints[x];
        var field = tempVar.field.toLowerCase();
        var op = tempVar.operator.toLowerCase();
        var value = tempVar.value.toLowerCase();
        for(var i = 0; i < this.state.articleList.length; i++) {
          if(field == "title") {
            var title = this.state.articleList[i].title.toLowerCase();
            if(op == "contains") {
              if(!title.includes(value)) {
                this.state.articleList.splice(i, 1);
              }
            } else if(op == "does not contain") {
              if(title.includes(value)) {
                this.state.articleList.splice(i, 1);
              }
            }
          }
        }
      }
    }
    this.setState({potato: "completed" });
  }

  getArticleResult = () => {
    axios.post('/article/retrieve/accepted')
      .then((response) => {
        const data = response.data;
        this.setState({ articleList: data });
        this.handleFilter();
      })
      .catch(() => {
        alert('Error retrieving data');
    });
  }

  render() {
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
              <form>
                <div>
                  <Card>
                    <Card.Body>
                      <Card.Title>Title: {article.title}</Card.Title>
                      <Card.Text>
                        Author: {article.author}<br/>
                        Year: {article.year}<br/>
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