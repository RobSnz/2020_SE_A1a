import React, { Component } from "react";
import { Button } from 'react-bootstrap'; //unused import
import history from './../history'; //unused import
import "./Home.css";
import Calendar from 'react-calendar'; //unused import
import DatePicker from 'react-datepicker';
import { RiArrowDropDownLine } from 'react-icons/ri';
import "react-datepicker/dist/react-datepicker.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state={ 
      search: '', 
      dateFrom: new Date(),
      dateTo: new Date(),
      fromDatePickerOpen: false,
      toDatePickerOpen: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.openFromDatePicker = this.openFromDatePicker.bind(this);
    this.openToDatePicker = this.openToDatePicker.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { search } = this.state;

    console.log(search);

    this.setState({ search: '' })
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleFromDate = dateFrom => {
    this.setState({ dateFrom });
  };

  handleToDate = dateTo => {
    this.setState({ dateTo })
  };

  openFromDatePicker() {
    this.setState({ fromDatePickerOpen: !this.state.fromDatePickerOpen, toDatePickerOpen: false });
  }

  openToDatePicker() {
    this.setState({ toDatePickerOpen: !this.state.toDatePickerOpen, fromDatePickerOpen: false });
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>SEARCH ARTICLES</h1>
          <form onSubmit={ this.handleSubmit }>
            <div className="input-box">
              <ul>
                <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                  type='text' placeholder='What are you looking for?' onChange={ this.handleSearch }
                  value={ this.state.email } style={{height: "42px", paddingBottom: "6px"}}
                />
                <button onClick={this.openFromDatePicker} style={{fontSize: "20px", height:"40px"}}>
                  DATE FROM
                  <DatePicker onChange={ this.handleFromDate } selected={ this.state.dateFrom } open={ this.state.fromDatePickerOpen } className="datepicker"/>
                  <RiArrowDropDownLine/>
                </button>
                <button onClick={this.openToDatePicker} style={{fontSize: "20px", height:"40px"}}>
                  DATE TO
                  <DatePicker onChange={ this.handleToDate } selected={ this.state.dateTo } open={ this.state.toDatePickerOpen } className="datepicker"/>
                  <RiArrowDropDownLine/>
                </button>
              </ul>
            </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Home;