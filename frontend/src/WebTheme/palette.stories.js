import React from 'react';
import { storiesOf } from '@storybook/react';
import { palette } from './index';
import Typography from '@material-ui/core/Typography';

const categoryName = 'WebTheme/';

storiesOf(categoryName, module).add('Palette', () => {
  return (
    <div style={{ marginTop: 20 }}>
      {Object.keys(palette).map(color => (
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <div style={{
            marginTop: 5,
            height: 20,
            width: 350,
            backgroundColor: palette[color],
          }}/>
          <Typography variant="caption" style={{ margin: 'auto 5px 0 5px'}}>
            {`${color}   ${palette[color]}`}
          </Typography>
        </div>
      ))}
    </div>
  );
});
