import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { CircleSpinner } from "react-spinners-kit";
import Tweet from "./Tweet";
// import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "../constants";
import Error from "./Error";
import { useHistory } from "react-router-dom";
import SmallTweet from "./SmallTweet";


const HomeFeed = () => {
    const [text, setText] = useState("");
    const [temporaryData, setTemporaryData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [characterCount, setCharacterCount] = useState(280);

    const history = useHistory();
    useEffect(() => {
        setIsLoading(true);
        fetch("/api/me/home-feed")
        .then((res) => res.json())
        .then((data) => {
            setTemporaryData(data);
            setIsLoading(false);
        })
        .catch(() => history.push("/error"));
    }, []);

    if (isLoading) {
        return (
            <div>
                <CircleSpinner size={50} color="orange" />
            </div>
        );
    }

    const { tweetIds, tweetsById } = temporaryData;

    const onChangeHandler = (e) => {
        e.preventDefault();
        const textValue = e.target.value;
        setCharacterCount(280 - e.target.value.length);
        setText(textValue);
    };

    const onSubmitHandler = () => {
        fetch("/api/tweet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: text }),
        })
        .then((res) => res.json())
        .then((data) => {})
        .catch(() => history.push("/error"));
    };

    const isEnabled = characterCount > 0 && characterCount!==280;

    return (
        <Wrapper>
            <InputBox onSubmit={onSubmitHandler}>
                <Input
                    type="text"
                    id="tweet"
                    value={text}
                    onChange={onChangeHandler}
                    placeholder="What's happening?"
                />
                <Div>
                    {characterCount < 280 && (
                        <p
                            style={{
                                color:
                                    characterCount < 0
                                    ? "red"
                                    : characterCount < 56
                                    ? "orange"
                                    : null,
                                }}
                            >
                                {characterCount}
                            </p>
                        )}
                    </Div>
                    <Button disabled={!isEnabled}>Meow</Button>
                </InputBox>
                {tweetIds?.map((tweetId, index) => {
                    return (
                        <TweetWrapper key={Math.floor(Math.random() * 140000000)}>
                            {" "}
                            <SmallTweet key={tweetId} tweet={tweetsById[tweetId]} />
                        </TweetWrapper>
                    );
                })}
        </Wrapper>
    );
};
const Div = styled.div`
    font-size: 15px;
    position: absolute;
    white-space: nowrap;
    margin-top: 110px;
    margin-left: 375px;
`
const InputBox = styled.form`
    background-color: aliceblue;
    margin-top: 50px;
    margin-left: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const TweetWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    background-color: hsl(208, 100%, 97%);
    color: black;
    margin-left: 15px;
    height: 150px;
    width: 500px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
`
const Button = styled.button`
    position: absolute;
    white-space: nowrap;
    margin-left: 410px;
    margin-top: 100px;
    width: 100px;
    font-size: 20px;
    border-radius: 10px;
    background-color: ${COLORS.button};
    color: white;
    border: none;
    &:disabled{
        background-color: gray;
    }
`
const Wrapper = styled.div`
`
export default HomeFeed;
