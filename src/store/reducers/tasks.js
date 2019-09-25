import moment from 'moment';

import {
  ADD_TASK,
  REMOVE_TASK,
  CHANGE_TASK,
  CHECK_TASK,
 } from '../../constants';

const initialState = [];

const tasks = (state = initialState, {
  type,
  id,
  text,
  check,
  date,
  direction,
  filterTasks,
  obj
 }) => {
  switch (type) {
      case ADD_TASK :
        return [
          ...state,
          { ...obj }
        ];

      case REMOVE_TASK :
        return [
           ...state.filter( item => id !== item.id)
        ];

      case CHANGE_TASK :
        return [
            ...state.map( item => item.id === id ? {
              ...item,
              text,
              date: moment(date).format("MM/DD/YYYY")
          } : item )
        ];

      case CHECK_TASK :
        return [
          ...state.map(item => item.id === id ? {
            ...item,
            check: !item.check
          } : item )
        ];

    default:
      return state;
  }
}


export default tasks;
