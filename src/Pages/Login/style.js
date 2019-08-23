import colors from '../../Theme/Colors';
import { Button } from '@material-ui/core';

const style = () => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  avatar:{
    marginTop:"25px",
    maxHeight:"132px",
  },
  SystemTitle:{
      color:"black",
      marginTop:"10px",
      fontFamily: 'Roboto',
  },
  textField:{
    width:"21.875em",
    display:"flex",
    flexDirection:"column",
    border:"1px solid  black",
    borderRadius:"5px",
    outline:"none",

  },
  icon:{
    color:"#1e90ff",
  },
  center:{
    marginTop:"20px",
    textAlign : 'center',
  },
  button:{
    backgroundColor:"#1e90ff",

  }


});

export default style;