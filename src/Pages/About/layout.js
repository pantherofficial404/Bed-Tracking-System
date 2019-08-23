import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import style from './style';
import {Bar,Line,pie} from 'react-chartjs-3';
import {Pie} from 'react-chartjs-3';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//import for Chart
const data ={
    labels: [
         'Red',
         'blue',
         'Orange',
         'Green',
         'Purple',
         'Pink',
         'Purple',
     ],
     datasets: [{
         data: [50,150,30,40,50,60,60],
         backgroundColor: [
         '#FF6384',
         '#36A2EB',
         '#E86100',
         '#008000',
         '#34A853',
         '#ff69b4',
         '#800080'
         ],
         hoverBackgroundColor: [
             '#FF6384',
             '#36A2EB',
             '#E86100',
             '#008000',
             '#34A853',
             '#ff69b4',
             '#800080'
         ]
     }]
 };

 const bar={
     labels: [
          'Red',
          'blue',
          'Orange',
          'Green',
          'Purple',
          'Pink',
          'Purple',
      ],
      datasets: [{
          label:"bar chart",
          data: [12,19,3,4,4,10,12],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#E86100',
          '#008000',
          '#34A853',
          '#ff69b4',
          '#800080'
          ],
      }]
  };

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
             <div className={classes.headerPart}>
                    <div className={classes.TotalPatients}>
                        <span >Total Patients</span>
                        <h5 className={classes.subContent}>500</h5>
                    </div>
                    <div class="Total-invoice">
                        <span>Total Patients</span>
                        <h5 className={classes.subContent}>218</h5>
                    </div>
                    <div class="Total-Products">
                        <span>Total Patients</span>
                        <h5 className={classes.subContent}>197</h5>
                    </div>
            </div>
            <div className={classes.maincontent}>
                {/* {first-grid} */}
                <Container className="chart-content" maxWidth="lg" >
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <h4 className={classes.GridContent}>This Week Invoice</h4>
                            <Pie data={data} />
                        </Grid>
                        {/* second-Grid */}
                         <Grid item xs={12} sm={12} md={6} lg={6}s>
                         <h4 className={classes.GridContent}>This Week Invoice</h4>
                         <Bar data={bar} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
      </div>

    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(style)(Layout);
