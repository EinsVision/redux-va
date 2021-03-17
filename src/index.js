import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// reducer 나의 state (data) 를 수정하는 함수이다.
const reducer = (state = 0, action) => {
  if(action.type === 'ADD'){
    console.log('reducer action is ADD')
    state++;
    console.log('state: ',state);
    return state;
  } else if (action.type === 'MINUS') {
    console.log('reducer action is MINUS')
    state--;
    console.group('state: ', state);
    return state;
  } else {
    return state;
  }
  
}

const store = createStore(reducer); //나의 data를 저장하는 곳.

console.log('store: ', store.getState());

// store.dispatch({type: 'ADD'});
// store.dispatch({type: 'ADD'});
// store.dispatch({type: 'ADD'});
// store.dispatch({type: 'ADD'});
// store.dispatch({type: 'MINUS'});

const handleAdd = () => {
  store.dispatch({ type: 'ADD '})
}

const handleMinus = () => {
  store.dispatch({ type: 'MINUS '})
}
add.addEventListener('click', handleAdd );
minus.addEventListener('click', handleMinus );

console.log('store: ', store.getState());