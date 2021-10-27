import { Component } from "react";
import Hornedbeasts from "./Hornedbeasts"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import data from "./data.json";

class Main extends Component{

    render(){
        return(
            <main>
                <Row xs = {1} md = {2} lg = {3}>
                    {Array.from({ length: 1}).map((_, idx) => (
                    <Col>
                        {data.map(element => <Hornedbeasts{...element}/>)}
                    </Col>
                    ))}
                </Row>
            </main>
        )
    }
}

export default Main;