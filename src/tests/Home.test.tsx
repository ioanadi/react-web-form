import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../views/Home'
import history from '../services/history'


test('goes to signup page after pressing the sign up button', () => {

    render(<Home />)
    fireEvent.click(screen.getByText('Sign Up'))

    expect(history.location.pathname).toBe('/sign-up/user')
})
