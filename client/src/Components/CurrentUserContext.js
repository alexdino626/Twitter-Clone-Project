import { createContext, useReducer, useEffect, useState } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [status, setStatus] = useState(false);



    useEffect(()=> {
        fetch('/api/me/profile')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setCurrentUser(data)
            // , setStatus(true)
        })
        }, []);

        // /individual user




    return(
        <CurrentUserContext.Provider 
        value={
            {   currentUser,
                status,
                // tweets,
            }
        }>
            {children}
        </CurrentUserContext.Provider>
    );
};