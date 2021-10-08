import React, { Component } from 'react'

export class Q3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            textColor:"black",
            bgColor: "",
            fontSize: "100%",
        }
    }

    boxClick = (e) => {
        this.setState({
          bgColor: "green",
          textColor:"white",
          fontSize: "120%",
        })   
    }

    render() {
        return (
            <>
                <div>
                    <ul> 
                        <li>Wrong Answer</li>
                        <li className="boxClickCss" 
                                    style={{
                                        backgroundColor: this.state.bgColor,
                                        color:this.state.textColor, 
                                        fontSize:this.state.fontSize,
                                    }} >
                                        Correct Answer          
                        </li>
                        <li>Wrong Answer</li>
                    </ul>
                        
                            
                    <button onClick={this.boxClick}>Answer</button>
                </div>
                
           </> 
        )
    }
}

export default Q3
