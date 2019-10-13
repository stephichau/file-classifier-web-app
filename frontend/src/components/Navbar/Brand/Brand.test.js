import React from 'react';
import { shallow } from 'enzyme';
import Brand from './Brand';

describe('Brand', () => {
  it('matches snapshot', () => {
    const component = shallow(<Brand />);
    expect(component).toMatchSnapshot();
  });
});
