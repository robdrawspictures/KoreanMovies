import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return(
            <Film url={film.url} img={film.thumb} key={film.id}>{film.title}</Film>
        )
    })

    return (
        <div class="film-list">
        {filmNodes}
        </div>
    )
};

export default FilmList;