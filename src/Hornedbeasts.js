import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Hornedbeasts extends Component{
    constructor(props){
        super(props);
        this.state ={
            numberOfHorns:this.props.beast.horns,
            keywords: this.props.beast.keywords,
            numOfClicks : 0,
        }
    }

    pictureClick = () =>{
        let beast = this.props.beast
        this.props.handleClick(beast);
    }

    handleClick = () => {
        this.setState({numOfClicks: this.state.numOfClicks + 1})
    }
    
    render(){
        return(
              <Card style ={{ width: '18rem'}}>
                  <Card.Title>{this.props.beast.title}</Card.Title>
                  <Card.Img variant="top" beast = {this.props.beast} src = {this.props.beast.image_url} alt = {this.props.beast.description} onClick ={this.pictureClick}/>
                      <Card.Body>
                          <Card.Text>
                              {this.props.beast.description}</Card.Text>
                          <Button onClick ={this.handleClick}> ❤️  : {this.state.numOfClicks} </Button>
                      </Card.Body>
              </Card>
        )
    }
}

export default Hornedbeasts;
