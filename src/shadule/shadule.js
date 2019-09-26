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

export function filterText(state, textFilter) {
  console.log(textFilter);
  const tasks = JSON.parse(JSON.stringify(state));
  if (textFilter) {
    tasks.forEach(item => {
      if (!item.text.startsWith(textFilter)){
        item.visible = false;
      }
    });
  }
  return tasks;
}

export function filterDate(state, textDate) {
  console.log(textDate);
  const tasks = JSON.parse(JSON.stringify(state));
  if (textDate){
    tasks.forEach(item => {
      if (Date.parse(textDate) !== Date.parse(item.date)){
        item.visible = false;
      }
    });
  }
  return tasks;
}

export function sortDate(state, direction){
  const tasks = JSON.parse(JSON.stringify(state));
  if (direction) {
    return direction === "UP" ?
    tasks.sort((a, b) => moment(b.date, 'MM/DD/YYYY') - moment(a.date, 'MM/DD/YYYY')):
    tasks.sort((a, b) => moment(a.date, 'MM/DD/YYYY') - moment(b.date, 'MM/DD/YYYY'));
  }
  console.log("date", tasks);
  return tasks;
}

export function sortText(state, direction){
  const tasks = JSON.parse(JSON.stringify(state));
  // console.log("text", tasks);
  if (direction) {
    return direction === "UP" ?
    tasks.sort((a,b) => (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0)):
    tasks.sort((a,b) => (a.text < b.text) ? 1 : ((b.text < a.text) ? -1 : 0));
  }
  console.log("text", tasks);
  return tasks;
}
