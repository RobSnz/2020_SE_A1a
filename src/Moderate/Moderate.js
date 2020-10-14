import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Navbar } from 'react-bootstrap';
import axios from "axios";
import styles from '../mystyle.module.css';

class Moderate extends React.Component {
  constructor(props) {
    super(props);

    this.state={ articleList: [] }
  }

  componentDidMount = () => {
    this.setState({ data: this.props.location });
    this.getArticleResult();
  };

  handleSubmit(event, title, status) {
    event.preventDefault();

    axios.put('/article/update/' + title + "/" + status)
      .then((response) => {
        alert("Article has successfully been updated.");
        this.componentDidMount();
      })
      .catch(() => {
        alert('Error retrieving data');
    });
  }

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
      <div>
        <Navbar bg="light" variant="light"></Navbar>
        <div>
          <ul className={styles.moderateStyle}>
          {this.state.articleList.map(article => {
            return <div>
              <Card>
                <Card.Body>
                  <Card.Title>Title: {article.title}</Card.Title>
                    <Card.Text>
                      Author: {article.author}<br/>
                      Year: {article.year}<br/>
                      Month: {article.month}<br/>
                      Volume: {article.volume}<br/>
                      Number of pages: {article.numOfPages}<br/>
                      ePrint: {article.ePrint}<br/>
                      ePrintType: {article.ePrintType}<br/>
                      ePrintClass: {article.annote}<br/>
                    </Card.Text>
                  <Button type="submit" className={styles.moderateButton} onClick={(e) => this.handleSubmit(e, article.title, "accepted")}>Accept</Button>
                  <Button type="submit" onClick={(e) => this.handleSubmit(e, article.title, "rejected")}>Decline</Button>
                </Card.Body>
              </Card>
            </div>;
          })}</ul>
        </div>
      </div>
    );
  }
}

export default Moderate;