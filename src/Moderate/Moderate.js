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

class Moderate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      articleList: [],
      modelInformation: []
    }
  }

  componentDidMount = () => {
    this.setState({ data: this.props.location });
    this.getArticleResult();
  };

  handleSubmit(e, status) {
    e.preventDefault();
    this.componentDidMount();

    const body = {
      title: this.state.modelInformation.title,
      status: status
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
  }

  setShow = (boolean) => {
    this.setState({ show: boolean });
  }

  handleClose = () => {
    this.setShow(false);
  }

  handleOpen = (e, article) => {
    console.log(article);
    this.setShow(true);
  }

  componentDidMount = () => {
    this.getArticleResult();
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
    let moderatorView;

    if (this.state.articleList.length > 0) {
      moderatorView =
        <ListGroup>
          {this.state.articleList.map(article => {
            return <div><ListGroup.Item action onClick={(e) => { this.handleOpen(e, article); this.updateDetails(article) }}>
              Title: {article.title}
            </ListGroup.Item>
            </div>
          })}
        </ListGroup>
    } else {
      moderatorView = <h4>There are no articles awaiting moderation.</h4>;
    }

    return (
      <div className={styles.analystQueue}>
        <h1>MODERATE ARTICLES</h1>

        {moderatorView}

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
            <Button onClick={(e) => this.handleSubmit(e, "toAnalyse")}>Accept</Button>
            <Button onClick={(e) => this.handleSubmit(e, "rejected")}>Reject</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Moderate;