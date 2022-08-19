import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import moment from "moment";
import SmallTweet from "./SmallTweet";
import GlobalStyle from '../GlobalStyles';
import { COLORS } from "../constants";


const Profile = () => {
    const { profileId } = useParams();

    const [profile, setProfile] = useState(null);
    // const [temporaryData, setTemporaryData] = useState({});
    // const [isLoading, setIsLoading] = useState(true);
    const [tweets, setTweets] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetch(`/api/${profileId}/profile`)
        .then((response) => response.json())
        .then((data) => {
            setProfile(data.profile);
        })
        .catch(() => history.push("/error"));
    }, [profileId]);

    useEffect(() => {
        fetch(`/api/${profileId === "me" ? "treasurymog" : profileId}/feed`)
        .then((res) => res.json())
        .then((data) => {
            const tweetsdata = Object.values(data.tweetsById);
            setTweets(tweetsdata);
        })
            .catch(() => history.push("/error"));
        }, [profileId]);


        if (profile === null) {
            return "loading";
            }

    return(
        <>
        <GlobalStyle/>
            <Wrapper>
                <Banner src={profile.bannerSrc}/>
                <Avatar src={profile.avatarSrc}/>
                <Following>Following</Following>
                <Display>{profile.displayName}</Display>
                <Handle>@ {profile.handle}</Handle>
                <Info>
                    <FiCalendar/> Joined {" "} {moment(profile.joined).format("MMMM YYYY")}<Space></Space>

                    <FiMapPin/> {profile.location}
                </Info>
                <Number>
            {profile.numFollowing} Following <Space></Space>
            {profile.numFollowers} Followers
                </Number>
                <ActionBar>
                    <div>Tweets</div>
                    <div>Media</div>
                    <div>Likes</div>
                </ActionBar>
                {tweets.map((tweet) => (
                <SmallTweet tweet={tweet} />
            ))}
            </Wrapper>
            </>
        );
};
const Number = styled.span`
    color: blueviolet;
    padding-bottom: 25px;
    margin-left: 10px;
`
const Space = styled.span`
    margin-right: 10px;
`
const Info = styled.span`
    color: blueviolet;
    padding-top: 10px;
    margin-left: 10px;
`
const Display = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
`
const Handle = styled.span`
    padding-bottom: 10px;
    color: blueviolet;
    margin-left: 10px;
`
const Wrapper = styled.div`
    width: 581px;
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-top: 0px;
    border: 1px solid hsl(240, 100%, 27%);
`
const Banner = styled.img`
    max-width: 100;
    height: 200px;
`
const Avatar = styled.img`
    display: flex;
    border-radius: 50%;
    margin-top: -60px;
    border: 4px solid white;
    width: 130px;
    height: 130px;
    margin-left: 20px;
`
const ActionBar = styled.div`
    color: ${COLORS.lightGray};
    display: flex;
    justify-content: space-around;
    width: 540px;
`
const Following = styled.button`
    text-decoration: none;
    border: 0;
    background: blueviolet;
    color: white;
    border-radius: 20px;
    margin-left: 420px;
    font-size: 20px;
    width: 110px;
    height: 40px;
`

export default Profile