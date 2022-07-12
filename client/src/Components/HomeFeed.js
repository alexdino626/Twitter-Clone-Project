import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import SmallTweet from "./SmallTweet";
import { TweetContext } from "./TweetContext";



const HomeFeed = () => {
    const {tweets, setTweets} = useContext(TweetContext);

    

    useEffect(()=>{
        fetch('/api/me/home-feed')
        .then(res => res.json())
        .then((data) =>
            setTweets(data)
        
        )
    },[]
    )
    

    return(
    <AllTweets>
        <Header>Home</Header>
        <Form>
            <StatusInput placeholder="What's happening?" type="text" />
        </Form>
        <Button>Tweet</Button>
        {!!tweets && tweets.tweetIds.map((tweetId)=>{
            const tweetData = tweets.tweetsById[tweetId]
            return (
                <SmallTweet key={tweetId}
                tweetData = {tweetData}
                />
            )
        })}
    </AllTweets>
        
        ) 
    };
    // <pre>{JSON.stringify(tweetData, undefined, 12)}</pre>

export const AllTweets = styled.div`
margin: 20px 0 20px 0;
display: flex;
flex-direction: column;
border-right: solid 1px ${COLORS.lightgrey};
`
const Header = styled.h1`
border-bottom: solid 1px ${COLORS.lightgrey};
`

const Form = styled.div`
display: flex;
margin: 15px;
`
const StatusInput = styled.input`
width:300px;
height: 100px;
` 

const Button = styled.button`
height: 35px;
width: 60px;
padding: 10px;
border-radius: 25px;
border-style: none;
background-color: ${COLORS.primary};
color: white;
`

export default HomeFeed
{/* <Status
characters={characters}
setCharacters={setCharacters}
message={message}
setMessage={setMessage}
/> */}
// {alltweetsArray.map((tweet)=> {
//     return <SmallTweet key ={tweet.id} tweet={tweet}
// }
// // )} */}