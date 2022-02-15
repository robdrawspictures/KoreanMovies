import React, {useState} from 'react';
import FilmList from '../components/FilmList';

const FilmBox = () => {

    const [films, setFilms] = useState(
        [
            {
              id: 1,
              title: "Oldboy",
              thumb: "/assets/oldboy.jpg", 
              url: "https://www.imdb.com/title/tt0364569/?ref_=rlm"
            },
            {
              id: 2,
              title: "I Saw The Devil",
              thumb: "/assets/i_saw_the_devil.jpg",
              url: "https://www.imdb.com/title/tt1588170/?ref_=rlm"
            },
            {
              id: 3,
              title: "City of Violence",
              thumb: "/assets/city_of_violence.jpg",
              url: "https://www.imdb.com/title/tt0821470/?ref_=rlm"
            },
            {
              id: 4,
              title: "Memories of Murder",
              thumb: "/assets/memories_of_murder.jpg",
              url: "https://www.imdb.com/title/tt0353969/?ref_=rlm"
            },
            {
              id: 5,
              title: "R-Point",
              thumb: "/assets/r_point.jpg",
              url: "https://www.imdb.com/title/tt0417072/?ref_=rlm"
            },
            {
              id: 6,
              title: "The Man From Nowhere",
              thumb: "/assets/man_from_nowhere.jpg",
              url: "https://www.imdb.com/title/tt1527788/?ref_=rlm"
            }
          ]
    )

    return(
        <>
        <h1 id='title'>Best Korean Movies</h1>
        <FilmList films = {films}/>
        <br></br>
        <a id="more-movies" href="https://m.imdb.com/list/ls042966798/">More Korean Movies</a>
        </>
    )
};

export default FilmBox;