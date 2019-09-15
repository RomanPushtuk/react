const storage = [];

const todo = {
  modalActive : false,
  filtersActive : false,
  filterItems : [],
  modalData : {
    id: '0',
    text: '',
    date: '11/11/2000',
  },
  items : [
    {
      id : '1',
      text : 'Текст 1',
      date: '11/12/2002',
      visible: true,
      check : false,
    },
    {
      id : '2',
      text : 'Текст 2',
      date: '11/12/2003',
      visible: true,
      check : false,
    },
    {
      id : '3',
      text : 'Текст 3',
      date: '11/12/2004',
      visible: true,
      check : true,
    },
    {
      id : '4',
      text : 'Текст 4',
      date: '11/12/2005',
      visible: true,
      check : false,
    },
  ],

}

export function getItems(state = todo) {
  return state.items;
}

const tasks = (state = todo, { type, modalActive, id, text, check, date, direction, value, filterTasks }) => {
  switch (type) {
    case 'ADD_TASK':
      return {
        ...state,
        items: [
          ...state.items,
          { id, text, check, date, visible: true },
        ],
      }

    case 'OPEN_MODAL':
      return {
        ...state,
        modalActive: !state.modalActive,
        modalData: {
          id,
          text,
          date,
        }
      }

    case 'REMOVE_TASK':
      return {
        ...state,
        items: state.items.filter( item => id !== item.id),
      }

    case 'CHANGE_TASK':
      const daTe = new Date(date);
      const day = daTe.getDate();
      const month = daTe.getMonth() + 1;
      const year = daTe.getFullYear();
      return {
        ...state,
        items: state.items.map( item => item.id === id ? {
          ...item,
          text: text,
          date: `${month}/${day}/${year}`,
        } : item ),
      }

    case 'FILTER_TEXT':
      return {
        ...state,
        items: filterTasks
      }

    case 'FILTER_DATE':
      return {
        ...state,
        items: filterTasks
      }

    case 'CHECK_TASK':
      return {
        ...state,
        items: state.items.map(item => item.id === id ? {
          ...item,
          check: !item.check,
        } : item ),
      }

    case 'SORT_TEXT':
      const itemsSortText = direction == "UP" ?
      state.items.sort((a,b) => (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0)) :
      state.items.sort((a,b) => (a.text < b.text) ? 1 : ((b.text < a.text) ? -1 : 0));
      return {
        ...state,
        items: itemsSortText,
      }


    case 'SORT_DATE':
      const itemsSortDate = direction == "UP" ?
      state.items.sort((a, b) => new Date(b.date) - new Date(a.date)):
      state.items.sort((a, b) => new Date(a.date) - new Date(b.date));
      return {
        ...state,
        items: itemsSortDate,
      }

    default:
      return state;
  }
}


export default tasks;
