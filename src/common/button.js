import React from 'react';
import './common.scss';

const Button = ({ title, onClick, disabled }) => {
    const joinedClassname = disabled ? 'btn btn-primary m-1 disabled' : 'btn btn-primary m-1';
    return (
        <div className={joinedClassname} onClick={onClick}>
            {title}
        </div>
    );
}

export default Button;