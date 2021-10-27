import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      clickedBeastImg : '',
      clickedBeastDes : '',
      clickedBeastTitle : '',
    }
  }

  handleClick = () =>{

  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
        <SelectedBeast show = {this.state.show} clickBeastDes = {this.state.clickedBeastDes} clickedBeastImg = {this.state.clickedBeastImg} clickedBeastTitle ={ this.state.clickedBeastTitle}/>

  
      </div>
    );
  }
};

