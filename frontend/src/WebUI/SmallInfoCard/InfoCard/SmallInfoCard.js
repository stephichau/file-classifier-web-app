import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import classnames from 'classnames';

const SmallInfoCard = ({
  classes,
  title,
  subtitle,
  children,
  borderStyle,
}) => (
  <Paper
    elevation={0}
    className={classnames(classes.container, classes[borderStyle])}
  >
    {title && (
      <div className={classnames(classes.textContainer, {
        [classes.onlyTitle]: !subtitle,
      })}>
        <Typography className={classes.title}>
          {title}
        </Typography>
        {subtitle && (
          <Typography>
            {subtitle}
          </Typography>
        )}
      </div>
    )}
    {children}
  </Paper>
);

SmallInfoCard.defaultProps = {
  title: undefined,
  subtitle: undefined,
  children: undefined,
  borderStyle: 'solid',
};

SmallInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  borderStyle: PropTypes.oneOf(['solid', 'dotted'])
};

export default SmallInfoCard;
