export const add = obj => ({
  type: 'ADD_TASK',
  obj,
});

export const remove = id => ({
  type: 'REMOVE_TASK',
  id,
});

export const filter = filterTasks => ({
  type: 'FILTER',
  filterTasks,
})

export const sortOnText = direction => ({
  type: 'SORT_TEXT',
  direction,
});

export const sortOnDate = direction => ({
  type: 'SORT_DATE',
  direction,
});

export const openModal = obj => ({
  type: 'OPEN_MODAL',
  obj,
});

export const closeModal = modalActive => ({
  type: 'CLOSE_MODAL',
  modalActive,
});

export const check = id => ({
  type: 'CHECK_TASK',
  id,
});

export const change = (id, text, date) => ({
  type: 'CHANGE_TASK',
  id,
  text,
  date
});
