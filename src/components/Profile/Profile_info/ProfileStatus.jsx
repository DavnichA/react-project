import React from 'react';
import p from './ProfileInfo.module.css';



class ProfileStatus extends React.Component {
    //локальный стейт для замены между p статуса и input
    state = {
        editMode: false,
    }
    // обьявить через стрелочную либо в onclick .bind(this) и стандартно обьявлять
    activateEditMode = () => {
        
        this.setState({
            editMode: true,
            status: this.props.status
        });
    }
    deactivateEditMode = () => {
        
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (st) => {
        this.setState({
            status: st.currentTarget.value 
        });
    }

// сравнить старые значения с новыми и перерисовать
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={p.aboutMe}>
                {!this.state.editMode
                    ? <div>
                        <p onClick={this.activateEditMode}>{this.props.status}</p>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status} />
                    </div>
                }
            </div>

        );
    }
}






export default ProfileStatus;