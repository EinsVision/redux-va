import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addToDo } from './store';

function Home({ toDos, dispatch }) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setText('');
    dispatch(addToDo(text));
  }

  return (
    <>
      <h1>To Do lists</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  )
}

// store로 부터 state를 가져다 줄것이다.
function mapStateToProps(state){
  return { toDos: state };
}

function mapDispatchToProps(dispatch){
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// connect : 나의 components들을 store에 연결시켜줌 ( state, dispatch )
