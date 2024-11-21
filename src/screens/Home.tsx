import React from 'react'
import Counter from '../components/counter'
import RegistrationForm from '../components/registrationForm'
import ApiIntegration from '../components/ApiIntegration'

const Home: React.FC = () => {
    return (
        <div className="md:flex md:min-h-screen gap-4 pt-14">
            <Counter />
            <RegistrationForm />
            <ApiIntegration />
        </div>
    )
}

export default Home
