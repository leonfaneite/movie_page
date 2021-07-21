import React, {useState} from 'react';
import {Row,Col, Button} from "antd"
import {useParams} from "react-router-dom"
import moment from "moment"
import {API_URL, TOKEN_API} from "../../utils/Constants"
import Loading from "../../components/Loading"
import ModalVideo from "../../components/ModalVideo"

import "./Movie.scss"
import useFetch from '../../hooks/useFetch';




export default function Movie(){

    const {id} = useParams()
    const movieInfo = useFetch(

        `${API_URL}/movie/${id}?api_key=${TOKEN_API}&language=es-ES`
    )

        if (movieInfo.loading || !movieInfo.result){

            return <Loading/>
        }

        return <RenderMovie movieInfo={movieInfo.result}/>

    }

 function RenderMovie(props){
        const {movieInfo: {backdrop_path, poster_path} } = props
        const backdropPath =`https://image.tmdb.org/t/p/original${backdrop_path}`  

    
    return(
    <div
    className="movie"
    style={{backgroundImage: `url(${backdropPath})`}}
    >
        <div className="movie__dark" />
        <Row>
            <Col span={8} offset={3} className="movie__poster">
            <PostMovie image={poster_path}/>
            </Col>
            <Col span={10} className="movie__info">
            <MovieInfo movieInfo={props.movieInfo}/>
            </Col>


        </Row>
    
    
    </div>
    
    )

 }

 function PostMovie(props){

    const {image}= props;
    const posterPath = `https://image.tmdb.org/t/p/original${image}`
    return <div style={{backgroundImage: `url('${posterPath}')`}}/>
 }


 function MovieInfo(props){

    const  {movieInfo :{id, title, release_date,overview, genres }} = props

    const  [stateModalVideo , setstateModalVideo] = useState(false)

    const VideoMovie= useFetch(
        `${API_URL}/movie/${id}/videos?api_key=${TOKEN_API}&language=es-ES`
    )

    const openModal =()=> setstateModalVideo(true)
    
    const closeModal=()=>setstateModalVideo(false)


    const renderVideo=()=>{

        if(VideoMovie.result){
            if(VideoMovie.result.results.length > 0){
                return(
           <div>
            <Button  onClick={openModal}>
         
            Ver trailer            
            </Button>
            
            <ModalVideo
            videoKey = {VideoMovie.result.results[0].key}
            videoPlatform ={VideoMovie.result.results[0].site}
            isOpen={stateModalVideo}
            close={closeModal}           
            />
           </div>

                )


            }
        }

    }


    return(
        <>
        <div className="movie__info--header">
            <h1>
                {title}
                <span>{moment(release_date,"YYYY-MM-DD").format("YYYY")}</span>
            </h1>
            {renderVideo()}
            
        </div>
        <div className="movie__info--content">
        <h3>General</h3>
        <p>{overview}</p>
        <h3>Generos</h3>
        <ul>
            {genres.map(gender=>(
                <li key={gender.id}>{gender.name}</li>

            ))}

        </ul>

        </div>


        </>


    )


 }