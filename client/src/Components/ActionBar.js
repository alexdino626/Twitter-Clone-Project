import React from "react";
import styled from "styled-components";
import {useState} from "react"
import {FaRegComment} from "react-icons/fa"
import {AiOutlineRetweet} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {MdIosShare} from "react-icons/md"
import {FcLike} from "react-icons/fc"
import { COLORS } from "../constants";

const ActionBar = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [changeLikes, setChangeLikes] = useState();
    const [numOfLikes, setNumOfLikes] = useState(0);

    const [isRetweeted, setIsRetweeted] = useState(false);
const [changeRetweet, setChangeRetweet] = useState();
const [numOfRetweet, setNumOfRetweet] = useState(0);

const handleRetweet = () => {
setIsRetweeted(!isRetweeted);
setChangeRetweet(numOfRetweet);
setNumOfRetweet(isRetweeted ? numOfRetweet - 1 : numOfRetweet + 1);
};

const handleLike = () => {
    setIsLiked(!isLiked);
    setChangeLikes(numOfLikes);
    setNumOfLikes(isLiked ? numOfLikes - 1 : numOfLikes + 1);
};

return (
    <Wrapper>
        <ChatButton><FaRegComment/></ChatButton>
        <RetweetButton isRetweet={isRetweeted} onClick={handleRetweet}>
        {isRetweeted ? <AiOutlineRetweet fill="indianred"/> : <AiOutlineRetweet/>} {numOfRetweet > 0 && <span>{numOfRetweet}</span>}
        </RetweetButton>
        <HeartButton isLiked={isLiked} onClick={handleLike} >
        {isLiked ? <AiOutlineHeart fill="lightsalmon"/> : <AiOutlineHeart/>} {numOfLikes > 0 && <span>{numOfLikes}</span>}
        </HeartButton>
        <ShareButton><MdIosShare/></ShareButton>
    </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 30px;
    max-width: 500px;
    padding-top: 35px;
    padding-bottom: 15px;
`

// chat button 
const ChatButton = styled.span`
    font-size: 20px;
    &:hover {
    color: darkblue;
    }
`

// retweet button
const RetweetButton = styled.span`
    font-size: 20px;
    &:hover {
    color: darkblue;
    } 
`

// heart button
const HeartButton = styled.span`
    font-size: 20px;
    &:hover {
    color: darkblue; 
    }
`

// share button
const ShareButton = styled.span`
    font-size: 20px;
    &:hover {
    color: darkblue; 
    }
`

export default ActionBar;
