import React from 'react';
import p from './ProfileInfo.module.css'
//Contact from './ProfileInfo'
import { inputClassic, Textarea, chekboxForm } from '../../FormsControls';
import { reduxForm, Field } from 'redux-form';

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={p.formEdit}>

            <button className={p.btn_edit}>Save</button>

            <div className={p.wrapFormEdit}>
                {/* Profile name and work*/}
                <div className={p.editDescription}>

                    {/* Full name */}
                    <div className={p.editProfileFullName}>
                        <b>Full Name:</b>
                        {inputClassic('Full Name', 'fullName', 'text', p)}
                    </div>

                    {/* Status work */}
                    <div className={p.editAdditionalInfo}>

                        {/* checkbox looking for a job */}
                        <div className={p.editWork}>
                            <b>Looking for a job:</b>
                            {chekboxForm('lookingForAJob', null)}
                        </div>

                        {/* profesional skills */}

                        <div className={p.editWorkDescription}>
                            <b>Professional skills:</b>
                            <Field component={Textarea} name='lookingForAJobDescription' placeholder='Skills' />
                        </div>

                        {/* about me */}
                        <div className={p.editAboutMe}>
                            <b>About me:</b>
                            <Field component={Textarea} name='aboutMe' placeholder='About Me' />
                        </div>
                    </div>

                </div>

                {/* Social network */}
                <div className={p.editSocial}>
                    {Object.keys(props.profile.contacts).map(key => {
                        return <div className={p.editContact} key={key + Math.random()}>
                            <b>{key}:</b>
                            {inputClassic(key, 'contacts.' + key, 'text', p)}
                        </div>
                    })}
                </div>
            </div>

            {props.error && <div className={p.errors}>{props.error}</div>}
        </form>

    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'profileForms' })(ProfileDataForm)
export default ProfileDataFormReduxForm;