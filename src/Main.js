import { Component } from "react";
import Hornedbeasts from "./Hornedbeasts"
import data from "./data.json";

class Main extends Component{

    render(){
        return(
            <main>
                {data.map(element => <Hornedbeasts{...element}/>)}
            </main>
        )
    }
}

export default Main;