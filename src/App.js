import { Provider } from 'react-redux';
import Body from './Components/Body';
import React from 'react';
import appStore from './utils/appStore';
function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}
export default App;
