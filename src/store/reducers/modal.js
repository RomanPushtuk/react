import { OPEN_MODAL } from '../../constants';

const initialState = {
  id: '',
  text: '',
  date: null,
}

const modal = (state = initialState, { type, obj }) => {
  switch (type) {

    case OPEN_MODAL:
      return {
        ...obj
      }

    default:
      return state;
  }
}

export default modal;
