import React, { Component } from 'react'

class User extends Component {
    render () {
        const {nom, age} = this.props

        return (
            <div>
                <p>Chanteur: {nom} {age} ans</p>

            </div>
        )
    }

}
export default User