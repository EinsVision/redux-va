import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import store from './routes/store';

ReactDOM.render(
  <Provider store={store}>
    {/* /이제 App 컴포넌트는 Store에 접근이 가능하다. */}
    <App />
  </Provider>, 
  document.getElementById("root")
);