import { Component } from "react";
import Card from 'react-bootstrap/Card'

class Hornedbeasts extends Component{
    constructor(props){
        super(props);
        this.state ={
            numberOfHorns:this.props.horns,
            keywords: this.props.keywords,
            numOfClicks : 0,
        }
    }

    handleClick = () => this.setState({numOfClicks: this.state.numOfClicks + 1})

    render(){
        return(
              <Card style ={{ width: '18rem'}}>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Img variant="top" src = {this.props.image_url} alt = {this.props.description} onClick ={this.handleClick}/>
                      <Card.Body>
                          <Card.Text>
                              {this.props.description}</Card.Text>
                          <Card.Text>a heart: {this.state.numOfClicks}</Card.Text>
                      </Card.Body>
              </Card>
        )
    }
}

export default Hornedbeasts;
