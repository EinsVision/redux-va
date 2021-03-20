import { createStore } from 'redux';
// store : 나의 state (data) 를 담는 곳!

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');


// reducer function은 나의 state (data)를 수정하는 곳이다.
// 오직 하나의 reducer 함수가 state 수정을 관리한다!!! Redux의 강력함이다.
const reducer = (state = 0, action) => {
  if(action.type === 'add'){
    return state += 1;
  } else if (action.type === 'minus'){
    return state -= 1;
  } else {
    return state += 0;
  }
}

const store = createStore(reducer);

const handleAdd = () => {
  store.dispatch({ type: 'add'});
  console.log('handleAdd called');
}

const handleMinus = () => {
  store.dispatch({ type: 'minus'});
  console.log('handleMinus called');
}

const onChange = () => {
  // console.log(store.getState());
  // console.log('hello onChnage');
  number.innerText = store.getState();
}

store.subscribe(onChange);

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);



// console.log(store);
// console.log(store.getState());

// store.dispatch({ type: 'add'});
// console.log(store.getState());

// store.dispatch({ type: 'minus'});
// console.log(store.console.log(store););

// store.dispatch({ type: 'add'});
// console.log(store.getState());

// store.dispatch({ type: 'add'});
// console.log(store.getState());

// store.dispatch({ type: 'add'});
// console.log(store.getState());

