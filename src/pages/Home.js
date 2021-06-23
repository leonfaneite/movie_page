import React from 'react';
import useFetch from "../hooks/useFetch"
import Slidermovies from "../components/Slidermovies"
import {Row, Col} from "antd"
import {API_URL, TOKEN_API} from "../utils/Constants"
import MovieList from "../components/MovieList"
import Footer from "../components/Footer"

export default function Home(){

const newMovies = useFetch(

   `${API_URL}/movie/now_playing?api_key=${TOKEN_API}&language=en-US&page=1`
)

const popularMovies = useFetch(

   `${API_URL}/movie/popular?api_key=${TOKEN_API}&language=en-US&page=1`
)

const topRatemovies = useFetch(

   `${API_URL}/movie/top_rated?api_key=${TOKEN_API}&language=en-US&page=1`
)

console.log(newMovies)
return(
<>
<Slidermovies movies ={newMovies}/>

<Row>
<Col span={12}>
   <MovieList title="Peliculas mas Populares" movies={popularMovies}/>
</Col>

<Col span={12}>
<MovieList title="Peliculas con Mejor Rating" movies={topRatemovies}/>
</Col>
</Row>

<Footer/>

</>
)}