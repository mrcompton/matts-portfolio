import React, { Component } from 'react'
import './NavBar.scss'

class NavBar extends Component {


    render() {
        return (
            <div className='NavBar'>
                <span>Home</span>
                <span>About Me</span>
                <span>Skills</span>
                <span>Portfolio</span>
                <span>Contact</span>
            </div>

        )
    }
}

export default NavBar
