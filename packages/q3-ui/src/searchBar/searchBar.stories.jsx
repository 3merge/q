import React from 'react';
import { withLocation } from 'with-location';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Search from '.';

const getOptions = (s) => {
  return fetch(
    `https://rickandmortyapi.com/api/character?page=1&name=${s}`,
  )
    .then((o) => o.json())
    .then(({ results }) => {
      return results.map((r) => ({
        name: r.name,
        description: r.species,
        photo: r.image,
        url: r.url,
      }));
    });
};

export default {
  title: 'Q3 UI|Components/Search',
  parameters: {
    component: Search,
    componentSubtitle: 'Expandable search bar',
  },
};

export const Example = withLocation(({ params }) => (
  <>
    <Search getResults={getOptions} redirectPath="/" />
    <Box p={2}>
      <Typography>
        {`Search output on enter: ${params.toString()}`}
      </Typography>
    </Box>
  </>
));
