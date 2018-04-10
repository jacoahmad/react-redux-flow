import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Layout from '../Layout';

describe('Layout', () => {
  it('Should render without crashing', () => 
    expect(shallow(<Layout />)).toMatchSnapshot()
  );
});