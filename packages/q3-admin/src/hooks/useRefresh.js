import React from 'react';
import { debounce } from 'lodash';
import { browser } from 'q3-ui-helpers';
import { Definitions } from '../containers/state';
import { makeEventName } from './useServerSideEvents';
import { invokeDocumentListener } from './useNotifications';

export default (onChange, debounceValue = 15000) => {
  const { collectionName, id } = React.useContext(
    Definitions,
  );

  const handleWatch = debounce((e) => {
    const noop = () => null;

    if (
      !onChange ||
      !browser.isBrowserReady() ||
      (id && e?.data?.id !== id)
    )
      return null;

    return onChange(window.location.search, e?.data)
      .then(noop)
      .catch(noop);
  }, debounceValue);

  React.useEffect(() => {
    const event = makeEventName(collectionName);
    invokeDocumentListener(event, handleWatch);

    return () => {
      invokeDocumentListener(event);
    };
  }, [collectionName, id]);
};
