import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faUserTie,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';

const DashboardActions = () => {
  return (
    <div class="dash-buttons">
      <Link to="/edit-profile" class="btn btn-light">
        <FontAwesomeIcon icon={faUserCircle} size="lg" /> Edit Profile
      </Link>
      <Link to="/add-experience" class="btn btn-light">
        <FontAwesomeIcon icon={faUserTie} size="lg" /> Add Experience
      </Link>
      <Link to="/add-education" class="btn btn-light">
        <FontAwesomeIcon icon={faGraduationCap} size="lg" /> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
