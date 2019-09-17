import React , { Component } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Modal extends Component {
  state = {
    text : '',
    date: null,
  }

  handlerChangeText = ({ target: { value }}) => {
    this.setState({
      text: value,
    });
  }

  handlerChangeDate = (date) => {
    this.setState({
      date
    });
  }

  changeTask = () => {
    const { change } = this.props;
    if( !this.state.text && !this.state.date ){
      return change(this.props.modalData.id, this.props.modalData.text, this.props.modalData.date);
    }
    if( !this.state.text ){
      return change(this.props.modalData.id, this.props.modalData.text, this.state.date);
    }
    if( !this.state.date ){
      return change(this.props.modalData.id, this.state.text, this.props.modalData.date);
    }
    return change(this.props.modalData.id, this.state.text, this.state.date);
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
                    <DatePicker className="form-control" onChange={this.handlerChangeDate} selected={this.state.date ? new Date(this.state.date) : new Date(this.props.modalData.date)} />
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
