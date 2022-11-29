import React from 'react';
import "./style.css"

export const Button = (props) => {
    const {children, ...other} = props

    return (
        <div className="wrapper-button">
            <button {...other} className="button">
                {children}
            </button>
        </div>

    );
};

// export default Index;