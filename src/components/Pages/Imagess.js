import React from 'react'
import p1 from './pictures/p1.jpg';
import p2 from './pictures/p2.jpg';
import p3 from './pictures/p3.jpg';
import p4 from './pictures/p4.jpg';
import p5 from './pictures/p5.jpg';
import p6 from './pictures/p6.jpg';

function Imagess() {
    return (
        <div>
            <img src={p1} alt=""/>
            <img src={p2} alt=""/>
            <img src={p3} alt=""/>
            <img src={p4} alt=""/>
            <img src={p5} alt=""/>
            <img src={p6} alt=""/>       
        </div>
    )
}

export default Imagess
