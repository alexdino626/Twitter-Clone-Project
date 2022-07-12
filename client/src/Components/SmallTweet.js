

const SmallTweet = ({tweetData}) => {
    
    return(
        <>
        <img src={tweetData.avatarSrc} />
        <p>{tweetData.diplayName}</p>
        <p>{tweetData.handle}</p>
        </>
    )
}

export default SmallTweet