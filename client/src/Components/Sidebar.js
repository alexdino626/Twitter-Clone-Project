import {ReactComponent as Logo} from "../assets/logo.svg";
import { Link, Redirect, NavLink } from "react-router-dom";
import { COLORS } from "../constants";
import {FiHome, FiUser, FiBell, FiBookmark} from "react-icons/fi";
import styled from "styled-components";

const Sidebar = () => {
    return(
        <>
        <Wrapper>
            <Div>
            <Logo />
                <Links exact to="/">
                    <div><FiHome />Home</div>
                </Links>
                <Links to="/profile">
                    <FiUser />Profile
                </Links>
                <Links to="/notifications">
                    <FiBell /> Notifications
                </Links>
                <Links to="/bookmarks">
                    <FiBookmark />Bookmarks
                </Links>
            </Div>
        </Wrapper>        
        </>
    )
}

const Wrapper = styled.div`
text-decoration: none;
color: black;
font-weight: 600;
margin-top: 30px;
`
const Div = styled.div`
display: flex;
flex-direction: column;
width: 200px;
height: 100vh;
gap: 40px;
font-size: 20px;
margin-right: 140px;
font-weight: bold;
border-right: solid 1px ${COLORS.lightgrey};
margin-top: none;

`
const Links = styled(NavLink)`
text-decoration: none;
color: black;
display: block;

&.active{
    color: ${COLORS.primary};
}

&:hover {
    background-color: ${COLORS.lightpurple};
    color: ${COLORS.darkviolet};
    border-radius: 20px;
    width: fit-content;
}
`

export default Sidebar