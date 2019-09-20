import React from 'react';
import { shallow } from 'enzyme';
import Routes from './index';

describe('Routes', () => {
  it('matches snapshot', () => {
    const component = shallow(<Routes />);
    expect(component).toMatchSnapshot();
  });

  it('has a "Switch" component', () => {
    const component = shallow(<Routes />)
    component.find('div.container-fluid');
    
    expect(component).toMatchSnapshot();
  });
});
