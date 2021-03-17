import React from 'react';
import VideoItem from './video-item';
import VideoDetails from "./video-details";

export  default class VideoList extends React.Component {
    componentDidMount() {

    }
    render() {
        const {videos, onVideoSelect, selectedVideo} = this.props;
        const RenderedList = videos.map((el) => {
            return (
                <div key={el.etag} className='col-12 mt-3'>
                    <VideoItem onVideoSelect={onVideoSelect} video={el}/>
                    <hr/>
                </div>
            )
        })
        return (
            <div className='row'>
                <div className='col-md-8'>
                <VideoDetails selected={selectedVideo}/>
                </div>
                <div className='col-md-4 p-0'>
                {RenderedList}
                </div>
            </div>
        )
    }
}