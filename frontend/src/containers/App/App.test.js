import React from 'react';
import { mount, shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render a "wrapper"', () => {
    const component = shallow(<App />)
    component.find('div.wrapper');
    
    expect(component).toMatchSnapshot();
  });

  it('should render a BrowserRouter component', () => {
    const component = shallow(<App />);
    component.find('BrowserRouter');

    expect(component).toMatchSnapshot();
  })

  it('should render a "Routes" component', () => {
    const component = shallow(<App />);
    component.find('Routes');

    expect(component).toMatchSnapshot();
  })
});
