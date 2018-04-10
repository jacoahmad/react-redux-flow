import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';

describe('App', () => {
  it('Should render without crashing', () => 
    expect(shallow(<App />)).toMatchSnapshot()
  );
});