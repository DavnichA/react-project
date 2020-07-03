import React from 'react';
import p from './ProfileInfo.module.css';



class ProfileStatus extends React.Component {
    //локальный стейт для замены между p статуса и input
    state = {
        editMode: false
    }
    // обьявить через стрелочную либо в onclick .bind(this) и стандартно обьявлять
    activateEditMode = () => {

        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={p.aboutMe}>
                {!this.state.editMode
                    ? <div>
                        <p onClick={this.activateEditMode}>{this.props.aboutMe}</p>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" defaultValue={this.props.aboutMe} />
                    </div>
                }
            </div>

        );
    }
}






export default ProfileStatus;