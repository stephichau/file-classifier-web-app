import React from 'react';
import PropTypes from 'prop-types';
import GenericFormStructure from '../GenericFormStructure';

const SheetMakerForm = ({
  classes,
  config,
  ...restOfProps
}) => {
  return (
    <GenericFormStructure
      {...restOfProps}
    >
      {
        config.map(option => {
          const Component = option.component;
          <Component {...option} component={null} />
        })
      }
    </GenericFormStructure>
  );
};

SheetMakerForm.defaultProps = {

};

SheetMakerForm.propTypes = {
  classes: PropTypes.object.isRequired,
  config: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired).isRequired
};

export default SheetMakerForm;
