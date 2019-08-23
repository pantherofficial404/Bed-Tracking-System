import colors from '../../Theme/Colors';
import { Button } from '@material-ui/core';

const style = () => ({
  container: {
    marginTop:"5rem",
  },
  headerPart:{
      height:"0px",
      display:"flex",
      justifyContent:"space-around",
      flexWarp:"Wrap",
      '& span':{
        color:"#333",
        fontFamily:"sans-serif",
    },
       '& h5':{
           color:"#A9A9A9",
           fontSize:"2rem",
           marginTop:"0px"
        },
    },
    maincontent:{
        marginTop:"12rem"

     },
    GridContent:{
        textAlign:"center",
    }


});

export default style;