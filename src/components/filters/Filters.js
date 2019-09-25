import React , { Component } from 'react';
import './Filters.css';

import { sortDate, sortText} from '../../shadule/shadule';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Filters extends Component {
  state = {
    directionSortText : "DOWN",
    directionSortDate : "DOWN",
    text: '',
    date: '',
  }

  sortOnText = () => {
    const { getData, toDoList } = this.props;
    const direction = this.state.directionSortText;
    if ( direction === "DOWN"){
      const tasks = sortText([...toDoList], direction);
      getData({
        tasks,
        filter : true,
      });
      this.setState({ directionSortText : 'UP' });
    }
    if ( direction === "UP"){
      const tasks = sortText([...toDoList], direction);
      getData({
        tasks,
        filter : true,
      });
      this.setState({ directionSortText : 'DOWN' });
    }
  }

  sortOnDate = () => {
    const { getData, toDoList } = this.props;
    const direction = this.state.directionSortDate;
    if ( direction === "DOWN"){
      const tasks = sortDate([...toDoList], direction);
      getData({
        tasks,
        filter : true,
      });
      this.setState({ directionSortDate : 'UP' });
    }
    if ( direction === "UP"){
      const tasks = sortDate([...toDoList], direction);
      getData({
        tasks,
        filter : true,
      });
      this.setState({ directionSortDate : 'DOWN' });
    }
  }

  filterOnText = ({ target: { value }}) => {
    const { getData , toDoList} = this.props;
    this.setState({ text : value });
    const date = this.state.date;
    const tasks = toDoList.map(item => ({
      ...item,
      visible: true,
    }))
    tasks.forEach(item => {
      if (!item.text.startsWith(value)){
        item.visible = false;
      }
    })
    if (date) {
      tasks.forEach(item => {
        if (Date.parse(date) !== Date.parse(item.date)){
          item.visible = false;
        }
      });
    }
    getData({
      tasks,
      filter : true,
    });
  }

  filterOnDate = date => {
    const { getData, toDoList } = this.props;
    this.setState({ date });
    const text = this.state.text;
    const tasks = toDoList.map(item => ({
      ...item,
      visible: true,
    }))
    if (date){
      tasks.forEach(item => {
        if (Date.parse(date) !== Date.parse(item.date)){
          item.visible = false;
        }
      })
    }
    if (text) {
      tasks.forEach(item => {
        if (!item.text.startsWith(date)){
          item.visible = false;
        }
      });
    }
    getData({
      tasks,
      filter : true,
    });
  }

  render () {
    return (
    <div className="filters-and-sorts">
      <div className="form-group">
        <label>Текст</label>
        <input type="text" className="form-control" onChange={this.filterOnText}/>
        <label>Время</label>
        <div className="input-group">
          <DatePicker className="form-control" onChange={this.filterOnDate} selected={this.state.date} showDisabledMonthNavigation />
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
