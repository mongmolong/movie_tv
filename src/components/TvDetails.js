import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TvDetails = () => {
    const params2 = useParams()

    const navigation = useNavigate()
    const [tv, setTv] = useState({});

    const getTvById = async () => {
        try {
            const config = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjViYjhmMmJkZGZiOGU5ZDNhZTYyMmRjNmMwOWMyNCIsInN1YiI6IjY2M2ViZmNiMDFiMTVlODQ5OWQ1NzE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j_XqpTdId7MD9hXgt7UBGMvZmNBtkjHkgBwyhsG_ug"
                }
            }
            const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${params2.id}?language=en-US&page=1`,
                config)
            setTv(data)
        }
        catch (err) {
            console.log("+++++++++++++", err.message)
        }
    }
    useEffect(() => {
        getTvById();
    }, [])
    
    if (!tv) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <button onClick={() => navigation(-1)}>뒤로가기</button>
            <h1>{tv.name}</h1>
            <p>{tv.overview}</p>
        </div>
    );
};

export default TvDetails;