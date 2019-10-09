import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';

const SkeletonSmallInfoCard = ({
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
          <Skeleton height={20} width={240} variant="rect" />
        </Typography>
        {subtitle && (
          <Typography>
            <Skeleton height={20} width={340} variant="rect" />
          </Typography>
        )}
      </div>
    )}
    {children}
  </Paper>
);

SkeletonSmallInfoCard.defaultProps = {
  title: false,
  subtitle: false,
  children: undefined,
  borderStyle: 'default',
};

SkeletonSmallInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.bool,
  subtitle: PropTypes.bool,
  children: PropTypes.node,
  borderStyle: PropTypes.oneOf(['solid', 'dotted']),
};

export default SkeletonSmallInfoCard;
