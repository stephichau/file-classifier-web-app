import React from 'react';
import PropTypes from 'prop-types';
import GenericFormStructure from '../GenericFormStructure';

const ClassifyFilesForm = ({
  classes,
  config,
  ...restOfProps
}) => {
  const renderComponent = (option) => {
    const { component: Component, ...restOfProps } = option;
    return <Component {...restOfProps} />;
  };
  return (
    <GenericFormStructure
      {...restOfProps}
    >
      <div className={classes.container}>
        {
          config.map(option => renderComponent(option))
        }
      </div>
    </GenericFormStructure>
  );
};

ClassifyFilesForm.propTypes = {
  classes: PropTypes.object.isRequired,
  config: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired).isRequired,
};

export default ClassifyFilesForm;

