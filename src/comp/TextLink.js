import React from 'react';

const TextLink = (prop) => {
    return (
        <div>
            <div className="textLink">
                <div className="textLink_title">It's link for your friend</div>
                <div>http://localhost:3000/test/{prop.linkNum}</div>
            </div>
        </div>
    );
};

export default TextLink;