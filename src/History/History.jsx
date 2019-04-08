import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./History.css"


export default class History extends Component {
    render() {
        return (
            <div>
                <Link className="colored" to="/"> Acceuille </Link>
                <h1>Notre histoire</h1>
            </div>
        )
    }
}
