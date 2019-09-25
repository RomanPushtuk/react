import React , { Component } from 'react';
import './Item.css';

class Item extends Component {

  handlerOpenModal(id, text, date){
    const { openModal } = this.props;
    const modalObj = {
      id,
      text,
      date
    }
    openModal(modalObj);
  }

  handleCheck(id){
    const { check } = this.props;
    check(id);
  }

  hendlerRemove(id){
    const { remove } = this.props;
    remove(id);
  }

  render(){
    const {toDoList} = this.props;
    return (
      <ul className="items">
        {toDoList.map(({id, check, text, date , visible}) => {
          if (visible) {
            return (
              <li key={id} className="list-group-item">
                <span className="hover-cursor">
                  <i className="fa fa-lg"></i>
                </span>
                <span onClick={this.handleCheck.bind(this, id)} className={check ? "checked" : undefined}>
                  {text}
                </span>
                <span className="hover-cursor text-danger pull-right" onClick={this.hendlerRemove.bind(this, id)}>
                  <i className="fa fa-trash-o fa-lg"></i>
                </span>
                <span className="hover-cursor text-primary pull-right" data-toggle="modal" data-target="#myModal" onClick={this.handlerOpenModal.bind(this, id, text, date)}>
                  <i className="fa fa-cog fa-lg"></i>
                </span>
                <span className={check ? "checked pull-right" : "pull-right"}>
                  {date}
                </span>
              </li>
            )
          }
        return null;
        })}
      </ul>
    )
  }
};

export default Item;
