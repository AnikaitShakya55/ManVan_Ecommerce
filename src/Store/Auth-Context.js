import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { },
    userEmail : '',
});

const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [userEmail , setUserEmail] =useState(localStorage.getItem("email"));
   

    useEffect(() => {
        if (token) {
            setTimeout(() => {
                logoutHandler();
                alert("Your session has expired. Please login again.");
            }, 120 * 60 * 1000); 
         
        } 
        
    }, [token]);

    const loginHandler = (token,email) => {
        setToken(token);
        setUserEmail(email)
        localStorage.setItem("token", token);
        localStorage.setItem("email", email)
    };

    const logoutHandler = () => {
        setToken(null);
        setUserEmail(null)
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    };

    const userIsLoggedIn = !!token;

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        userEmail : userEmail,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
