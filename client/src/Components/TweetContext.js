import { createContext, useState } from "react";

export const TweetContext = createContext({
    tweets: null,
    setTweets: null,
}
);
export const TweetContextProvider= ({children})=>{

const [tweets, setTweets] = useState(null)


    return(
        <TweetContext.Provider 
        value={
            {   tweets,
                setTweets
            }
        }>
            {children}
        </TweetContext.Provider>
    );
};