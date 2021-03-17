import React from 'react'
class Image extends React.Component {
    render() {
        var images;
        if(this.props.images) {
            images = this.props.images.map((img) => {
                const ref = React.createRef();
                // ref.current.addEventListener('load');
                return <div ref={ref} key={img.id}  className='col-md-4 mb-3' style={{ height : '300px' }}><img className='w-100 h-100' alt={img.description} src={img.urls.regular}/></div>

            })
        }
        return (
            // {images}
            <div className='row'>
                { images ? images : "" }
            </div>
        )
    }
};

export default Image;