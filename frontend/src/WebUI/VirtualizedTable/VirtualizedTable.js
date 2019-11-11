import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TableCell from '@material-ui/core/TableCell';
import { AutoSizer, Column, Table } from 'react-virtualized';

const VirtualizedTable = ({
  classes,
  columns,
  rowHeight,
  headerHeight,
  onRowClick,
  ...restOfProps
}) => {

  const getRowClassName = ({ index }) => {

    return classnames(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  const cellRenderer = ({ cellData, columnIndex }) => (
    <TableCell
      component="div"
      className={classnames(classes.tableCell, classes.flexContainer, {
        [classes.noClick]: onRowClick == null,
      })}
      variant="body"
      style={{ height: rowHeight }}
      align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
    >
      {cellData}
    </TableCell>
  );

  const headerRenderer = ({ label, columnIndex }) => (
    <TableCell
      component="div"
      className={classnames(classes.tableCell, classes.flexContainer, classes.noClick)}
      variant="head"
      style={{ height: headerHeight }}
      align={columns[columnIndex].numeric || false ? 'right' : 'left'}
    >
      <span>{label}</span>
    </TableCell>
  );

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Table
          height={height}
          width={width}
          rowHeight={rowHeight}
          gridStyle={{
            direction: 'inherit',
          }}
          headerHeight={headerHeight}
          className={classes.table}
          {...restOfProps}
          rowClassName={getRowClassName}
        >
          {columns.map(({ dataKey, ...other }, index) => {
            return (
              <Column
                key={dataKey}
                headerRenderer={headerProps =>
                  headerRenderer({
                    ...headerProps,
                    columnIndex: index,
                  })
                }
                className={classes.flexContainer}
                cellRenderer={cellRenderer}
                dataKey={dataKey}
                {...other}
              />
            );
          })}
        </Table>
      )}
    </AutoSizer>
  );
};

VirtualizedTable.defaultProps = {
  onRowClick: () => {},
};

VirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

export default VirtualizedTable;
