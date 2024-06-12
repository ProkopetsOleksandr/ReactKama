import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({children}) => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ path: location.pathname }} />
    }

    return (children);
}