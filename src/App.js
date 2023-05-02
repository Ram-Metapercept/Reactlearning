import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import BookContainer from './reduxContainer/BookContainer';


function App() {
  return (
    <>
    <Provider store={store} >
<div className='App'>
<BookContainer/>
</div>
  </Provider>,
  </>
  );
}

// Wrap your app with the Provider component



export default App