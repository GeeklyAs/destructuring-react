import React, { Component } from 'react'
import User from './Singers'

class Display extends Component {
    render () {
        console.log(this.nom)

        return (
            <div>
                <h1>Musicien </h1>
                <User nom='Jean' age='78'/> 
                <User nom='assma' age='22'/>
                <User nom='coucou' age='40'/>
            </div>
        )
    }

}

export default Display