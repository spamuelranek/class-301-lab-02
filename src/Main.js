import { Component } from "react";
import Hornedbeasts from "./Hornedbeasts"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Main extends Component{

    render(){
        return(
            <main>
                <Row >
                    {Array.from({ length: 1}).map((_, idx) => (
                    <Col>
                        {this.props.data.map(element => <Hornedbeasts key = {element.title} handleClick = {this.props.handleClick} beast = {element}/>)}
                    </Col>
                    ))}
                </Row>
            </main>
        )
    }
}

export default Main;