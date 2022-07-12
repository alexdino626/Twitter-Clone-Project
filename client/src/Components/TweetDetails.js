import { useContext, useEffect } from "react";
import { TweetContext } from "./TweetContext";
import { CurrentUserContext } from "./CurrentUserContext";

const TweetDetails = () => {
    
    useEffect(() => {
        fetch("/tweet/:tweetId")
        .then((res) => res.json())
        .then((data) => {
            receiveTweetDetails(data);
            console.log(data);
        });
        }, []);

        const {
            state: { tweetIds, tweetsById, id },
            actions: { receiveTweetDetails },
            } = useContext(TweetContext);
            if(!tweetsById) {
                return <div>Loading</div>
            }

    return <div>Tweet Details</div>;
};

export default TweetDetails
