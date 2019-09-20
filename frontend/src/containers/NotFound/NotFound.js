import React from 'react';
import { Trans } from 'react-i18next';
import './NotFound.scss';
import {Link} from "react-router-dom";

const not_found = () => {
  return (
    <div className="container-fluid">
      <div className="text-center">
        <div className="error mx-auto" data-text="404">404</div>
        <p className="lead text-gray-800 mb-5"><Trans>not found</Trans></p>
        <p className="text-gray-500 mb-0"><Trans>it looks like you found a glitch in the matrix</Trans>...</p>
        <Link to="/">&larr; <Trans>back to home</Trans></Link>
      </div>
    </div>
  );
};

export default not_found;
