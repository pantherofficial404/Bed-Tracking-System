import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import style from './style';
import Header from '../../Components/Header/layout';
import logo from './images/logo.png';

//for a card
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
//card images
import Blood from './images/blood.svg';
import Sperm from './images/sperm.svg';
import Tear from './images/tear.svg';
import { spacing } from '@material-ui/system';

class Layout extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <img src={logo} className={classes.logo}></img>
        <Container maxWidth="lg" className={classes.CardContainer}>
        <Grid  container spacing={2} >
          <Grid item xs={12} md={4} lg={4}>
            <Card className={classes.CardContainer} >
              <CardContent  >
                <img src={Blood} className={classes.cardimg} alt="blood"/>
                <Typography align="center" variant="h6" className={classes.DesieseTitle} >
                  Skin Cancer
                  </Typography>
                <Typography align="center" className={classes.Descriptions}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consectetur dolore natus accusantium eveniet illo!
                  </Typography>
                  <div className={classes.buttonCenter}>
                <Button variant="outlined"  className={classes.button} size="medium">
                  Go
                </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid  item xs={12} md={4} lg={4}>
            <Card className={classes.CardContainer}>
              <CardContent  >
                <img src={Sperm} className={classes.cardimg} alt="Sperm"/>
                <Typography align="center" variant="h6" className={classes.DesieseTitle} >
                  Maleria Ditections
                  </Typography>
                <Typography align="center" className={classes.Descriptions}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consectetur dolore natus accusantium eveniet illo!
                  </Typography>
                  <div className={classes.buttonCenter}>
                <Button variant="outlined"  className={classes.button} size="medium">
                  Go
                </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={4} >
            <Card className={classes.CardContainer}>
              <CardContent  >
                <img src={Tear} className={classes.cardimg} alt="Tear"/>
                <Typography align="center" variant="h6" className={classes.DesieseTitle} >
                  Blind Ditections
                  </Typography>
                <Typography align="center" className={classes.Descriptions}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consectetur dolore natus accusantium eveniet illo!
                  </Typography>
                  <div className={classes.buttonCenter}>
                <Button variant="outlined"  className={classes.button} size="medium">
                  Go
                </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
      </Grid>

        </Container>
      </div>

    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(style)(Layout);
