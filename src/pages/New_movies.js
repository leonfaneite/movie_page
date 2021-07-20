import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import {API_URL, TOKEN_API} from "../utils/Constants"
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MovieCatalog from "../components/MovieCatalog";


export default function NewMovies() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${API_URL}/movie/now_playing?api_key=${TOKEN_API}&lenguage=es-ES&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = page => {
    setPage(page);
  };

  return (
    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Ultimos lanzamientos
        </h1>
      </Col>
      {movieList.results ? (
        <Row>
          <Col span="24">
            <MovieCatalog movies={movieList} />
          </Col>
          
        </Row>
      ) : (
        <Col span="24">
          <Loading />
        </Col>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}