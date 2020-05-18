import * as React from 'react'
import history from '../../services/history'

console.log(history.location.state)

export default class Done extends React.Component<{}, {}> {

    render () {
        return (
           <div className="signup-done">
               <div className="signup-done__checkmark">&#x2714;</div>
               <h2>Please verify your email address, you should have received an email from us already!</h2>
           </div>
        )
    }
}