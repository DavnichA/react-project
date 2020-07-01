import { connect } from 'react-redux';
import Login from './Login';



// react-redux
let mapStateToProps= (state) => {
    return {
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

// connect с локальным subscribe перерисовывает только эту часть программы
// при изминении 

export default LoginContainer; 