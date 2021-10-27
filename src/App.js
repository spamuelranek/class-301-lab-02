import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Component } from 'react/cjs/react.production.min';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
  
      </div>
    );
  }
};

