import {createContext, useContext, useState} from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function AuthContextProvider({children}) {
    const [username, setUsername] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isNew, setIsNew] = useState(false);

    function updateAuth(username, isAuthenticated, isNew){
        setUsername(username);
        setIsAuthenticated(isAuthenticated);
        setIsNew(isNew);
    }

    return (
        <AuthContext.Provider value={{
            username, setUsername,
            isAuthenticated, setIsAuthenticated,
            isNew, setIsNew,
            updateAuth

        }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuthentication() {
    return useContext(AuthContext);
}

export {AuthContextProvider, useAuthentication};