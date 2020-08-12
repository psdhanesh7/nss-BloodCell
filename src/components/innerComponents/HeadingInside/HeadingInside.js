import React from 'react';
import './HeadingInsideStyle/HeadingInsideStyle.css';

export default function HeadingInside({ headingContentInside }) {
    return (
        <div className="heading-inside-component">
            <h1>{headingContentInside}</h1>
        </div>
    );
}
