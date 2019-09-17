const style = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    marginTop: theme.spacing() * 20
  },

  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    marginTop: theme.spacing() * 3
  },
  formContainer: {
    flexDirection: 'column'
  },
  textFieldStyle: {
    width: theme.spacing() * 40
  },
  buttonStyle: {
    marginTop: theme.spacing() * 4,
    fontSize: theme.spacing() * 2,
    fontWeight: 'bold',
    width: theme.spacing() * 20
  }
});

export default style;
