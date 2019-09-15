export const add = (id, check, text, date) => ({
  type: 'ADD_TASK',
  id,
  check,
  text,
  date,
});

export const remove = id => ({
  type: 'REMOVE_TASK',
  id,
});

export const filterOnText = filterTasks => ({
  type: 'FILTER_TEXT',
  filterTasks,
})

export const filterOnDate = filterTasks => ({
  type: 'FILTER_DATE',
  filterTasks,
})

export const sortOnText = direction => ({
  type: 'SORT_TEXT',
  direction,
});

export const sortOnDate = direction => ({
  type: 'SORT_TEXT',
  direction,
});

export const openModal = (modalActive, id, text, date ) => ({
  type: 'OPEN_MODAL',
  modalActive,
  id,
  text,
  date,
});

export const closeModal = modalActive => ({
  type: 'CLOSE_MODAL',
  modalActive,
});

export const check = (id) => ({
  type: 'CHECK_TASK',
  id,
});

export const change = (id, text, date) => ({
  type: 'CHANGE_TASK',
  id,
  text,
  date
});
