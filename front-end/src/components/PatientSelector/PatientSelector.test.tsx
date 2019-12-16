import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PatientSelector from './PatientSelector';
import { Provider } from 'react-redux';
import store from '../../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <PatientSelector/>
    </Provider>
      ,
    div);
});