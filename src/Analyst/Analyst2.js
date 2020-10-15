import React from "react";
import styles from '../mystyle.module.css';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/RemoveCircle'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal'
import "react-datepicker/dist/react-datepicker.css";
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
            articleList: [],
            modelInformation: []
        }
    }

    handleSubmit = (e, status) => {
        e.preventDefault();
        this.componentDidMount();

        const body = {
            title: this.state.modelInformation.title,
            status: status,
            keyValues: this.state.keyValues
        };

        axios.put('/article/update', body)
            .then((response) => {
                console.log(response);
                alert("Successfully Updated");
                this.componentDidMount();
                this.setShow(false);
            })
            .catch(() => {
                alert('Error retrieving data');
            });
        
        this.setState({ keyValues: [] })
    }

    setShow = (boolean) => {
        this.setState({ show: boolean });
    }

    handleClose = () => {
        this.setState({ keyValues: [] })
        this.setShow(false);
    }

    handleOpen = (e, article) => {
        console.log(article);
        this.setShow(true);
    }

    updateDetails = (article) => {
        this.setState({ modelInformation: { title: article.title, 
        author: article.author, volume: article.volume, noOfPages: article.noOfPages,
        year: article.year, month: article.month, ePrint: article.ePrint, ePrintType: article.ePrintType,
        ePrintClass: article.ePrintType, annote: article.annote}});
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
        const field2 = this.state.field;
        const operator2 = this.state.operator;
        const value2 = this.state.value;

        this.state.keyValues.push({ field: field2, operator: operator2, value: value2, id: Math.random() * 1000 });

        if(this.state.keyValues !== null) {                 //update UI
            this.setState({value: "" });
            this.setState({field: "" });
            this.setState({operator: "" });
        } else {
            //notify user - STILL NEED TO DO THIS
        }
    };
  
    removeKeyValueHandler = id => {
        //this.setstate({ keyValues: this.state.keyValues.filter(item => item.id !== id) });
        this.state.keyValues = this.state.keyValues.filter(item => item.id !== id);

        if(this.state.keyValues !== null) {                 //update UI
            this.setState({value: "" });
            this.setState({field: "" });
            this.setState({operator: "" });
        } else {
            //notify user - STILL NEED TO DO THIS
        }
    };
  
    getArticleResult = () => {
        axios.post('/article/retrieve/toAnalyse')
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
                return <div><ListGroup.Item action onClick={(e) => {this.handleOpen(e, article); this.updateDetails(article)}}>
                    Title: {article.title}
                </ListGroup.Item>
                </div>
            })}
            </ListGroup>

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
                    <Col>---</Col>
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
                    {this.state.keyValues.map(thing => (
                        <InputGroup className="mb-3" style={{ width: "100%", alignItems: "center" }}>
                            <ListGroup.Item>{thing.field} {thing.operator} {thing.value}</ListGroup.Item>
                            <InputGroup.Append>
                            <IconButton onClick={() => this.removeKeyValueHandler(thing.id)} aria-label="remove" style={{ float: "right", margin: "-5px 0 0 0" }}>
                                <RemoveIcon />
                            </IconButton>
                            </InputGroup.Append>
                        </InputGroup>
                    ))}
                </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={(e) => this.handleSubmit(e, "accepted")}>Accept</Button>
                <Button onClick={(e) => this.handleSubmit(e, "rejected")}>Reject</Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
    }
  }
  
  export default Analyst2;