import React from 'react';
import './Colors.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import actions from '../../store/actions';
import PageHeader from '../../components/PageHeader/PageHeader';

export const colors = (props) => {
  const { t } = useTranslation();
  const columns = [
    {
      Header: t('id'),
      accessor: 'id'
    }, {
      Header: t('name'),
      accessor: 'name',
    }, {
      Header: t('year'),
      accessor: 'year'
    }, {
      Header: t('hexadecimal value'),
      accessor: 'color'
    }, {
      Header: t('pantone value'),
      accessor: 'pantone_value'
    }
  ];
  const { data } = props;

  return (
    <div className="container-fluid">
      <PageHeader title="colors" />
      <ReactTable
        data={data}
        columns={columns}
        previousText={t('previous')}
        nextText={t('next')}
        loadingText={t('loading')}
        noDataText={t('no rows found')}
        pageText={t('page')}
        ofText={t('of')}
        rowsText={t('rows')}
        pageJumpText={t('jump to page')}
        rowsSelectorText={t('rows per page')}
      />
    </div>
  );
};

colors.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      pantone_value: PropTypes.string.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => (
  {
    data: state.reqres.colors
  }
);

const mapDispatchToProps = dispatch => (
  {
    getData: dispatch({ type: actions.reqres.GET_COLORS_REQUEST })
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(colors));
