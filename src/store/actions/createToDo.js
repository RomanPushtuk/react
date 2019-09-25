import {
  ADD_TASK,
  REMOVE_TASK,
  CHANGE_TASK,
  CHECK_TASK,
  OPEN_MODAL,
 } from '../../constants';

export const add = obj => ({
  type: ADD_TASK,
  obj,
});

export const remove = id => ({
  type: REMOVE_TASK,
  id,
});

export const openModal = obj => ({
  type: OPEN_MODAL,
  obj,
});

export const check = id => ({
  type: CHECK_TASK,
  id,
});

export const change = (id, text, date) => ({
  type: CHANGE_TASK,
  id,
  text,
  date
});
