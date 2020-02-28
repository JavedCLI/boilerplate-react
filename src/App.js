import React,{ Component } from 'react';
import {Helmet} from 'react-helmet';
import HeaderComponant from './HeaderComponant';
import MainComponant from './MainComponant';
import FooterComponant from './FooterComponant';


class App extends Component {
constructor(props){
  super(props)
  this.state={
    text:"Sample Text from AppComponant"
  }
}



  render() {

    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
       
        <HeaderComponant />
          <MainComponant text={this.state.text} />
          <FooterComponant />

          <h1>Home</h1>
      </div>
    )
  }
}



export default App;
