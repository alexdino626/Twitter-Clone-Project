import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { AllTweets } from "./HomeFeed";

const ProfileFeed = () => { 
    const {tweets, setTweets} = useState(null);
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
            <div>
                {!!tweets && tweets.tweetIds.map((tweetId)=>{
            const tweetData = tweets.tweetsById[tweetId]
            return <p>{tweetData.status}</p>
                })}
            </div>
        )

}
export default ProfileFeed