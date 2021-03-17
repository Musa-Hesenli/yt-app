import React from "react";

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className='row'>
            <div className='col-md-4 p-0'>
                <img style={{ width : '100%', height : 80, objectFit :'cover' }} src={video.snippet.thumbnails.high.url} alt='video.snippet.title'/>
            </div>
            <div className='col-md-8'>
                <a href="/#" onClick={() => onVideoSelect(video) }>{video.snippet.title}</a>
            </div>
            <hr/>
        </div>
    )

}
export default VideoItem;