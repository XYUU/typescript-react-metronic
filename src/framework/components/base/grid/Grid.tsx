import React from 'react';

export const Grid = (props) => {
    const { children } = props;
    return (
        <div className="m-content">
            {children}
        </div>
    );
}