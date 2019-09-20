import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<NotFound debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render a "container-fluid"', () => {
    const component = shallow(<NotFound />)
    component.find('div.container-fluid');
    
    expect(component).toMatchSnapshot();
  });

  it('should render a .error.mx-auto component', () => {
    const component = shallow(<NotFound />);
    component.find('.error.mx-auto');

    expect(component).toMatchSnapshot();
  })

  it('should render a "Link to home" component', () => {
    const component = shallow(<NotFound />);
    component.find('Link');

    expect(component).toMatchSnapshot();
  })
});
