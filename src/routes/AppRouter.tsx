import { Route, Routes } from 'react-router-dom'
import HomePage from '../screens/Home'
import AboutPage from '../screens/About'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    )
}

export default AppRouter
