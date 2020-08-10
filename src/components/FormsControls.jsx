import React from 'react';
import fstyle from './FormsControls.module.css';
import { Field } from 'redux-form';

export let Textarea = ({ input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;

    return (
        <div className={`${fstyle.form_control} ${hasError ? fstyle.error : ''}`}>
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