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
            <Card>
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

{/* <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row> */}