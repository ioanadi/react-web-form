import * as React from 'react'
import history from '../services/history'

export default class SignUp extends React.Component<{}, {}> {

    goToSignUpPage = () => { 
        history.push({pathname: '/sign-up/user'}) 
    }

    render () {

        return (
            <div className="home">
                <h2>Welcome!</h2>
                <h2>Sign up and get access to our integration solutions</h2>
                <button className="custom-button primary" onClick={this.goToSignUpPage}> <span>Sign Up</span>  </button>
            </div>
        )
    }
}
