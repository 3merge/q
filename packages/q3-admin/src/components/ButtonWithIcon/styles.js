import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  badge: {
    '& > span:last-of-type': {
      left: '-.5rem',
      top: '-.5rem',
    },
  },
  fab: ({ on, transparent }) => {
    const out = {
      boxShadow: 'none',
      backgroundColor: theme.palette.background.muted,
      color: 'inherit',
      width: '36.5px',
      height: '36.5px',

      '&.Mui-disabled,&[disabled]': {
        background: 'transparent',
        cursor: 'not-allowed !important',
      },
    };

    if (transparent) {
      out.backgroundColor = 'transparent';
      out.border =
        theme.palette.type === 'dark'
          ? undefined
          : `1px solid ${theme.palette.background.muted}`;

      out[theme.breakpoints.down('md')] = {
        border: 'none',
      };
    }

    if (on) {
      out.backgroundColor = theme.palette.secondary.main;
      out.color = theme.palette.secondary.contrastText;
    }

    return out;
  },
  wrapper: {
    marginLeft: theme.spacing(0.25),
    marginRight: theme.spacing(0.25),
  },
}));
