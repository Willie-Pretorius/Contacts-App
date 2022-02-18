import React from "react";
import Avatar from "./Avatar"
import Info from "./Info"

function Card(props){
    return (
        <div className="card">
        <div className="top">
            <h2 className="name">{props.props.name}</h2>
            <Avatar props={props.props.imgURL} />
        </div>
        <div className="bottom">
            <Info details={props.props.phone}/>
            <Info details={props.props.email}/>
        </div>
      </div>
    )
}
export default Card