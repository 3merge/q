import React from 'react';

import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import useStyle from '../useStyle';

const Dashboard = ({ children }) => {
  const cls = useStyle();

  return (
    <Box className={cls.muted}>
      <Hidden mdDown>
        <Box style={{ height: 65 }} />
      </Hidden>
      <Container
        maxWidth="xl"
        className={cls.fillViewportHeight}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Dashboard;
