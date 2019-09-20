import React from 'react';
import './Topnav.scss';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import actions from '../../store/actions';

export const Topnav = (props) => {
  const {
    navbarExpanded, expandNavbar, collapseNavbar, userDropExpanded, expandUserDrop,
    collapseUserDrop, username, avatar, links
  } = props;
  const toggleNavbar = () => (navbarExpanded ? collapseNavbar() : expandNavbar());
  const toggleUserDrop = () => (userDropExpanded ? collapseUserDrop() : expandUserDrop());

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="navbarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
        onClick={toggleNavbar}
        type="button"
      >
        <Icon icon="bars" />
      </button>

      <ul className="navbar-nav ml-auto">
        <li className={`nav-item dropdown no-arrow${userDropExpanded ? ' show' : ''}`}>
          <button
            className="nav-link dropdown-toggle"
            id="userDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={toggleUserDrop}
            type="button"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{ username }</span>
            <img className="img-profile rounded-circle" src={avatar} alt="avatar" />
          </button>
          <div
            className={`dropdown-menu dropdown-menu-right shadow animated--grow-in${userDropExpanded ? ' show' : ''}`}
            aria-labelledby="userDropdown"
          >
            { links.map((link) => {
              const {
                divider, href, name, icon
              } = link;
              if (divider) {
                return (
                  <div key={`dropdown-divider-${Date.now}`} className="dropdown-divider" />
                );
              }
              return (
                <Link key={`dropdown-link-${name}`} className="dropdown-item" to={href}>
                  <Icon icon={icon} options="fa-sm fa-fw mr-2 text-gray-400" />
                  <Trans>{name}</Trans>
                </Link>
              );
            })}
          </div>
        </li>
      </ul>
    </nav>
  );
};

Topnav.propTypes = {
  navbarExpanded: PropTypes.bool.isRequired,
  expandNavbar: PropTypes.func.isRequired,
  collapseNavbar: PropTypes.func.isRequired,
  userDropExpanded: PropTypes.bool.isRequired,
  expandUserDrop: PropTypes.func.isRequired,
  collapseUserDrop: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string,
        icon: PropTypes.string
      }),
      PropTypes.shape({
        divider: PropTypes.bool
      })
    ])
  )
};

Topnav.defaultProps = {
  links: []
};

const mapStateToProps = state => (
  {
    userDropExpanded: state.global.userDropExpanded,
    navbarExpanded: state.global.navbarExpanded,
    username: state.global.username,
    avatar: state.global.avatar
  }
);

const mapDispatchToProps = dispatch => (
  {
    expandNavbar: () => {
      dispatch({ type: actions.ui.expandNavbar });
    },
    collapseNavbar: () => {
      dispatch({ type: actions.ui.COLLAPSE_NAVBAR });
    },
    expandUserDrop: () => {
      dispatch({ type: actions.ui.EXPAND_USER_DROPDOWN });
    },
    collapseUserDrop: () => {
      dispatch({ type: actions.ui.COLLAPSE_USER_DROPDOWN });
    }
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Topnav));
