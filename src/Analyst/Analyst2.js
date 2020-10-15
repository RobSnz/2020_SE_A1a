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
import axios from "axios";

class Analyst2 extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            show: false,
            value: "",
            field: "",
            operator: "",
            keyValues: [],
            articleList: []
        }
        /*
        const [value, setValue] = React.useState("");
        const [field, setField] = React.useState("");
        const [operator, setOperator] = React.useState("");
        const [keyValues, setKeyValues] = React.useState([]);
        var [articleList, setArticleList] = React.useState([]);*/
    }

    handleSubmit = (e, title) => {
        console.log(title)
        this.componentDidMount();
    }

    setShow = (boolean) => {
        this.setState({ show: boolean });
    }

    handleClose = () => {
        this.setShow(false);
    }

    handleOpen = () => {
        this.setShow(true);
    }

    componentDidMount = () => {
        this.getArticleResult();
    };

    selectFieldHandler = (e) => {
      this.setState({ field: e.target.value });
    };
  
    selectOperatorHandler = (e) => {
      this.setState({ operator: e.target.value });
    };
  
    selectValueHandler = (e) => {
      this.setState({ value: e.target.value });
    };
  
    addKeyValueHandler = (e) => {
        e.preventDefault();
        const field = this.state.field;
        const operator = this.state.operator;
        const value = this.state.value;

        this.setstate({ keyValues: { field: field, operator: operator, value: value, id: Math.random() * 1000 } });
    
        if (this.state.keyValues !== null) {                 //update UI
            this.setstate({value: "" });
            this.setstate({field: "" });
            this.setstate({operator: "" });
        } else {
            //notify user - STILL NEED TO DO THIS
        }
    };
  
    removeKeyValueHandler = id => {
      this.setstate({ keyValues: this.state.keyValues.filter(item => item.id !== id) });
    };
  
    getArticleResult = () => {
        axios.post('/article/retrieve/toModerate')
            .then((response) => {
                const data = response.data;
                this.setState({ articleList: data });
            })
            .catch(() => {
                alert('Error retrieving data');
            });
    }
  
    render() {
      return (
        <div className={styles.analystQueue}>
            <h1>ANALYSE ARTICLES</h1>

            <ListGroup>
            {this.state.articleList.map(article => {
                return <div><ListGroup.Item action onClick={this.handleOpen}>
                    Title: {article.title}
                </ListGroup.Item>

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>
                    {article.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container>
                    <Row>
                    <Col><b>Author</b></Col>
                    <Col><b>Volume</b></Col>
                    </Row>
                    <Row>
                    <Col>{article.author}</Col>
                    <Col>{article.volume}</Col>
                    </Row>
                    <Row>
                    <Col><b>Page no.</b></Col>
                    <Col><b>No. of Pages</b></Col>
                    </Row>
                    <Row>
                    <Col>---</Col>
                    <Col>{article.numOfPages}</Col>
                    </Row>
                    <Row>
                    <Col><b>Year</b></Col>
                    <Col><b>Month</b></Col>
                    </Row>
                    <Row>
                    <Col>{article.year}</Col>
                    <Col>{article.month}</Col>
                    </Row>
                    <Row>
                    <Col><b>E-Print</b></Col>
                    <Col><b>E-Print Type</b></Col>
                    </Row>
                    <Row>
                    <Col>{article.ePrint}</Col>
                    <Col>{article.ePrintType}</Col>
                    </Row>
                    <Row>
                    <Col><b>E-Print Class</b></Col>
                    <Col><b>Annote</b></Col>
                    </Row>
                    <Row>
                    <Col>{article.ePrintClass}</Col>
                    <Col>{article.annote}</Col>
                    </Row>
                </Container>
                <Form style={{ marginTop: "10px" }}>
                    <h5>Key Values</h5>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridField">
                        <Form.Control as="select" value={this.state.field} onChange={this.selectFieldHandler}>
                        <option>Select a field...</option>
                        <option>Title</option>
                        <option>Author</option>
                        <option>Method</option>
                        <option>Benefit</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridOperator">
                        <Form.Control as="select" value={this.state.operator} onChange={this.selectOperatorHandler}>
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
                            value={this.state.value}
                            aria-describedby="basic-addon2"
                            onChange={this.selectValueHandler}
                        />
                        <InputGroup.Append>
                            <IconButton onClick={this.addKeyValueHandler} aria-label="add" style={{ float: "right", margin: "-5px 0 0 0" }}>
                            <AddIcon />
                            </IconButton>
                        </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                    </Form.Row>
                </Form>
                <ListGroup>
                    {this.state.keyValues.map(item => (
                    <InputGroup className="mb-3" style={{ width: "100%", alignItems: "center" }}>
                        <ListGroup.Item>{item.field} {item.operator} {item.value}</ListGroup.Item>
                        <InputGroup.Append>
                        <IconButton onClick={() => this.removeKeyValueHandler(item.id)} aria-label="remove" style={{ float: "right", margin: "-5px 0 0 0" }}>
                            <RemoveIcon />
                        </IconButton>
                        </InputGroup.Append>
                    </InputGroup>
                    ))}
                </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                <Button>Accept</Button>
                <Button onClick={(e) => this.handleSubmit(e, article.title)}>Reject</Button>
                </Modal.Footer>
                </Modal>
                </div>
            })}
            </ListGroup>
        </div>
      );
    }
  }
  
  export default Analyst2;