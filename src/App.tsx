import Navbar from './components/Navbar'
import AppRouter from './routes/AppRouter'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    return (
        <div>
            <Navbar />
            <AppRouter />
            <ToastContainer />
        </div>
    )
}

export default App
