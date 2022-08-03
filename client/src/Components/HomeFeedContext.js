import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const HomeFeedContext = React.createContext(null);

const HomeFeedProvider = ({ children }) => {
    const [feed, setFeed] = React.useState(null);
    const [feedStatus, feedSetStatus] = React.useState("loading");

    const history = useHistory()
useEffect(() => {
    fetch("/api/me/home-feed")
    .then((response) => response.json())
    .then((data) => {
        setFeed(data);
        feedSetStatus("idle");
        })
        .catch(() => history.push("/error"));
    }, []);
    console.log();

return (
    <HomeFeedContext.Provider value={{ feed, feedStatus }}>
        {children}
    </HomeFeedContext.Provider>
);
};

export default HomeFeedProvider;