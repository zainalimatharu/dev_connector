import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faUser,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          <FontAwesomeIcon icon={faUsers} size="sm" /> <span>Developers</span>
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faUser} size="sm" /> <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <FontAwesomeIcon icon={faSignOutAlt} size="sm" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          <FontAwesomeIcon icon={faUsers} size="sm" /> <span>Developers</span>
        </Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> DevConnector
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
