import colors from '../../Theme/Colors';
import { color } from '@material-ui/system';
import { textAlign } from '@material-ui/system';

const style = () => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  logo:{
    marginTop:"30px",
    minHeight:"100px",
    maxHeight:"200px",
    borderBottom:"1px solid #1e90ff"
  },
  CardContainer:{
      marginTop:"2.5rem",
      borderRadius:"0.5rem",
  },
  cardimg:{
    display:"flex",
    margin:"0px auto",
  },

  DesieseTitle:{
      margin:"10px 0px 10px 0px",
      color:"#333",
      fontFamily:""
  },
   Descriptions:{
      color:"#616c6f"
   },
   buttonCenter:{
      textAlign:"center"
   },
   button:{
      backgroundColor:"transparent",
      border:"1px solid #1e90ff",
      borderRadius:"30px",
      padding:"0.2rem 3rem",
      marginTop:"2rem",
      '&:hover': {
        background: '#1e90ff',
        color:"#fff"
      }
    }


});

export default style;