import React,{ Component } from 'react';
import {Helmet} from 'react-helmet';
import HeaderComponant from './HeaderComponant';
import MainComponant from './MainComponant';
import FooterComponant from './FooterComponant';


class App extends Component {




  render() {

    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
       
        <HeaderComponant />
          <MainComponant />
          <FooterComponant />

          <h1>Home</h1>
      </div>
    )
  }
}



export default App;
