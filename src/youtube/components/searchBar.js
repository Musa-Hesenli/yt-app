import React from "react";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term : ''
        }
    }
    handleChange = (e) => {
        this.setState({
            term : e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className='col-12'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={this.submitHandler}>
                            <input onChange={this.handleChange} style={{ boxShadow:  'none !important' }} className='form-control rounded-0' value={this.state.term}/>
                            <br/>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}