import moment from "moment";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
// import ActionBar from "./ActionBar";

const Tweet = ({ tweet }) => {
    const history = useHistory();
    const date = moment(tweet.timestamp).format("h:mm A • MMM Do YYYY");

    return (
        <>
            <Wrapper>
                <AvatarNameDiv>
                    <AvatarImg src={tweet.author.avatarSrc} />
                    <Linky to={`/${tweet.author.handle}/profile`}>
                        <UserNameDiv>{tweet.author.displayName}</UserNameDiv>
                        <HandleDiv>@{tweet.author.handle}</HandleDiv>
                    </Linky>
                </AvatarNameDiv>
                <Linky to={`/tweet/${tweet.id}`}>
                    <ClickWrapper
                        onClick={() => {
                            history.push(`/tweet/${tweet.id}`);
                        }}
                    >
                        <Status>{tweet.status}</Status>
                        {tweet.media.length > 0 ? <Img src={tweet.media[0].url} /> : <></>}
                        <Time> {date}</Time>
                    </ClickWrapper>
                </Linky>
                {/* <ActionBar /> */}
            </Wrapper>
        </>
    );
};
    
    const Wrapper = styled.div`
    border-top: 1px solid #37444d;
    
    &:hover {
        background: rgb(237, 117, 234);
        cursor: pointer;
    }
    `;
    const Img = styled.img`
        width: 500px;
        border-radius: 10px;
    `;
    const ClickWrapper = styled.div``;
    
    const AvatarImg = styled.img`
        width: 50px;
        border-radius: 9999px;
    `;
    const AvatarNameDiv = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    const UserNameDiv = styled.div`
        font-weight: 600;
    `;
    const HandleDiv = styled.div`
        color: #8a98a5;
    `;
    const Time = styled.div`
        color: gray;
        font-size: 12px;
    `;
    const Status = styled.div`
        max-width: 500px;
    `;
    const Linky = styled(Link)`
        text-decoration: none;
        &:link {
        color: white;
        }
        &:visited {
        color: white;
        }
    `;
    export default Tweet;