import * as React from 'react'
import '../styles/StepperLayout.scss'

interface StepperProps {
    content: React.ReactNode,
    currentStep: number
}


export default class User extends React.Component<StepperProps, {}> {

    getClasses(step: number) {
        if (step <= this.props.currentStep) {
            return "stepper__step highlighted"
        }
        return "stepper__step"
    }

    getStepIcon(step: number) {
        if (step < this.props.currentStep) {
            return (<span>&#10003;</span>) 
        }
        return (<span> {step}</span>) 
    }

    render () {
        return (
            <div className="stepper-layout">
                <div className="stepper-layout__stepper">
                    <div className={this.getClasses(1)}>
                        {this.getStepIcon(1)} User
                    </div>
                    <div className="stepper__line"></div>
                    <div className={this.getClasses(2)}>
                        {this.getStepIcon(2)} Privacy
                    </div>
                    <div className="stepper__line"></div>
                    <div className={this.getClasses(3)}>
                        {this.getStepIcon(3)} Done
                    </div>
                </div>
                <div className="stepper-layout__content">
                    {this.props.content}
                </div>
            </div>
        )
    }
}
