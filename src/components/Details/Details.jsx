import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from '../../useTransactions';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);


const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent >
        <Typography variant="h5">${total}</Typography>
        {/* <Box className={classes.chart}> */}
        {chartData.labels.length !== 0 && (<Doughnut data={chartData} height='100px' />)}
        {/* </Box> */}
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
