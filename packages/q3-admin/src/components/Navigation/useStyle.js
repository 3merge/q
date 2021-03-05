import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  muted: {},
  bar: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    height: 90,
    justifyContent: 'space-between',
    paddingRight: theme.spacing(2),
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    position: 'relative',
    zIndex: 100,
  },
  appbar: {},
  nav: {
    alignItems: 'center',
    listStyle: 'none',
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    paddingLeft: theme.spacing(2),

    [theme.breakpoints.down('sm')]: {
      display: 'block',
      margin: 0,
      padding: 0,
    },

    '& li': {
      margin: 0,
      padding: 0,

      '& svg': {
        transition: 'transform 150ms ease-in',
        transform: 'rotate(0)',
      },

      '& a.selected': {
        '& svg': {
          transform: 'rotate(180deg)',
        },
        '& ~ ul': {
          [theme.breakpoints.down('sm')]: {
            display: 'block !important',
            opacity: 1,
            padding: '0 1.5rem',
            transform: 'translateY(0)',
            visibility: 'visible',
          },
        },
      },
    },

    '& li > ul': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[4],
      listStyle: 'none',
      margin: 0,
      opacity: 0,
      padding: theme.spacing(2),
      transform: 'translateY(-20px)',
      transitionDuration: '350ms',
      transitionProperty: 'opacity,transform,visibility',
      visibility: 'hidden',

      [theme.breakpoints.down('sm')]: {
        boxShadow: 'none',
        display: 'none',
        position: 'relative',
        opactity: 1,
        visibility: 'visible',
        transform: 'none',
      },
    },

    '& li:hover, & li:focus-within': {
      '& svg': {
        [theme.breakpoints.up('md')]: {
          transform: 'rotate(180deg)',
        },
      },
      '& > ul': {
        [theme.breakpoints.up('md')]: {
          opacity: 1,
          transform: 'translateY(0)',
          visibility: 'visible',
        },
      },
    },
  },
  actions: {},
  logo: {
    backgroundColor: theme.palette.background.default,
    display: 'block',
    fill: theme.palette.primary.contrastText,
    height: '100%',
    minWidth: 285,
    maxWidth: 345,
    width: '24.5vw',

    '& img': {
      mixBlendMode: 'multiply',
      height: '100%',
      objectFit: 'contain !important',
      padding: theme.spacing(1),
      width: '100%',

      [theme.breakpoints.down('sm')]: {
        objectPosition: 'left',
      },
    },

    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.background.paper,
      minWidth: '100%',
      width: 195,
    },

    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.background.paper,
      width: 145,
    },
  },
  menuItem: {
    alignItems: 'center',
    display: 'flex',
    padding: theme.spacing(0.5),
    textDecoration: 'none !important',

    '& svg': {
      marginRight: theme.spacing(0.75),
    },
  },
}));
