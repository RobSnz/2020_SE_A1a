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

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Analysis
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Article Heading</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Accept</Button>
        <Button onClick={props.onHide}>Reject</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Analyst = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className={styles.analystQueue}>
      <h1>ANALYSE ARTICLES</h1>
      <ListGroup>
        <ListGroup.Item action onClick={() => setModalShow(true)}>
          Article 1
              </ListGroup.Item>
        <ListGroup.Item action onClick={() => setModalShow(true)}>
          Article 2
              </ListGroup.Item>
        <ListGroup.Item action onClick={() => setModalShow(true)}>
          Article 3
              </ListGroup.Item>
      </ListGroup>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Analyst;