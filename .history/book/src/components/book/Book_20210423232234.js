/*********************
 * import libraries
 **********************/

import React from 'react';


/*********************
 * *Components
 *********************/

const Book = (props) => {
    return(
        <div className="book">
            <img src={imgsrc} alt={alt}/>
            <p>{props.titleBook}</p>

        </div>
    );
}