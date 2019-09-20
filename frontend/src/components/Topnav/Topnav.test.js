import React from 'react';
import { shallow } from 'enzyme';
import { Topnav } from './Topnav';

describe('Topnav', () => {
  it('matches snapshot', () => {
    const component = shallow(<Topnav />);
    expect(component).toMatchSnapshot();
  });
});
