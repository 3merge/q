import React from 'react';
import ReactDOM from 'react-dom';
import { useBrowserEffect } from '../../hooks';

const ToolbarCollectionPortal = ({ children }) => {
  const [anchor, setAnchor] = React.useState();

  useBrowserEffect(
    () => {
      setAnchor(
        document.getElementById(
          'app-toolbar-collection-actions',
        ),
      );
    },
    [],
    {
      useLayout: true,
    },
  );

  return anchor
    ? ReactDOM.createPortal(children, anchor)
    : null;
};

export default ToolbarCollectionPortal;
