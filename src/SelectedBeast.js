import { Component } from "react/cjs/react.production.min";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SelectedBeast extends Component{

    handleClose = () => {
        this.props.handleClose();
    }

    render(){
        return(
            <Modal show ={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src ={this.props.beast.img_url} alt = {this.props.beast.description}/>
                    <p>{this.props.beast.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick = {this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            
        )

    }
}

