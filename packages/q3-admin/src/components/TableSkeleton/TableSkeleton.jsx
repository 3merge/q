import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

const TableButton = () => (
  <Box mr={2}>
    <Skeleton
      style={{
        display: 'block',
        height: 36,
        marginBottom: '1rem',
        width: 65,
      }}
    />
  </Box>
);

const TableRow = () => (
  <Skeleton
    variant="rect"
    height={61}
    style={{
      background: 'white',
      borderTop: '2px solid rgb(245, 247, 249)',
    }}
  />
);

const TableSkeleton = () => (
  <Box>
    <Box mt={1} mb={2} width="100%" px={1}>
      <Grid container justify="space-between">
        <Grid item>
          <Skeleton
            height={36}
            style={{
              marginBottom: '1rem',
              width: 210,
            }}
          />
        </Grid>
        <Grid item style={{ display: 'flex' }}>
          <TableButton />
          <TableButton />
        </Grid>
      </Grid>
    </Box>
    {Array.from({ length: 10 }).map((item, i) => (
      <TableRow key={i} />
    ))}
  </Box>
);
export default TableSkeleton;
