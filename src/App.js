import React , { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { add, remove, openModal, change, check } from './store/actions/createToDo';

import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Inputs from './components/inputs/Inputs';
import Modal from './components/modal/Modal';
import Item from './components/item/Item';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tasks : this.props.tasks,
      filter : false,
    }
  }

  getData = newState => {
    this.setState({
      ...newState,
    });
  }

  // Эта штука нужна для того, чтобы понимать когда пользователь закончил работать с фильтрами
  // Тоесть когда у нас пользователь работает с сортировками и фильтрами он использует
  // с this.state, но когда мы что-то добаляем в store, переключаем флаг this.state.filter = fasle
  // (выключаем работу с фильтрами) и добавляем данные в store
  // Не придумал , другого норм способа.
  update = () => {
    this.setState(function(state, props) {
      return {
        tasks : props.tasks,
        filter : false,
      }
    });
  }

  add = newTask => {
    const { add } = this.props;
    add(newTask);
    this.update();
  }

  remove = id => {
    const { remove } = this.props;
    remove(id);
    this.update();
  }

  check = id => {
    const { check } = this.props;
    check(id);
    this.update();
  }

  change = (id, text, date) => {
    const { change } = this.props;
    change(id, text, date);
    this.update();
  }

  render () {
    const {
       tasks,
       modal,
       openModal,
     } = this.props;

    return (
      <div className="col-md-6 offset-md-3">
        <Filters
          getData={this.getData}
          toDoList={this.state.tasks}
        />
        <Header />
        <Inputs
          add={this.add}
        />
        <Item
          toDoList={this.state.filter ? this.state.tasks : tasks}
          remove={this.remove}
          openModal={openModal}
          check={this.check}
        />
        <Modal
          change={this.change}
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
