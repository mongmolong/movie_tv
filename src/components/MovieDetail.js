import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetail = () => {
    const params = useParams()

    const navigation = useNavigate()
    const [movie, setMovie] = useState({}); //어떤 형태로 담을 건지!!

    const getMovieById = async () => {
        try {
            const config = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjViYjhmMmJkZGZiOGU5ZDNhZTYyMmRjNmMwOWMyNCIsInN1YiI6IjY2M2ViZmNiMDFiMTVlODQ5OWQ1NzE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j_XqpTdId7MD9hXgt7UBGMvZmNBtkjHkgBwyhsG_ug"
                }
            }
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, config)
            console.log(data)
            setMovie(data)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getMovieById();
    }, [])

    return (
        <div>
            <button onClick={() => navigation(-1)}>뒤로가기</button>
            <h1>{movie.title}</h1>
        </div>
    );
};

export default MovieDetail;