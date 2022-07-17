import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { useSpeechContext } from '@speechly/react-client';
import { AuditAssistantContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';

const AuditAssistant = () => {
  const classes = useStyles();
  const { balance } = useContext(AuditAssistantContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Audit Assistant" subheader="Keep track of every penny!" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance ₹{balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AuditAssistant;
