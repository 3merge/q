import React from 'react';
import Page from '../containers/page';
import Collection from '../containers/collection';
import Article from '../components/Article';
import { useUnsavedChanges } from '../hooks';
import withCollectionUi from '../helpers/withCollectionUi';

export const getCollectionInformation = ({
  resourceName,
  resourceNameSingular,
  collectionName,
  ...rest
}) => ({
  resourceName,
  resourceNameSingular,
  collectionName: collectionName || resourceName,
  ...rest,
});

export default ({
  icon,
  PageDetail,
  PageDetailProps,
  PageList,
  PageListProps,
  ...etc
}) => [
  {
    id: true,
    ...getCollectionInformation(etc),
    component: (props) => {
      // integrated with q3-ui-forms
      useUnsavedChanges();

      return (
        <Collection id {...props}>
          <Page id {...props} {...PageDetailProps}>
            <PageDetail />
          </Page>
        </Collection>
      );
    },
  },
  {
    icon,
    index: true,
    ...getCollectionInformation(etc),
    component: withCollectionUi(
      (props) => (
        <Collection index {...PageListProps} {...props}>
          <Article>
            <Page index {...props} {...PageListProps}>
              <PageList
                {...PageListProps}
                ui={props?.ui}
                uis={props?.uis}
              />
            </Page>
          </Article>
        </Collection>
      ),
      PageListProps,
    ),
  },
];
