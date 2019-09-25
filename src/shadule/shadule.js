import moment from 'moment';
import { TASKS } from '../constants';

export function load(){
  const storageData = JSON.parse(localStorage.getItem(TASKS));
  if(!storageData){
    return [];
  }
  const makeArray = [];
  for (var key in storageData) {
    makeArray.push(storageData[key]);
  }
  return makeArray;
}

export function save(data){
  localStorage.setItem(TASKS, JSON.stringify(data))
}

export function guidGenerator(){
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export function sortDate(state, direction){
  return direction === "UP" ?
  state.sort((a, b) => moment(b.date, 'MM/DD/YYYY') - moment(a.date, 'MM/DD/YYYY')):
  state.sort((a, b) => moment(a.date, 'MM/DD/YYYY') - moment(b.date, 'MM/DD/YYYY'));
}

export function sortText(state, direction){
  return direction === "UP" ?
  state.sort((a,b) => (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0)):
  state.sort((a,b) => (a.text < b.text) ? 1 : ((b.text < a.text) ? -1 : 0));
}
