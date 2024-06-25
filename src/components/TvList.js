import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TvList = () => {
    // 1. 데이터를 담아!
    const [tvs, setTvs] = useState([])

    const getTvs = async () => {
        try {
            const config = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjViYjhmMmJkZGZiOGU5ZDNhZTYyMmRjNmMwOWMyNCIsInN1YiI6IjY2M2ViZmNiMDFiMTVlODQ5OWQ1NzE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j_XqpTdId7MD9hXgt7UBGMvZmNBtkjHkgBwyhsG_ug",
                }
            }
            const { data, status } = await axios.get("https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air_date.lte={max_date}&air_date.gte={min_date}",
                config //기니까 위에 따로 설정함
            )
            console.log('+++++++++++++++++++++', data.results)
            if (status === 200) {
                setTvs(data.results)
            }
        }
        catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getTvs()
    }, [])

    return (
        <Container className="mt-3">
            <h1>TV List</h1>
            <Row className="mt-5" >
                {tvs && tvs.map((tv) => (
                    <Col className="mb-3" key={tv.id}>
                        {/* key이렇게 넣는거 맞아?  */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{tv.name.slice(0, 10)} </Card.Title>
                                <Card.Text>
                                    {tv.overview.slice(0, 90)}
                                </Card.Text>
                                <Link to={`/${tv.id}`}>
                                    <Button variant="primary">Go somewhere</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
};

export default TvList;