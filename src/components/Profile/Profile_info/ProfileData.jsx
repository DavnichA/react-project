import React from 'react';
import p from './ProfileInfo.module.css';
import ProfileStatusHook from './ProfileStatusHook';

const ProfileData = (props) => {
    return (
        <div className={p.allInfoProfile}>
            {props.isOwner && <button className={p.btn_edit} onClick={props.editModeProfile}>Edit</button>}
            <div className={p.wrapProfileInformation}>
                {/* Profile name */}
                <div className={p.description}>
                    <div className={p.profileFullName}>
                        <h3>{props.profile.fullName}</h3>
                    </div>

                    {/* Profile status */}
                    <ProfileStatusHook
                        status={props.status}
                        updateStatus={props.updateStatus} />

                    {/* Social network */}
                    <div className={p.social}>
                        {Object.keys(props.profile.contacts).map(key => {
                            if (props.profile.contacts[key] !== null && props.profile.contacts[key] !== '') {
                                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                            }
                            else return null
                        })}
                    </div>
                </div>

                {/* Status work */}
                <div className={p.additional_info}>
                    <div className={p.work}>
                        <b> Looking for a job: </b> {props.profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {props.profile.lookingForAJob &&
                        <div className={p.work_description}>
                            <b> Professional skills: </b> {props.profile.lookingForAJobDescription}
                        </div>
                    }
                    <div className={p.about_me}>
                        <b>About me: </b> {props.profile.aboutMe}
                    </div>
                </div>
            </div>

        </div>
    )
}

const Contact = (props) => {

    return (
        <span><b>{props.contactTitle}: </b>
            <a href={props.contactValue} target="_blank" rel="noreferrer noopener">{props.contactValue}</a></span>
    )
}

export default ProfileData;