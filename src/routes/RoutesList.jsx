import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from "../pages/Login/Login";
import Songs from "../pages/Songs/Songs";
import Favorites from "../pages/Favorites/Favorites";
import NotFound from "../pages/NotFound/NotFound";

const RoutesList = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/songs' element={<ProtectedRoute component={Songs} />} />
            <Route path='/favorites' element={<ProtectedRoute component={Favorites} />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default RoutesList;