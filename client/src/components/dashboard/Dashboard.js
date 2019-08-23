// @Short_key rafcp => import React from 'react';
import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMinus } from '@fortawesome/free-solid-svg-icons';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashbaord</h1>
      <p className="lead">
        <FontAwesomeIcon icon={faUser} size="sm" />
        Welcome {profile !== null && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className="my-2">
            <button onClick={() => deleteAccount()} className="btn btn-danger">
              <FontAwesomeIcon icon={faUserMinus} size="sm" /> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not set up a Profile!</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
