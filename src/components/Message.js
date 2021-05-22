import React, { Children, useState } from 'react'
import { Link } from 'react-router-dom'

const Message = ({children,color}) => {
    const [show,setShow]=useState('visible');

    const visibleHandler=()=>{
        setShow('hidden');
    }
    return (
        <div>
            <div className={`ui message transition ${show} ${color}`}>
                <i className="close icon" onClick={visibleHandler}></i>
                <div className="header">
                  {color? 'Error!': 'Success!' } 
                </div>
                <p>{children}</p>
           </div>
        </div>
    )
}

export default Message;
