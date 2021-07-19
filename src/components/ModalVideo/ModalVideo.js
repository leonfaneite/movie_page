import React, {useState,useEffect} from "react"
import {Modal } from "antd";
import ReactPlayer  from "react-player";

import "./ModalVideo.scss"


 

export default function ModalVideo(props) {

    const {videoKey,videoPlatform, isOpen, close }= props;
    const [urlVideo,seturlVideo] =useState(null)

    useEffect(() => {
        switch(videoPlatform){
            case "YouTube":
                seturlVideo(`http://youtu.be/${videoKey}`);
                break;
            case "Vimeo":
                seturlVideo(`https://vimeo.com/${videoKey}`)
                break;
            default:
                break;
        }
    }, [videoKey,videoPlatform]);

return (

    <Modal
    className="modal-video"
    visible={isOpen}
    centered
    onCancel={close}
    footer={false}
    >

    <ReactPlayer  url={urlVideo} controls/>


    </Modal>


)


}