import { Component } from "react";
import Hornedbeasts from "./Hornedbeasts"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from "react-bootstrap/FloatingLabel";

let numbers = [1,2,3,100,'all'];

class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            beast:this.props.data,
            numbers:numbers,
        }
    }

    makeSelection = () => this.state.numbers.map(element => <option value = {element}> {element} </option>);

    selectHorns = (event) => {
        let selectedHorns = parseInt(event.target.value);

        if(!isNaN(selectedHorns)){
            this.setState({beast:this.props.data.filter(element => element.horns === selectedHorns)});
        }

        else(this.setState({beast:this.props.data}))
    }
    
    
    
    render(){
        return(
            <main>
                <FloatingLabel controlId = "floatingSelect" label ="Select the amount of horns">
                    <Form.Select onChange = {this.selectHorns} size="lg">
                        {this.makeSelection()}
                    </Form.Select>
                </FloatingLabel>
                <Row >
                    {Array.from({ length: 1}).map((_, idx) => (
                    <Col>
                        {this.state.beast.map(element => <Hornedbeasts key = {element.title} handleClick = {this.props.handleClick} beast = {element}/>)}
                    </Col>
                    ))}
                </Row>
            </main>
        )
    }
}

export default Main;