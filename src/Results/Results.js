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
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showConstraints: false,
      show: false,
      search: '',
      dateFrom: new Date(),
      dateTo: new Date(),
      constraints: [],
      articleList: [],
      potato: " ",
      modelInformation: []
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
    let tempArr = this.state.articleList;
    for(let i = 0; i < this.state.constraints.length; i++) {
      let constraint = this.state.constraints[i];
      let field = constraint.field;
      let op = constraint.operator;
      let value = constraint.value.toLowerCase();
      
      tempArr = tempArr.filter(article => {
        if(field == "Title") {
          if(op == "Contains" && !article.title.toLowerCase().includes(value)) return false;
          else if(op == "Does not contain" && article.titletoLowerCase().includes(value)) return false;
        }
        
        if(field == "Author") {
          if(op == "Contains" && !article.author.toLowerCase().includes(value)) return false;
          else if(op == "Does not contain" && article.author.toLowerCase().includes(value)) return false;
        }

        if(field == "Method") {
          let methodArticles = article.keyValues.filter(article => {
            if(article.field == field) return true;
            return false;
          })

          for(let j = 0; j < methodArticles.length; j++) {
            if(op == "Contains" && !methodArticles[j].value.toLowerCase().includes(value)) return false;
            else if(op == "Does not contain" && methodArticles[j].value.toLowerCase().includes(value)) return false;
          }
        }

        if(field == "Benefit") {
          let methodArticles = article.keyValues.filter(article => {
            if(article.field == field) return true;
            return false;
          })

          for(let j = 0; j < methodArticles.length; j++) {
            if(op == "Contains" && !methodArticles[j].value.toLowerCase().includes(value)) return false;
            else if(op == "Does not contain" && methodArticles[j].value.toLowerCase().includes(value)) return false;
          }
        }
    
        return true;
      });
    }
    this.setState({ articleList: tempArr });
  }

  getArticleResult = () => {
    axios.post('/article/retrieve/accepted')
      .then((response) => {
        const data = response.data;
        this.setState({ articleList: data });
        this.handleFilter();
      })
      .catch((response) => {
        console.log(response);
        alert("Error displaying results. Check log for more info");
      });
  }

  setShow = (boolean) => {
    this.setState({ show: boolean });
  }

  setShowConstraints = (boolean) => {
    this.setState({ showConstraints: boolean });
  }

  handleOpen = () => {
    this.setShow(true);
  }

  handleClose = () => {
    this.setShow(false);
  }

  handleCloseConstraints = () => {
    this.setShowConstraints(false);
  }

  handleOpenConstraints = () => {
    this.setShowConstraints(true);
  }

  updateDetails = (article) => {
    this.setState({
      modelInformation: {
        title: article.title,
        author: article.author, volume: article.volume, pagesNum: article.pagesNum, numOfPages: article.numOfPages,
        year: article.year, month: article.month, ePrint: article.ePrint, ePrintType: article.ePrintType,
        ePrintClass: article.ePrintType, annote: article.annote
      }
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
                  <Form.Control id="inlineFormInputName" value={this.state.search} placeholder="What are you looking for?" />

                  <InputGroup.Append>
                    <IconButton aria-label="search" style={{ float: "right", margin: "-5px 0 0 0" }}>
                      <SearchIcon />
                    </IconButton>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
              <Col sm={3} className="my-1" style={{ margin: "0 -100px 0 0" }}>
                <DatePicker className="dateFontSize" selected={this.state.dateFrom} onChange={this.handleFromDate} />
              </Col>
              <Col sm={3} className="my-1">
                <DatePicker className="dateFontSize" selected={this.state.dateTo} onChange={this.handleToDate} minDate={this.state.dateFrom} />
              </Col>
              <Col xs="auto" className="my-1">
                <Button variant="dark" style={{ margin: "0 0 0 -60px" }} onClick={(e) => { this.handleOpenConstraints(e) }}>Constraints</Button>
              </Col>
            </Form.Row>
          </Form>
        </Navbar>

        <Modal show={this.state.showConstraints} onHide={this.handleCloseConstraints}>
          <Modal.Header closeButton>
            <Modal.Title>
              Constraints
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {this.state.constraints.map(thing => (
                <InputGroup className="mb-3" style={{ width: "100%", alignItems: "center" }}>
                  <ListGroup.Item>{thing.field} {thing.operator} {thing.value}</ListGroup.Item>
                </InputGroup>
              ))}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={(e) => this.handleCloseConstraints()}>Close</Button>
          </Modal.Footer>
        </Modal>

        {this.state.articleList.map(article => {
          return <div>
            <form>
              <div>
                <Card>
                  <Card.Body>
                    <Card.Title>Title: {article.title}</Card.Title>
                    <Card.Text>
                      Author: {article.author}<br />
                        Year: {article.year}<br />
                    </Card.Text>
                    <Button variant="dark" action onClick={(e) => { this.handleOpen(e, article); this.updateDetails(article) }}>Details</Button>
                  </Card.Body>
                </Card>
              </div>
            </form>
          </div>;
        })}

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.modelInformation.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col><b>Author</b></Col>
                <Col><b>Volume</b></Col>
              </Row>
              <Row>
                <Col>{this.state.modelInformation.author}</Col>
                <Col>{this.state.modelInformation.volume}</Col>
              </Row>
              <Row>
                <Col><b>Page no.</b></Col>
                <Col><b>No. of Pages</b></Col>
              </Row>
              <Row>
                <Col>{this.state.modelInformation.pagesNum}</Col>
                <Col>{this.state.modelInformation.numOfPages}</Col>
              </Row>
              <Row>
                <Col><b>Year</b></Col>
                <Col><b>Month</b></Col>
              </Row>
              <Row>
                <Col>{this.state.modelInformation.year}</Col>
                <Col>{this.state.modelInformation.month}</Col>
              </Row>
              <Row>
                <Col><b>E-Print</b></Col>
                <Col><b>E-Print Type</b></Col>
              </Row>
              <Row>
                <Col>{this.state.modelInformation.ePrint}</Col>
                <Col>{this.state.modelInformation.ePrintType}</Col>
              </Row>
              <Row>
                <Col><b>E-Print Class</b></Col>
                <Col><b>Annote</b></Col>
              </Row>
              <Row>
                <Col>{this.state.modelInformation.ePrintClass}</Col>
                <Col>{this.state.modelInformation.annote}</Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={(e) => this.handleClose()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Results;