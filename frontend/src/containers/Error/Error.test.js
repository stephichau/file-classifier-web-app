import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Error debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render a "container-fluid"', () => {
    const component = shallow(<Error />)
    component.find('div.container-fluid');
    
    expect(component).toMatchSnapshot();
  });

  it('should render a .error.mx-auto component', () => {
    const component = shallow(<Error />);
    component.find('.error.mx-auto');

    expect(component).toMatchSnapshot();
  })

  it('should render a "Link to home" component', () => {
    const component = shallow(<Error />);
    component.find('Link');

    expect(component).toMatchSnapshot();
  })
});
