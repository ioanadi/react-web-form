import * as React from 'react'
import { useForm } from "react-hook-form"
import history from '../../services/history'
import '../../styles/Signup.scss'

type Inputs = {
    name: string,
    role: string,
    email: string,
    password: string
}
interface PasswordErrors {
    upperCharErr: boolean,
    lowerCharErr: boolean,
    numbersErr: boolean,
    min10CharErr: boolean,
}

export default function User() {
    const [passwordErrors, setPasswordErrors]: [PasswordErrors | undefined, React.Dispatch<React.SetStateAction<PasswordErrors | undefined>>] = React.useState()

    const { register, handleSubmit, errors } = useForm<Inputs>()

    const onSubmit = (values: any) => {
        history.push({pathname: '/sign-up/privacy', state: { ...values }}) 
    }

    return (
        <form className="signup-user__form form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input-container">
                <label>Name:</label>
                <input name="name" ref={register({ required: true })} />
                {errors.name && <span className="form-error">Name is required</span>}
            </div>
            
            <div className="form-input-container">
                <label>Role: <span>Optional</span></label> 
                <input name="role" ref={register} />
            </div>

            <div className="form-input-container">
                <label>Email:</label>
                <input name="email" ref={register({
                    required: true,
                    pattern:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })} />
                {errors.email && errors.email.type === "required" && <span className="form-error">Email is required</span>}
                {errors.email && errors.email.type === "pattern" && <span className="form-error">Email is invalid</span>}
            </div>

            <div className="form-input-container">
                <label>Password:</label>
                <input name="password" type="password" ref={register({
                    required: true,
                    validate: (value: string) => {
                        setPasswordErrors({
                            upperCharErr: !(/[A-Z]/.test(value)),
                            lowerCharErr: !(/[a-z]/.test(value)),
                            numbersErr: !(/\d/.test(value)),
                            min10CharErr: value.length < 10,
                        })
                        return /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && value.length > 9
                    }
                })} />
                {errors.password && errors.password.type === "required" && <span className="form-error">Password is required</span>}
                <div className="signup-user__form-pass-checker">
                    Your password needs to: <br/>
                    <span className={passwordErrors?.lowerCharErr ? 'rule-error' : ''}>
                        &#8226; include 1 lower case character
                    </span> <br/>
                    <span className={passwordErrors?.upperCharErr ? 'rule-error' : ''}>
                        &#8226; include 1 upper case
                    </span> <br/>
                    <span className={passwordErrors?.numbersErr ? 'rule-error' : ''}>
                        &#8226; include at least one number
                    </span> <br/>
                    <span className={passwordErrors?.min10CharErr ? 'rule-error' : ''}>
                        &#8226; be at least 10 characters long
                    </span> <br/>
                </div>
            </div>

            <button className="custom-button" type="submit"><span>submit</span></button>
        </form>
    )
}
