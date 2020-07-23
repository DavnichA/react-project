import React from 'react';
import fstyle from './FormsControls.module.css';

export let Textarea = ({ input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;

    return (
        <div className={`${fstyle.form_control} ${hasError ? fstyle.error : ''}`}>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

