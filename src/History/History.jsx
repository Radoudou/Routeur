import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class History extends Component {
    render() {
        return (
            <div>
                <Link to="/"> Acceuille </Link>
                <h1>Notre histoire</h1>
            </div>
        )
    }
}
