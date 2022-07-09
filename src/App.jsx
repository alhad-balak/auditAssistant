import React from 'react'
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import { Details, Main } from './components';
function App() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
        <Grid item xs={0} md={3} sm={0} className={classes.mobile}>
          <Details title="Income" />
        </Grid>

        <Grid item xs={12} md={4} sm={5} className={classes.main}>
          <Main />
        </Grid>

        <Grid item xs={12} md={3} sm={5}>
          <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center">
            <Grid item md={0} xs={12} m={0} className={[classes.desktop, classes.last]}>
              <Details title="Income" />
            </Grid>
            <Grid item md={12} xs={12} m={0} className={classes.last}>
              <Details title="Expense" />
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </>
  );
}

export default App;
