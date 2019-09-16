import React , { Component } from 'react';
import './Filters.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Filters extends Component {
  state = {
    directionSortText : "DOWN",
    directionSortDate : "DOWN",
    filterTasks : [],
    text: '',
    date: '',
  }

  sortOnText = () => {
    const { sortOnText } = this.props;
    const direction = this.state.directionSortText;
    if ( direction === "DOWN"){
      console.log('Сортировака по тексту вниз');
      sortOnText(direction);
      this.state.directionSortText = 'UP';
    }
    if ( direction === "UP"){
      sortOnText(direction);
      console.log('Сортировака по тексту вверх');
      this.state.directionSortText = 'DOWN';
    }
  }

  sortOnDate = () => {
    const { sortOnDate } = this.props;
    const direction = this.state.directionSortDate;
    if ( direction === "DOWN"){
      console.log('Сортировака по дате вниз');
      sortOnDate(direction);
      this.state.directionSortDate = 'UP';
    }
    if ( direction === "UP"){
      sortOnDate(direction);
      console.log('Сортировака по дате вверх');
      this.state.directionSortDate = 'DOWN';
    }
  }

  filterOnText = ({ target: { value }}) => {
    const { filterOnText, toDoList, updateStateMainComponent} = this.props;
    this.state.text = value;
    const date = this.state.date;
    const tasks = toDoList.map(item => {
      return {
        ...item,
        visible: true,
      }
    })
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
    filterOnText(tasks);
  }

  filterOnDate = date => {
    const { filterOnDate, toDoList, updateStateMainComponent } = this.props;
    this.state.date = date;
    console.log(date);
    const text = this.state.text;
    const tasks = toDoList.map(item => {
      return {
        ...item,
        visible: true,
      }
    })
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
    filterOnDate(tasks);
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
