import { createStyles, makeStyles, Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  bannerPage: {
    '& .banner-page-cover': {
      color: '#FFF',
      width: '100%',
      position: 'absolute',
      zIndex: 9,
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.7) 13.77%, rgba(0, 0, 0, 0) 95.18%);',

      '&.plain': {
        color: '#333 !important',
        background: 'none !important',
      },
    },
  },
}));
