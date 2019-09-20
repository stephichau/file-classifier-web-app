import React from 'react';
import { shallow } from 'enzyme';
import ScrollToTop from './ScrollToTop';

describe('ScrollToTop', () => {
  it('matches snapshot', () => {
    const component = shallow(<ScrollToTop />);
    expect(component).toMatchSnapshot();
  });
});
