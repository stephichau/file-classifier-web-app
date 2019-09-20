import React from 'react';
import { shallow } from 'enzyme';
import Divider from './Divider';

describe('Divider', () => {
  it('matches snapshot', () => {
    const component = shallow(<Divider />);
    expect(component).toMatchSnapshot();
  });
});
