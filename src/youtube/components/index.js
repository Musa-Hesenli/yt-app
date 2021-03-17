import React from 'react'
import SearchBar from './searchBar';
import youtube from '../api'
import VideoList from './video-list';

export default class Main extends React.Component {
    state = {
        videos : [],
        selectedVideo : null
    }
    searchResults = async term => {
        const response = await youtube.get('/search', {
            params : {
                q : term
            }
        });
        this.setState({
            videos : response.data.items,
            selectedVideo : response.data.items[0]
        })
    }
    selectedVideo = video => {
        this.setState({
            selectedVideo : video
        })
    }
    // componentDidMount() {
    //     this.setState({

    //     })
    // }
    render() {
        return (
            <div className=''>
                <SearchBar onFormSubmit = {this.searchResults}/>
                {/* <p>I have {this.state.videos.length} videos</p> */}
                <VideoList onVideoSelect={this.selectedVideo} videos={this.state.videos} selectedVideo={this.state.selectedVideo}/>
            </div>
        )
    }
}