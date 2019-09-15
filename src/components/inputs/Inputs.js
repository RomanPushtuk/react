import React , { Component } from 'react';
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
    const date = new Date(this.state.date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    console.log(this.state.text, `${month}/${day}/${year}`);

    const { add, updateStateMainComponent } = this.props;
    add(12, false, this.state.text, `${month}/${day}/${year}`);
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
              onChange={date => this.handleSetDate(date)}
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
