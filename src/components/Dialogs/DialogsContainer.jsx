import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { authRedirect } from '../../hoc/AuthRedirect';

// before react-redux
// function DialogsContainer(props) {

//     let state = props.store.getState().dialogsPage;

//     function onSendMessageClick() {
//         props.store.dispatch(sendMessageActionCreator());
//     }
//     function writeMessage(text) {
//         props.store.dispatch(updateNewMessageTextActionCreator(text));
//     }

//     return (
//         <Dialogs
//             updateNewMessageText={writeMessage}
//             sendMessage={onSendMessageClick}
//             dialogsPage={state} />
//     );
// }

// react-redux
let mapStateToProps= (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText:  (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        } 
    }
}

//hoc
let RedirectComponent = authRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponent);

// connect с локальным subscribe перерисовывает только эту часть программы
// при изминении 

export default DialogsContainer; 