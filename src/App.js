import React , { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { add, remove, openModal, change, check } from './store/actions/createToDo';

import { sortText, sortDate, filterText, filterDate } from './shadule/shadule';

import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Inputs from './components/inputs/Inputs';
import Modal from './components/modal/Modal';
import Item from './components/item/Item';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filterData : {
        textDirection : "",
        dateDirection : "",
        textFilter : "",
        dateFilter : "",
      },
    }
  }

  setFilterData = newFilters => {
    this.setState({
      filterData : {
        ...this.state.filterData,
        ...newFilters,
      }
    });
  }

  filter = () => {
    let tasks = [...this.props.tasks];
    const { textDirection, dateDirection, textFilter, dateFilter } = this.state.filterData;
    const filter1 = sortText(tasks, textDirection);
    const filter2 = sortDate(filter1, dateDirection);
    const filter3 = filterText(filter2, textFilter);
    const filterTasks = filterDate(filter3, dateFilter);
    return filterTasks || tasks;
  }

  render () {
    const {
       add,
       remove,
       check,
       change,
       tasks,
       modal,
       openModal,
     } = this.props;

    return (
      <div className="col-md-6 offset-md-3">
        <Filters
          setFilterData={this.setFilterData}
        />
        <Header />
        <Inputs
          add={add}
        />
        <Item
          toDoList={this.filter()}
          remove={remove}
          openModal={openModal}
          check={check}
        />
        <Modal
          change={change}
          modalData={modal}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  modal: state.modal,
})

const mapDispatchToProps = {
  add,
  remove,
  openModal,
  change,
  check
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
