import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Home debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render a "container-fluid"', () => {
    const component = shallow(<Home />)
    component.find('div.container-fluid');
    
    expect(component).toMatchSnapshot();
  });
  
  it('should render a "PageHeader" component', () => {
    const component = shallow(<Home />)
    component.find('PageHeader');
    
    expect(component).toMatchSnapshot();
  });
});
