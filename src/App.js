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
      beast:{}
    }
  }

  handleClick = (beastChild) =>{
    console.log(beastChild);
    this.setState({beast:beastChild});
    this.showModal();
  }

  showModal = () =>{
    this.setState({show:true});
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
        <SelectedBeast show = {this.state.show} handleClose = {this.handleClose} beast = {this.state.beast}/>

  
      </div>
    );
  }
};

