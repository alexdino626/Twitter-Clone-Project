import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { AllTweets } from "./HomeFeed";
import { TweetContext } from "./TweetContext";

const ProfileFeed = () => { 
    const {tweets, setTweets} = useContext(TweetContext);
    const {handle} = useParams()
    useEffect(()=> {
        fetch(`/api/${handle}/feed`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setTweets(data);
        })
        }, []);
        console.log(useParams());
    
        return(
            <AllTweets>
                {!!tweets && tweets.tweetIds.map((tweetId)=>{
            const tweetData = tweets.tweetsById[tweetId]
            return <p>{tweetData.status}</p>
                })}
            </AllTweets>
        )

}
export default ProfileFeed