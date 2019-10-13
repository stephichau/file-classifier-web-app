import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

describe('Icon', () => {
  it('matches snapshot', () => {
    const component = shallow(<Icon />);
    expect(component).toMatchSnapshot();
  });
});
