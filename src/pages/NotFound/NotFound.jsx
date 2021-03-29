import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => (
  <div className="not-found">
    <h1 className="not-found__title">404</h1>
    <h2 className="not-found__subtitle">PAGE NOT FOUND</h2>
    <Link to="/">Back to Homepage</Link>
  </div>
);

export default NotFound;
