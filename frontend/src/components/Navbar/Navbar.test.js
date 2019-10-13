import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('matches snapshot', () => {
    const component = shallow(<Navbar sections={[]} />);
    expect(component).toMatchSnapshot();
  });
});
