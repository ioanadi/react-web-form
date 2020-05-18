import * as React from 'react'
import history from '../../services/history'

interface PrivacyState {
    subscribeToProductUpdates: boolean,
    subscribeToOtherProductsInfo: boolean
}

export default class Privacy extends React.Component<{}, PrivacyState> {

    constructor(props: any) {
        super(props)
        this.state = { subscribeToProductUpdates: false, subscribeToOtherProductsInfo: false }
    }

    goToDonePage = () => { 
        history.push({pathname: '/sign-up/done', state: {...this.state , ...history.location.state} }) 
    }

    checkbox1Toggle = () => {
        this.setState({
            subscribeToProductUpdates: !this.state.subscribeToProductUpdates,
        })
    }

    checkbox2Toggle = () => {
        this.setState({
            subscribeToOtherProductsInfo: !this.state.subscribeToOtherProductsInfo,
        })
    }

    render () {

        return (
            <div className="signup__privacy">

                <div className="signup__privacy-checkbox">
                    <input type="checkbox" checked={this.state.subscribeToProductUpdates} onChange={this.checkbox1Toggle} id="signup-privacy-check1"/>
                    <label htmlFor="signup-privacy-check1">Receive updates about Tray.io product by email</label>
                </div>

                <div className="signup__privacy-checkbox">
                    <input type="checkbox" checked={this.state.subscribeToOtherProductsInfo} onChange={this.checkbox2Toggle} id="signup-privacy-check2"/>
                    <label htmlFor="signup-privacy-check2">Receive communication by email for other products created by the Tray.io team</label>
                </div>

                <button className="custom-button" onClick={this.goToDonePage}> <span>Submit</span> </button>
            </div>
        )
    }
}