import React, { Component } from 'react';


export class Questions extends Component {

    constructor(props){
        super(props);
        this.state = {
            textColor:"black"
        }
    }

    changeColor = (color)=>{
        this.setState({
            textColor:color
        })
    }

    render() {
        return (
            <div>
                <h3>Which rule is the most important rule of the road in SA</h3>
                        <ul>
                            <li>Be Kind</li>
                            <li>Drink and drive</li>
                            <li style={{color:this.state.textColor}}>Keep to the left as far as is safe</li>
                        </ul>
                        <button onClick={()=>{ this.changeColor("green")}} style={{backgroundColor:"pink"}}>Color test</button>
            </div>
        )
    }
}

export default Questions
