import moment from 'moment';
import { save, sortDate, sortText} from '../../shadule/shadule';
import { getTasks } from '../sellectors/sellectors';

import {
  ADD_TASK,
  REMOVE_TASK,
  CHANGE_TASK,
  CHECK_TASK,
  FILTER,
  SORT_TEXT,
  SORT_DATE,
 } from '../../constants';

const tasks = (state = getTasks(), {
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
        return save([
          ...state,
          { ...obj }
        ]);

      case REMOVE_TASK :
        return save([
           ...state.filter( item => id !== item.id)
        ]);

      case CHANGE_TASK :
        return save([
            ...state.map( item => item.id === id ? {
              ...item,
              text,
              date: moment(date).format("MM/DD/YYYY")
          } : item )
        ]);

      case CHECK_TASK :
        return save([
          ...state.map(item => item.id === id ? {
            ...item,
            check: !item.check
          } : item )
        ]);

      case FILTER :
        return [...filterTasks];

      case SORT_TEXT :
        const itemsSortText = sortText(state, direction);
        return [...itemsSortText];


      case SORT_DATE :
        const itemsSortDate = sortDate(state, direction);
        return [...itemsSortDate];

    default:
      return state;
  }
}


export default tasks;
