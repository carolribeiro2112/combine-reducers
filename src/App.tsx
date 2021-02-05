import React from 'react';
import { Provider } from 'react-redux';
import {store} from './store';
import User from './components/Users';
import Todos from './components/Todos';


function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <User />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
