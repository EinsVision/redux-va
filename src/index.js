import { createStore } from 'redux';
// store : 나의 state (data) 를 담는 곳!

// reducer function은 나의 state (data)를 수정하는 곳이다.
// 오직 하나의 reducer 함수가 state 수정을 관리한다!!! Redux의 강력함이다.
const reducer = (state = 0, action) => {
  if(action.type === 'add'){
    state += 1;
  } else if (action.type === 'minus'){
    state -= 1;
  } else {
    state += 0;
  }
  return state;
}

const store = createStore(reducer);

console.log(store);
console.log(store.getState());

store.dispatch({ type: 'add'});
console.log(store.getState());

store.dispatch({ type: 'minus'});
console.log(store.getState());

store.dispatch({ type: 'add'});
console.log(store.getState());

store.dispatch({ type: 'add'});
console.log(store.getState());

store.dispatch({ type: 'add'});
console.log(store.getState());

