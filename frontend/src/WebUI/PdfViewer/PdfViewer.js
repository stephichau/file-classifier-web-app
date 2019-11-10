import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Document, Page } from 'react-pdf'

const PdfViewer = ({
  classes,
  url,
  i18n,
  onLoadSuccess,
  onLoadError,
  ...restOfProps
}) => {
  const [state, setState] = useState({
    numPages: null,
    pageNumber: 1,
  });

  const onGetLoadSuccess = ({ numPages }) => {
    onLoadSuccess();
    setState({ ...state, numPages });
  };

  const onGetLoadError = ({ message }) => {
    onLoadError();
    console.log(message);
  };

  const onPrevPage = () => {
    setState({
      ...state,
      pageNumber: state.pageNumber - 1 >= 0 ? state.pageNumber - 1 : 1,
    });
  };

  const onNextPage = () => {
    setState({
      ...state,
      pageNumber: state.pageNumber + 1,
    });
  };

  return (
    <div style={{ margin: '0 auto'}}>
      <div className={classes.buttonsContainer}>
        <div className={classes.pagesContainer}>
          <Button
            className={classes.button}
            onClick={onPrevPage}
            variant="outlined"
          >
            <Typography variant="caption">
              {i18n.previous}
            </Typography>
          </Button>
          <Typography
            className={classes.pageNumber}
            variant="caption"
          >
            {state.pageNumber} / {state.numPages || i18n.notAvailable}
          </Typography>
          <Button
            className={classes.button}
            onClick={onNextPage}
            variant="outlined"
          >
            <Typography variant="caption">
              {i18n.next}
            </Typography>
          </Button>
        </div>
        <Button
          className={classes.button}
          variant="outlined"
        >
          <a href={url} target="_blank" download>
            <Typography variant="caption">
              {i18n.download}
            </Typography>
          </a>
        </Button>
      </div>
      <div className={classes.documentContainer}>
        <Document
          file={url}
          onLoadSuccess={onGetLoadSuccess}
          onLoadError={onGetLoadError}
          {...restOfProps}
        >
          <Page pageNumber={state.pageNumber} width={600} />
        </Document>
      </div>
    </div>
  );
};

PdfViewer.defaultProps = {
  url: 'https://cass-upload.oss-cn-shenzhen.aliyuncs.com/test/1572231351651_ime88888_ENTERING.pdf',
  i18n: {
    previous: 'Prev',
    next: 'Next',
    download: 'Descargar',
    notAvailable: 'n/a',
  },
  onLoadSuccess: () => {},
  onLoadError: () => {},
};

PdfViewer.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string,
  i18n: PropTypes.shape({
    previous: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
    download: PropTypes.string.isRequired,
    notAvailable: PropTypes.string,
  }),
  onLoadSuccess: PropTypes.func,
  onLoadError: PropTypes.func,
};

export default PdfViewer;