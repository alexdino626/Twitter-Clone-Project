import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import BigTweet from "./BigTweet";

export const TweetDetails = () => {
    const [tweet, receiveTweetData] = useState(null);
    const { tweetId } = useParams();

    const history = useHistory();
    useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
        .then((response) => response.json())
        .then((data) => {
            receiveTweetData(data.tweet);
            console.log(data);
        })
        .catch(() => history.push("/error"));
    });

    if (!tweetId) {
    return <Load>loading...</Load>;
    }
    return <BigTweet tweet={tweet}></BigTweet>;
};

const Load = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;


export default TweetDetails
