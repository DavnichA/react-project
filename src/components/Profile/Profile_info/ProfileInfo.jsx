import React, { useState } from 'react';
import p from './ProfileInfo.module.css';
import Preloader from '../../Preloader';
import userPhoto from '../../../img/avatar.jpg'
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData';


function ProfileInfo(props) {
    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader />
    }

    //upload photo profile
    const onMainPhotoSelect = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);

            }
        );
    }

    return (

        <div className={p.client}>

            {/* Profile photo and upload photo button */}
            <div className={p.avatar}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="im" />
                {props.isOwner && <input className={p.uploadButton} type={'file'} onChange={onMainPhotoSelect}></input>}
            </div>

            {editMode
                ? <ProfileDataForm initialValues={props.profile}
                    onSubmit={onSubmit}
                    profile={props.profile} />

                : <ProfileData profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    isOwner={props.isOwner}
                    profileP={props.profile}
                    editModeProfile={() => { setEditMode(true) }} />}
        </div>

    )
}


export default ProfileInfo;