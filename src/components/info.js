import React from 'react';

class Latitude extends React.Component {
    constructor(props) {
        super(props);
        // this.calculate = this.calculate.bind(this);
        this.state = {
            lat : null,
            errMessage : ''
        }
    };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err => this.setState({errMessage:err.message})
        )
    }
    render() {
        return (
            <div>
                <p>The place of the user: {this.state.lat}</p>
            </div>
        )
    }
};

export default Latitude;