import React , { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { add, remove, openModal, sortOnText, sortOnDate, filterOnText, filterOnDate, change, check } from './store/actions/createToDo';

import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Inputs from './components/inputs/Inputs';
import Modal from './components/modal/Modal';
import Item from './components/item/Item';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filterTasks : this.props.tasks.items,
    }
  }

  updateStateMainComponent = (value = null) => {
    if(value){
      this.setState({ filterTasks : value });
    } else {
      this.setState({ filterTasks : this.props.tasks.items });
    }
  }

  render () {
    const { tasks, add, remove, openModal, sortOnText, sortOnDate, filterOnText, filterOnDate, change, check } = this.props;

    return (
      <div className="col-md-6 offset-md-3">
        <Filters
          sortOnText={sortOnText}
          sortOnDate={sortOnDate}
          filterOnText={filterOnText}
          filterOnDate={filterOnDate}
          toDoList={tasks.items}/>
        <Header />
        <Inputs add={add} />
        <Item toDoList={tasks.items} remove={remove} openModal={openModal} check={check} />
        <Modal active={tasks.modalActive} change={change} modalData={tasks.modalData}/>
      </div>
    )
  }
}

export default connect(state => ({
  tasks: state.tasks,
}), { add, remove, openModal, sortOnText, sortOnDate, filterOnText, filterOnDate, change, check })(App);
