import {useAuthentication} from "../contexts/AuthContext.jsx";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useEffect} from "react";

function RequireAuth() {

    const {isAuthenticated} = useAuthentication();
    const location = useLocation();

    useEffect(() => {
        console.log(isAuthenticated);
    }, [isAuthenticated]);

    return (
        isAuthenticated
            ? <Outlet/>
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;