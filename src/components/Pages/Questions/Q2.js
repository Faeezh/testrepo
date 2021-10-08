import React, { Component } from 'react'

export class Q2 extends Component {
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
                <h3>Who has right of way at a traffic circle</h3>
                        <ul>
                            <li>Vehicles coming from the right</li>     
                            <li style={{color:this.state.textColor}}>Vehicles who crossed the line first into a traffic circle</li>
                            <li>speeding vehicles</li>
                        </ul>
                        <button onClick={()=>{ this.changeColor("green")}} style={{backgroundColor:"pink"}}>Color test</button>
            </div>
        )
    }
}

export default Q2
