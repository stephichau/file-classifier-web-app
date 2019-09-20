import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('Colors', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Colors debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render a "container-fluid"', () => {
    const component = shallow(<Colors />)
    component.find('div.container-fluid');
    
    expect(component).toMatchSnapshot();
  });

  it('should render a PageHeader component', () => {
    const component = shallow(<Colors />);
    component.find('PageHeader');

    expect(component).toMatchSnapshot();
  });

  it('should render a "ReactTable" component', () => {
    const component = shallow(<Colors />);
    component.find('ReactTable');

    expect(component).toMatchSnapshot();
  });
});
