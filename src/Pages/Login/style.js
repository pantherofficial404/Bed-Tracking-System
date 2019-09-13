import colors from '../../Theme/Colors';
import { borderRadius } from '@material-ui/system';



const style = ()  => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:"center",
    height:"100vh",
    flexDirection: 'column',
    // boxShadow:"0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",

  },
  from:{
    width:'100%',
    marginTop:"1.5rem"
  },
  btnsubmit:{
  backgroundColor:'#1e90ff',
  marginTop:"1.3rem",
    '&:hover':{
      backgroundColor:"#1e90ff"
    }
},
Typography:{
  marginTop:"0.8rem",
  fontFamily: 'Cursive',
  fontWeight:"200",
},
textField:{

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
      borderWidth:"1px",
      borderRadius:"0.5rem",
    },
     '&.Mui-focused fieldset':{
      borderColor:"#000",
      borderWidth:"1px",
    },
  }
},
avatar:{
  backgroundColor:"#1e90ff",
},
icon:{
  color:"#1e90ff"
},

});

export default style;