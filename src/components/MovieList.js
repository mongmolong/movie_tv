import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieList = () => {

    //1. 데이터를 담는 그릇 설정 
    const [movies, setMovies] = useState([])//어떤 형태인지 확인!


    //2. 데이터를 가져오는 함수 선언
    const getMovies = async () => {
        try {
            const config = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjViYjhmMmJkZGZiOGU5ZDNhZTYyMmRjNmMwOWMyNCIsInN1YiI6IjY2M2ViZmNiMDFiMTVlODQ5OWQ1NzE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j_XqpTdId7MD9hXgt7UBGMvZmNBtkjHkgBwyhsG_ug"
                }
            }
            const { data, status } = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
                config
            )
            console.log("+++++++++++++++++++++", data.results)
            if (status === 200) {
                setMovies(data.results)
            }

        }
        catch (err) {
            console.log(err.message)
        }
    }

    // default 돔 그리고 나서 무조건 실행 
    useEffect(() => {
        getMovies()
    }, [])

    return (
        <Container className="mt-3">
            <h1>영화List</h1>
            {/* <button onClick={getMovies}>버튼 클릭</button> */}
            <Row className="mt-5" >
                {movies && movies.map(movie => (
                    <Col className="mb-3" key={movie.id}> 
                     {/* key이렇게 넣는거 맞아?  */}
                        <Card style={{ width: '18rem' }}>                      
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title.slice(0, 20) } </Card.Title>
                                <Card.Text>
                                    {movie.overview.slice(0, 80)+ '...'}
                                </Card.Text>
                                <Link to={`/${movie.id}`}>
                                    <Button variant="primary">MORE</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MovieList;


//코드 빌드 순서
// 1. 위에서 아래로 빌드함
// 2.  =기준으로 오른쪽에서 왼쪽으로 치환됨!
// 3. .은 하위 메소드를 호출하는 명령어
// 4. () 는 함수들을 모아둔 것을 의미
// 5. const {} 직접 호출할때 사용