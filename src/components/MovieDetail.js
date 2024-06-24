import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Button, Row, Container, Col } from 'react-bootstrap';
import '../index.css';

const MovieDetail = () => {
    const params = useParams()

    const navigation = useNavigate()
    const [movie, setMovie] = useState({}); //어떤 형태로 담을건지!!

    const getMovieById = async () => {
        try {
            const config = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjViYjhmMmJkZGZiOGU5ZDNhZTYyMmRjNmMwOWMyNCIsInN1YiI6IjY2M2ViZmNiMDFiMTVlODQ5OWQ1NzE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j_XqpTdId7MD9hXgt7UBGMvZmNBtkjHkgBwyhsG_ug"
                }
            }
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
                config)
            console.log(data)
            setMovie(data)
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getMovieById();
    }, [])

    if (!movie) {
        return <div>Loading...</div>;
    }
    return (
        <Container className="mt-3 card">
            <Row>
                <Col>
                    <Card style={{ width: '26rem' }} >
                        {/* <Card.Title>{movie.title} </Card.Title> */}
                        <h1>{movie.title}</h1>
                        <Card.Img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        <Card.Text>{movie.overview} </Card.Text>
                        <Button className="mt-1" variant="primary" onClick={() => navigation(-1)}>Back</Button>
                    </Card>
                </Col>

            </Row>
        </Container>

        // <Card style={{ width: '28rem' }} >
        //     {/* <Card.Title>{movie.title} </Card.Title> */}
        //     <h1>{movie.title}</h1>
        //     <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        //     <Card.Text>{movie.overview} </Card.Text>
        //     <Button className="mt-2" variant="primary" onClick={() => navigation(-1)}>Back</Button>
        // </Card>
    );
};

export default MovieDetail;