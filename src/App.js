import { Component } from 'react/cjs/react.production.min';
import './App.css';
import data from "./data.json";
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
      clickedDescription : '',
      clickedBeastTitle : '',
    }
  }

  handleClick = (beast) =>{
    this.setState({show:true});
    this.setState({clickedDescription : beast.description});
    this.setState({clickedBeastImg : beast.image_url});
    this.setState({clickedBeastTitle: beast.title});
  }

  handleClose = () =>{
    this.setState({show:false});
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Main data = {data} handleClick = {this.handleClick}/>
        <Footer/>
        <SelectedBeast show = {this.state.show} handleClose = {this.handleClose} clickedDescription = {this.state.clickedDescription} clickedBeastImg = {this.state.clickedBeastImg} clickedBeastTitle ={ this.state.clickedBeastTitle}/>

  
      </div>
    );
  }
};

