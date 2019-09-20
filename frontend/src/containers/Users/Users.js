import React from 'react';
import './Users.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import actions from '../../store/actions';
import PageHeader from '../../components/PageHeader/PageHeader';

export const users = (props) => {
  const { t } = useTranslation();
  const columns = [
    {
      Header: t('id'),
      accessor: 'id'
    },
    {
      Header: t('first name'),
      accessor: 'first_name'
    },
    {
      Header: t('last name'),
      accessor: 'last_name'
    },
    {
      Header: t('avatar'),
      accessor: 'avatar'
    }
  ];
  const { data } = props;

  return (
    <div className="container-fluid">
      <PageHeader title="users" />
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

users.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    avatar: PropTypes.string
  })).isRequired
};

const mapStateToProps = state => ({
  data: state.reqres.users
});

const mapDispatchToProps = dispatch => ({
  getData: dispatch({ type: actions.reqres.GET_USERS_REQUEST })
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(users)
);
