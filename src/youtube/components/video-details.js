import React from 'react';

export default class Details extends React.Component {
    render() {
        const {selected} = this.props; 
        if(!selected) {
            return '';
        }
        return (
            <div className='col-12 mt-3'>
                <div className='card'>
                    <iframe className='card-img-top' title='video player' style={{ height : 400 }} src={`https://www.youtube.com/embed/${selected.id.videoId}`} />
                    <div className='card-body'>
                        <p className='text-dark text-muted'>{selected.snippet.title}</p>
                        <p className='blockquote-footer text-justify'>{selected.snippet.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}