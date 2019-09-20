import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('Item', () => {
  it('matches snapshot', () => {
    const component = shallow(<Item />);
    expect(component).toMatchSnapshot();
  });
});
