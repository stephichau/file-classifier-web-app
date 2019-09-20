import React from 'react';
import { shallow } from 'enzyme';
import Users from './Users';

describe('Users', () => {
  it('matches snapshot', () => {
    const component = shallow(<Users />);
    expect(component).toMatchSnapshot();
  });

  it('should render a "container-fluid"', () => {
    const component = shallow(<Users />)
    component.find('div.container-fluid');
    
    expect(component).toMatchSnapshot();
  });

  it('should render a PageHeader component', () => {
    const component = shallow(<Users />);
    component.find('PageHeader');

    expect(component).toMatchSnapshot();
  });

  it('should render a "ReactTable" component', () => {
    const component = shallow(<Users />);
    component.find('ReactTable');

    expect(component).toMatchSnapshot();
  });
});
