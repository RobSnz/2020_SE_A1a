import React from "react";
import styles from '../mystyle.module.css';
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
import Modal from 'react-bootstrap/Modal'
//import AnalystFunctions from './AnalystFunctions.js'
import "react-datepicker/dist/react-datepicker.css";
//const AnalystFunctions = require('./AnalystFunctions');
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Analyst = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [value, setValue] = React.useState("");
  const [field, setField] = React.useState("");
  const [operator, setOperator] = React.useState("");

  const selectFieldHandler = (e) =>{
    setField(e.target.value);
  };

  const selectOperatorHandler = (e) =>{
    setOperator(e.target.value);
  };

  const selectValueHandler = (e) =>{
    setValue(e.target.value);
  }

  return (
    <div className={styles.analystQueue}>
      <h1>ANALYSE ARTICLES</h1>
      <ListGroup>
        <ListGroup.Item action onClick={handleShow}>
          Article 1
              </ListGroup.Item>
        <ListGroup.Item action onClick={handleShow}>
          Article 2
              </ListGroup.Item>
        <ListGroup.Item action onClick={handleShow}>
          Article 3
              </ListGroup.Item>
      </ListGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Article Title
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col><b>Author</b></Col>
              <Col><b>Volume</b></Col>
            </Row>
            <Row>
              <Col>First LastName</Col>
              <Col>2</Col>
            </Row>
            <Row>
              <Col><b>Page no.</b></Col>
              <Col><b>No. of Pages</b></Col>
            </Row>
            <Row>
              <Col>87-93</Col>
              <Col>1236</Col>
            </Row>
            <Row>
              <Col><b>Year</b></Col>
              <Col><b>Month</b></Col>
            </Row>
            <Row>
              <Col>2008</Col>
              <Col>June</Col>
            </Row>
            <Row>
              <Col><b>E-Print</b></Col>
              <Col><b>E-Print Type</b></Col>
            </Row>
            <Row>
              <Col>Something</Col>
              <Col>Something</Col>
            </Row>
            <Row>
              <Col><b>E-Print Class</b></Col>
              <Col><b>Annote</b></Col>
            </Row>
            <Row>
              <Col>Something</Col>
              <Col>N/A</Col>
            </Row>
          </Container>
          <Form style={{ marginTop: "10px" }}>
            <h5>Key Values</h5>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridField">
                <Form.Control as="select" value={field} onChange={selectFieldHandler}>
                  <option>Select a field...</option>
                  <option>Title</option>
                  <option>Author</option>
                  <option>Method</option>
                  <option>Benefit</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridOperator" value={operator} onChange={selectOperatorHandler}>
                <Form.Control as="select">
                  <option>Select an operator...</option>
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
                <InputGroup className="mb-3">
                  <FormControl
                    value={value}
                    aria-describedby="basic-addon2"
                    onChange={selectValueHandler}
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
        </Modal.Body>
        <Modal.Footer>
          <Button>Accept</Button>
          <Button>Reject</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Analyst;