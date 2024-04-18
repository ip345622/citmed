import { StyleSheet } from 'react-native';
import { inicio } from '..';

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    backgroundColor: '#0C231E',
    color: '#ffffff',
    width: '100%',
    height: '10%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  header__imagen: {
    width: 200,
    height: 200
  }
});

const navbarUser = StyleSheet.create({
  header: {
    marginTop: 30,
    backgroundColor: '#0C231E',
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  header__imagen: {
    width: 200,
    height: 200
  }
});

const pageHome = StyleSheet.create({
  inicio: {
    width: '100%',
    height: '98%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  h1: {
    fontSize: 30,
    width: '80%'
  },
  p: {
    fontSize: 20,
    width: '80%'
  },
  button: {
    backgroundColor: '#133830',
    color: '#ffffff',
    textAlign: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '50%',
    fontSize: 50,
    paddingBottom: 5,
  }
});

const login = StyleSheet.create({
  inicio: {
    position: 'relative',
    width: '100%',
    height: '80%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  img: {
    width: '50%',
    height: '30%',
    borderColor: '#175930',
    borderRadius: 100,
    marginTop: 50,
    marginBottom: 40
  },
  texto: {
    fontSize: 50,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 50,
    paddingLeft: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  iconStyle: {
    marginRight: 10,
  },
  ojo: {
    position: 'absolute',
    left: 210
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 50,
  },
  iconStyle: {
    marginRight: 10,
  },
  inputStyle: {
    flex: 1,
    paddingRight: 30,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#133830',
    color: '#ffffff',
    textAlign: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '70%',
    fontSize: 40,
    padding:10
  },
  p: {
    marginTop: 50,
    fontSize: 20
  },
  span: {
    fontSize: 20,
    color: '#2DAFC8'
  }

});

const register = StyleSheet.create({
  inicio: {
    width: '100%',
    height: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  img: {
    width: '50%',
    height: '30%',
    borderColor: '#175930',
    borderRadius: 100,
    marginTop: 50,
    marginBottom: 40
  },
  texto: {
    fontSize: 50,
    marginTop: 70,
    marginBottom: 70,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 50,
    paddingLeft: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  iconStyle: {
    marginRight: 10,
  },
  ojo: {
    position: 'absolute',
    left: 210
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 50,
  },
  iconStyle: {
    marginRight: 10,
  },
  inputStyle: {
    flex: 1,
    paddingRight: 30,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#133830',
    color: '#ffffff',
    textAlign: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '70%',
    fontSize: 40,
    paddingBottom: 5,
  },
  p: {
    marginTop: 50,
    fontSize: 20
  },
  span: {
    fontSize: 20,
    color: '#2DAFC8'
  }

});

const user = StyleSheet.create({
  inicio: {
    width: '100%',
    height: '102%',
    display: 'flex',
    // flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  inicio2: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  card: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#0C231E',
    padding: 20,
  },
  imageStyle: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  h2: {
    color: "#ffffff",
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  p: {
    fontSize: 15,
    color: '#ffffff',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-stcart',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  minicard: {
    width: '35%',
    margin: 10,
    backgroundColor: "#0C231E",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10
  },
  pc: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
  },

});

const userM = StyleSheet.create({
  centeredView: {
    // position:'absolute',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    width: '90%',
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 100,
    backgroundColor: '#930606',
    color: '#ffffff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 6,
    paddingTop: 6
  },
  button: {
    padding: 5,
    color: '#ffffff',
    borderRadius: 10,
    backgroundColor: '#06933E'
  },
  button2: {
    padding: 5,
    color: '#ffffff',
    borderRadius: 10,
    backgroundColor: '#930606'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  h1:{
    fontWeight:'bold',
    fontSize:30,
    textAlign:'center',
    padding:10
  }
});

const historial = StyleSheet.create({
  inicio: {
    marginTop: 40,
    width: '100%',
    height: '92%',
    display: 'flex',
    // flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  card: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#0C231E',
    padding: 20,
    marginTop: 20,
    marginBottom: 10
  },
  imageStyle: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  h2: {
    color: "#ffffff",
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  p: {
    fontSize: 15,
    color: '#ffffff',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const profile = StyleSheet.create({
  inicio: {
    marginTop: 40,
    width: '100%',
    height: '92%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  h1: {
    fontSize: 40,
    textAlign: 'center'
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 50,
    paddingLeft: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  iconStyle: {
    marginRight: 10,
  },
  ojo: {
    position: 'absolute',
    left: 210
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 50,
  },
  iconStyle: {
    marginRight: 10,
  },
  inputStyle: {
    flex: 1,
    paddingRight: 30,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: '#133830',
    color: '#ffffff',
    textAlign: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '70%',
    fontSize: 40,
    paddingBottom: 5,
  },
});

const doctorH = StyleSheet.create({
  inicio: {
    marginTop: 40,
    width: '100%',
    height: '92%',
    display: 'flex',
    // flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  p:{
    // position:'absolute',
    color:'#ffffff',
    marginTop:30,
    fontSize:20
  },
  card: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height:'25%',
    backgroundColor: '#0C231E',
    padding: 20,
    marginTop: 20,
    marginBottom: 10
  },
});

const pacientes = StyleSheet.create({
  inicio: {
    flex: 1, 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly', 
    alignContent: 'center',
    alignItems: 'center'
  },
  h1: {
    fontSize: 30
  },
  table: {
    flexDirection: 'column',
    borderColor: '#000000',
    width: '100%'
  },
  tableRow: {
    flexDirection: 'row',
    width: '100%'
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    borderColor: '#000000',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    borderColor: '#000000',
  },
});

const admin = StyleSheet.create({
  inicio:{
    marginTop: -40,
    width: '100%',
    height: '103%',
    display:'flex',
    justifyContent:'space-evenly',
  },
  h1:{
    fontSize:40,
    textAlign:'center',
    fontWeight:'bold'
  },
  p:{
    fontSize:30,
    textAlign:'center'
  },
});

const adminDoccss = StyleSheet.create({
  inicio: {
    flex: 1, 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly', 
    alignContent: 'center',
    alignItems: 'center'
  },
  h1: {
    fontSize: 30
  },
  table: {
    flexDirection: 'column',
    borderColor: '#000000',
    width: '100%'
  },
  tableRow: {
    flexDirection: 'row',
    width: '100%'
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    borderColor: '#000000',
  },
  tableCell: {
    flex: 1,
    padding: 5,
    borderColor: '#000000',
  },
});

const footer = StyleSheet.create({
  header: {
    backgroundColor: '#0C231E',
    width: '100%',
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  p: {
    color: '#ffffff',
    fontSize: 20
  }
});

const footernav = StyleSheet.create({
  inicio: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#0C231E',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-evenly'
  }
});


export { styles
  , navbarUser
  , pageHome
  , user
  , login
  , register
  , footer
  , userM
  , historial
  , profile
  , footernav
  , doctorH
  ,pacientes
  ,admin
  ,adminDoccss
 };
