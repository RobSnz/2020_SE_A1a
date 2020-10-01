import React from "react";
import "./Results.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navigation from '../components/Navbar';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);                           //binders to handle data changes and present them
  }
  


handleSubmit(event) {                                               //once user clicks on search
  event.preventDefault();
}

render() {
  return (
    
    <div className="Home">
      <div><Navigation /></div>
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