import React , { Component } from 'react';
import moment from 'moment';
import { guidGenerator } from '../../shadule/shadule'
import './Inputs.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Inputs extends Component {
  state = {
    date : '',
    text : '',
    validatationText : false,
    validatationDate : false,
  }

  handleInputTextChange = ({ target: { value }}) => {
    if (value.length > 3) {
      this.setState({
        text: value,
        validatationText: true,
      })
    } else {
      this.setState({
        text: value,
        validatationText: false,
      })
    }
  }

  handleSetDate = (date) => {
    console.log(date);
    if (date) {
      this.setState({
        date: date,
        validatationDate: true,
      })
    }
  }

  addTask = () => {
    const date = moment(this.state.date).format("MM/DD/YYYY");
    const { add } = this.props;
    const text = this.state.text;
    const newTask = {
      id: guidGenerator(),
      check: false,
      visible: true,
      text,
      date,
    }
    add(newTask);
  }

  render () {
    return (
      <div>
        {this.state.validatationText || (
            <div className="alert alert-danger">
              Введите текст для записи!
            </div>
          )
        }

        {this.state.validatationDate || (
            <div className="alert alert-danger">
              Введите дату!
            </div>
          )
        }

        <div className="form-row">
          <div className="col-7">
            <label>Текст</label>
            <input type="text" className="form-control" onChange={this.handleInputTextChange}/>
          </div>
          <div className="col-5 input-group">
            <label>Время</label>
            <div className="input-group">
              <DatePicker
              id="addDate"
              className="form-control"
              onChange={this.handleSetDate}
              selected={this.state.date}
              />
            <button className="input-group-addon" onClick={this.addTask}>
                <i className="fa fa-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Inputs;
