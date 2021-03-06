import { sendMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { authRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';



// react-redux
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessageActionCreator(newMessage));
        }
    }
}


//hoc before compose
/*let RedirectComponent = authRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponent);
*/
// connect с локальным subscribe перерисовывает только эту часть программы
// при изминении 

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    authRedirect
)(Dialogs);