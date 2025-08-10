import React from "react";

export default function Card(props) {

    return (
        <div className="card" onClick={props.onCardClick}>
            <img src={props.image} alt={props.title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-author">{props.author} - {props.date}</p>
                <p className="card-category">{props.category}</p>
                <small className="card-description">{props.content}</small>
            </div>
        </div>
    );
}