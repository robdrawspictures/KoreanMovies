import React from "react";

const Film = ({url, img, children}) => {
    return(
        <>
        <div id='single-film'>
        <img src={`${process.env.PUBLIC_URL}${img}`} width="125" alt="film-poster"/>
        <br></br>
        <a href={url}>{children}</a>
        <br></br>
        <br></br>
        </div>
        </>
    )
};

export default Film;