import React , { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { add, remove, openModal, sortOnText, sortOnDate, filter, change, check } from './store/actions/createToDo';

import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Inputs from './components/inputs/Inputs';
import Modal from './components/modal/Modal';
import Item from './components/item/Item';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filterTasks : this.props.tasks,
    }
  }

  render () {
    const { tasks, filter, modal, add, remove, openModal, sortOnText, sortOnDate, change, check } = this.props;

    return (
      <div className="col-md-6 offset-md-3">
        <Filters
          sortOnText={sortOnText}
          sortOnDate={sortOnDate}
          filter={filter}
          toDoList={tasks}/>
        <Header />
        <Inputs add={add} />
        <Item toDoList={tasks} remove={remove} openModal={openModal} check={check} />
        <Modal change={change} modalData={modal}/>
      </div>
    )
  }
}

export default connect(state => ({
  tasks: state.tasks,
  modal: state.modal,
}), { add, remove, openModal, sortOnText, sortOnDate, filter, change, check })(App);
