import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from './services/history'
import Home from './views/Home'
import StepperLayout from './components/StepperLayout'
import User from './views/sign-up/User'
import Privacy from './views/sign-up/Privacy'
import Done from './views/sign-up/Done'
import './styles/App.scss'

function App() {
    // Nested the router for better structure (the sign up pages are children to the sign-up module)
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/"> <Home/> </Route>
                <Route
                    path="/sign-up"
                    render={({ match: { url } }) => (
                        <>
                            <Route path={`${url}/user`}> <StepperLayout currentStep={1} content={<User/>}/> </Route>
                            <Route path={`${url}/privacy`}> <StepperLayout currentStep={2} content={<Privacy/>}/> </Route>
                            <Route path={`${url}/done`} > <StepperLayout currentStep={3} content={<Done/>}/> </Route>
                        </>
                    )}
                />
            </Switch>
        </Router>
    )
}

export default App
