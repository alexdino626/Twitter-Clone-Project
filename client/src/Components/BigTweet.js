import React from "react";
import ActionBar from "./ActionBar"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { format } from "date-fns";
import { COLORS } from "../constants";

const BigTweet = ({tweet}) => {
    let history = useHistory()
    function handleClick(ev) {
        ev.preventDefault();
        history.push(`/profile/${tweet.author.handle}`);
    }

    return tweet ? (
    <>
        <Div>
        <Wrapper>
            <Tweet>
                <Avatar src={tweet.author.avatarSrc} onClick={handleClick} />
                <Author onClick={handleClick}><strong>{tweet.author.displayName}</strong> <Handle>@{tweet.author.handle}</Handle></Author>
            </Tweet>
            <TweetContent>
                {" "}
                <div>{tweet.status}</div>
                <div>
                {tweet.media[0] ? <MediaPic src={tweet.media[0].url} /> : null}{" "}
                </div>
                <Time>{format(new Date(tweet.timestamp), "MM/dd/yyyy")}</Time>
            </TweetContent>
            <ActionBar /> 
            </Wrapper>
            </Div>
            </>
    ) : (
        <div>loading</div>
    );
    };

const Wrapper = styled.div`
    padding: 15px;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    width: 700px;
`
const Div = styled.div`
    padding-top: 150px;
`
const Handle = styled.span`
    color: ${COLORS.lightGray};
`
const Time = styled.div`
    padding-top: 10px;
    color: gray;
    font-size: 12px;
`
const Avatar = styled.img`
    margin-left: 20px;
    width: 65px;
    border-radius: 50%;
`
const Tweet = styled.div`
    display: flex;
`
const TweetContent = styled.div`
    padding: 29px;
`
const Author = styled.div`
    position: absolute;
    white-space: nowrap;
    font-size: 15px;
    margin-left: 100px;
    margin-top: 15px;
`
const MediaPic = styled.img`
    border-radius: 20px;
    height: 300px;
    width: 500px;
    margin-top: 5px;
`

const TweetActionsBar = styled.div`
    width: 550px;
    margin-left: 60px;
`
export default BigTweet;