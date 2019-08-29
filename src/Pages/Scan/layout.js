import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import style from './style';


import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
    class Layout extends Component {

        constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static" >
                    <Toolbar className={classes.navigationBar}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="normal" className={classes.typo} >
                            {'Scan Your Image'}
                        </Typography>
                        <div className={classes.AppBarstyle}>
                        </div>
                    </Toolbar>
            </AppBar>

                <div className={classes.Main}>
                    <div className={classes.imageDiv}>
                        <img src={this.state.file} style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div className={classes.inputdiv}>
                        {/* <label className={classes.inputlabel} > Select File */}

                        <input type="file" onChange={this.handleChange} className={classes.input} ></input>
                        {/* </label> */}
                    </div>
                </div>
            </div>
        )
    }
}



export default withStyles(style)(Layout);
