import React from 'react';
import AbstractCollectionBuilder from 'q3-admin/lib/builders';
import Add from './Add';
import Filters from './Filters';
import General from './General';
import Docs from './Docs';
import useIo from '../../../src/hooks/useIo';

export default new AbstractCollectionBuilder({
  resourceName: 'shows',
  resourceNameSingular: 'show',
  parent: 'entertainment',
})
  .genUserOptions('Developer', {
    all: true,
  })
  .genResolver(
    ({ id, name, description, createdAt, updatedAt }) => ({
      id,
      name,
      description,
      createdAt: {
        base: createdAt,
        toDate: true,
      },
      updatedAt: {
        base: updatedAt,
        toDate: true,
      },
    }),
  )
  .genHeader({
    titleProp: 'name',
  })
  .genNew(Add)
  .genFilter(Filters)
  .genViews({
    General,
  })
  .genList({
    io: {
      exports: ['orders'],
      imports: [],
      // eslint-disable-next-line
      renderer: () => <p>Look at me!</p>,
    },
    renderCustomRowActions: (row) => {
      const { exportCollection } = useIo(row.id);
      return <p>FN</p>;
    },
  })
  .genListSettings({
    defaultSortPreference: 'name',
  })
  .genDetail({
    picture: true,
    files: true,
    notes: true,
    documentation: <Docs />,
  })
  .build();
