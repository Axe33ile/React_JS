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
            <img src={props.imgsrc} alt={props.alt}/>
            <p>{props.titleBook}</p>
            <p>{props.detail}</p>

        </div>
    );
}

export default Book;