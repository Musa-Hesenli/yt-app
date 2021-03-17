import React from 'react'


class Image extends React.Component {
    state = {
        search_term : ''
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitForm(this.state.search_term)
    }
    handleChange = (e) => {
        this.setState({
            search_term : e.target.value
        })
    }
    render() {
        return (
            <div className='col-12'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input onChange={(e) => this.handleChange(e)} className='form-control' value={this.state.search_term}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Image;