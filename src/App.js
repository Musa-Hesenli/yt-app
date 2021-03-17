import React from 'react'
// import Main from './ReacJsHooks/index'
// import Index from "./dropdown/index";
import Main from './youtube/components/index';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  // state = {
  //   "images" : []
  // }
  // findImages = async term =>  {
  //   const response = await axios.get('search/photos', {
  //     params : {
  //       query : term
  //     },
  //   });
  //   this.setState({
  //     images : response.data.results
  //   });

  // }
  render() {
    return (
      <div className="App">
        <div className='container my-4'>
          <Main/>
        </div>
      </div>
    )
  }
}

export default App;
