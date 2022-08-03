import React from "react";
import styled from 'styled-components';
import ActionBar from "./ActionBar";
import { format } from "date-fns";
import { useHistory } from "react-router-dom";
// import { COLORS } from "./constants";

const SmallTweet = ({tweet}) => {
let history = useHistory()
function handleClick(ev) {
    ev.preventDefault();
    history.push(`/profile/${tweet.author.handle}`);
}

return (
        <Wrapper>
            <Avatar src={tweet.author.avatarSrc} onClick={handleClick}/>
            <Name onClick={handleClick}><strong>{tweet.author.displayName}</strong> <Handle>@{tweet.author.handle}</Handle></Name>
            <ClickWrapper onClick={e=>{history.push(`/tweet/${tweet.id}`)}}>
            <Status>{tweet.status}</Status> {
                tweet.media.length > 0 ? (<Img src = {tweet.media[0].url}/>) : ( <></> )
                }
            <Time>{format(new Date(tweet.timestamp), "MM/dd/yyyy")}</Time>
            </ClickWrapper>
            <ActionBar/>
        </Wrapper>
    );
};

const Avatar = styled.img`
cursor: pointer;
width: 50px;
border-radius: 50%;
`
const Name = styled.span`
cursor: pointer;
position: absolute;
white-space: nowrap;
font-size: 15px;
margin-left: 20px;
margin-top: 15px;
`
const ClickWrapper = styled.div`
    width: 580px;
`
const Img = styled.img`
    width: 545px;
    border-radius: 20px;
`
const Wrapper = styled.div`
    width: 580px;
    padding: 1em;
    border: 1px solid hsl(238, 10%, 24%);
` 
const Handle = styled.span`
`
const Time = styled.div`
    color: grey;
    font-size: 15px;
`
const Status = styled.div`
    max-width: 500px;
    padding: 10px;
`

export default SmallTweet