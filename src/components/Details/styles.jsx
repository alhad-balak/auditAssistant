import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  income: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
  },
  expense: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
  },
  chart: {
    [theme.breakpoints.down('sm')]: {
      maxHeight: '200px',
    }
  },
}));
