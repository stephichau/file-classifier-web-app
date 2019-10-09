import React from 'react';

export default passingProps => (Component) => {
  const WrappedComponent = (props) => {
    const wrappedProps = passingProps(props);
    return <Component {...wrappedProps} />;
  }
  return WrappedComponent;
};