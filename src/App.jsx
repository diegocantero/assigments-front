import './App.css';
import CreateRegister from './pages/create_register/App';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
    const isLoggedIn = true; // Aquí deberías obtener el estado de autenticación real

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={ isLoggedIn ? <Home /> :  <Navigate to="/" />}  />
                <Route path="/createuser" element={ isLoggedIn ? <CreateRegister /> :  <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
