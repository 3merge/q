import { makeStyles } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  title: {
    alignItems: 'center',
    display: 'flex',

    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
  card: ({ isHovering }) => {
    const out = {
      position: 'relative',
      zIndex: 1,

      '&:hover': {
        boxShadow: 'none',
        transform: 'none',
      },
    };

    if (isHovering)
      return {
        ...out,
        borderColor: blue[200],
      };

    return out;
  },
}));
