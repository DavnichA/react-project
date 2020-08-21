import React from 'react';
import alert from './FormsControls.module.css';
import chk from './Login/Checkbox.module.css'
import { Field } from 'redux-form';

export let Textarea = ({ input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;

    return (
        <div className={`${alert.form_control} ${hasError ? alert.error : ''}`}>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export let inputField = (placeholder, name, type, styleModule) => {
    return (
        <div className={styleModule.inpt_wrap}>
            <div className={styleModule.inptgroup}>
                <Field type={type} component={'input'} name={name} required={'required'} />
                <label>{placeholder}</label>
                <div className={styleModule.bar}></div>
            </div>
        </div>
    )
}

export let chekboxForm = (name, placeholder_chk) => {
    return (
        <div className={`${chk.checkbox} ${chk.coloured}`}>
        <label>
            <Field type={"checkbox"} component={'input'} name={name} />
            <span className={chk.checkbox_material}>
                <span className={chk.check}></span>
            </span> {placeholder_chk}
        </label>
    </div>
    )
}

export let inputClassic = (placeholder, name, type, styleModule) => {
    return (
        <div className={styleModule.edit_profile}>
            <Field type={type} component={'input'} name={name} placeholder={placeholder}/>
        </div>
    )
}