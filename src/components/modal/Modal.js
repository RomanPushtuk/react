import React , { Component, useState } from 'react';
// import './Modal.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Modal extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : '',
      date: '11/11/2000',
    }
  }

  handlerChangeText = ({ target: { value }}) => {
    this.setState({
      ...this.props.modalData,
      ...this.state,
      text: value,
    });
  }

  handlerChangeDate = (date) => {
    this.setState({
      ...this.props.modalData,
      ...this.state,
      date
    });
    console.log(this.props.modalData);
    console.log(this.state);
  }

  changeTask = () => {
    const { change } = this.props;
    change(this.props.modalData.id, this.state.text, this.state.date);
    this.setState({});
  }

  render () {
    return (
      <div id="myModal" tabIndex="-1" role="dialog" className="modal fade" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="modal-basic-title">Изменение данных</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Текст</label>
                  <input type="text" className="form-control" onChange={this.handlerChangeText} defaultValue={this.state.text ? this.state.text : this.props.modalData.text} />
                  <label>Время</label>
                  <div className="input-group">
                    <DatePicker className="form-control" onChange={this.handlerChangeDate} selected={new Date(this.state.date ? this.state.date : this.props.modalData.date )} />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-dark" data-dismiss="modal" aria-label="Close" onClick={this.changeTask}>
                Save
              </button>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default Modal;
