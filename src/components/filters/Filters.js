import React , { Component } from 'react';
import './Filters.css';

// import { sortDate, sortText} from '../../shadule/shadule';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Filters extends Component {
  state = {
    textDirection : "",
    dateDirection : "",
    textFilter : "",
    dateFilter : "",
  }

  sortOnText = () => {
    const { setFilterData } = this.props;
    const direction = this.state.textDirection;
    if ( direction === "DOWN" || !direction){
      this.setState({ textDirection : 'UP' });
      setFilterData({ textDirection : 'UP' });
    }
    if ( direction === "UP"){
      this.setState({ textDirection : 'DOWN' });
      setFilterData({ textDirection : 'DOWN' });
    }
  }

  sortOnDate = () => {
    const { setFilterData } = this.props;
    const direction = this.state.dateDirection;
    if ( direction === "DOWN" || !direction){
      this.setState({ dateDirection : 'UP' });
      setFilterData({ dateDirection : 'UP' });
    }
    if ( direction === "UP"){
      this.setState({ dateDirection : 'DOWN' });
      setFilterData({ dateDirection : 'DOWN' });
    }
  }

  filterOnText = ({ target: { value }}) => {
      const { setFilterData } = this.props;
      this.setState({ textFilter : value });
      setFilterData({ textFilter : value });
  }

  filterOnDate = date => {
    const { setFilterData } = this.props;
    this.setState({ dateFilter : date });
    setFilterData({ dateFilter : date });
  }

  render () {
    return (
    <div className="filters-and-sorts">
      <div className="form-group">
        <label>Текст</label>
        <input type="text" className="form-control" onChange={this.filterOnText}/>
        <label>Время</label>
        <div className="input-group">
          <DatePicker className="form-control" onChange={this.filterOnDate} selected={this.state.dateFilter} showDisabledMonthNavigation />
        </div>
      </div>
      <div className="form-group">
        <button className="btn btn-primary sort" onClick={this.sortOnText}>Сортировка по тексту ></button>
        <button className="btn btn-primary sort" onClick={this.sortOnDate}>Сортировка по дате ></button>
      </div>
    </div>
    )
  }
}

export default Filters;
