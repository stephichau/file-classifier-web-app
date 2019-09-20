import React from 'react';
import { Trans } from 'react-i18next';
import './Error.scss';
import { Link } from 'react-router-dom';

const error = () => (
  <div className="container-fluid">
    <div className="text-center">
      <div className="error mx-auto" data-text="500">500</div>
      <p className="lead text-gray-800 mb-5"><Trans>something went wrong</Trans></p>
      <p className="text-gray-500 mb-0">
        <Trans>sorry, but something bad just happened. </Trans>
        <Trans>our engineers will be informed immediately.</Trans>
      </p>
      <Link to="/">
        &larr;
        <Trans>
          back to home
        </Trans>
      </Link>
    </div>
  </div>
);

export default error;
