import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavLink to="/notre-histoire"> Go histoire </NavLink>
                <h1>Bienvenue sur l'acceuil</h1>
            </div>
        )
    }
}
