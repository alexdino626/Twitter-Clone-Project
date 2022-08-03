import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
export const CurrentUserContext = React.createContext(null);

const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [status, setStatus] = useState("loading");
  // const [error, setError] = useState(false);

    const history = useHistory();
    useEffect(() => {
    fetch("/api/me/profile")
        .then((response) => response.json())
        .then((data) => {
        setCurrentUser(data);
        setStatus("idle");
        })
        .catch(() => history.push("/error"));
    }, []);
    console.log(currentUser);

    return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
        {children}
    </CurrentUserContext.Provider>
    );
};

export default CurrentUserProvider;