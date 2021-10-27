import { Component } from "react/cjs/react.production.min";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SelectedBeast extends Component{

    handleClose = () => {
        this.props.handleClose();
        console.log(this.props.clickedBeastTitle);
    }

    render(){
        return(
            <Modal show ={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.clickedBeastTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src ={this.props.clickedBeastImg} alt = {this.props.clickedDescription}/>
                    <p>{this.props.clickedDescription}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick = {this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            
        )

    }
}

