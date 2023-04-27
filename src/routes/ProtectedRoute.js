import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
    const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
    return (AUTH_TOKEN === null) ? <Navigate to='/' /> : <Component />
}

export default ProtectedRoute;