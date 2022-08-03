import React from "react";
import { FiBookmark, FiGithub, FiHome, FiBell } from "react-icons/fi";
import { ReactComponent as CatLogo} from "../assets/logo.svg"
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";

const Sidebar = () => {
    return(
        <Wrapper>
            <CatLogo/>
            <Link exact to='/'><FiHome/><Span>Home</Span></Link>
            <Link to={`/profile/me`}><FiGithub/><Span>Profile</Span></Link>
            <Link to="/notifications"><FiBell/><Span>Notifications</Span></Link>
            <Link to="/Bookmarks"><FiBookmark/><Span>Bookmarks</Span></Link>
        </Wrapper>
    )
};

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column; 
    gap: 20px; 
    font-size: 30px; 
    font-weight: bold; 
    padding-top: 80px; 
    padding-right: 150px; 
    padding-left: 150px; 
`

const Span = styled.div`
    margin-left: 50px; // 👉🏼 give the icons some space from text
`
const Link = styled(NavLink)`
    text-decoration: none;
    color: hsl(271, 76%, 53%);
    display: flex;
    height: 30px;
    align-items: center;
    padding: 20px 10px;
&:hover {
    background-color: ${COLORS.def};
    color: ${COLORS.abc};
    border-radius: 5px 10px 15px 20px;
};
&.active {
    color: ${COLORS.abc};
}`

export default Sidebar
// <>
// <Wrapper>
//     <Div>
//     <Logo />
//         <Links exact to="/">
//             <div><FiHome />Home</div>
//         </Links>
//         <Links to="/profile">
//             <FiUser />Profile
//         </Links>
//         <Links to="/notifications">
//             <FiBell /> Notifications
//         </Links>
//         <Links to="/bookmarks">
//             <FiBookmark />Bookmarks
//         </Links>
//     </Div>
// </Wrapper>        
// </>
// const WrapperAll = styled.div`
// text-decoration: none;
// color: black;
// font-weight: 600;
// margin-top: 30px;
// `
// const Div = styled.div`
// display: flex;
// flex-direction: column;
// width: 200px;
// height: 100vh;
// gap: 40px;
// font-size: 20px;
// margin-right: 140px;
// font-weight: bold;
// border-right: solid 1px ${COLORS.lightgrey};
// margin-top: none;

// `
// const Links = styled(NavLink)`
// text-decoration: none;
// color: black;
// display: block;

// &.active{
//     color: ${COLORS.primary};
// }

// &:hover {
//     background-color: ${COLORS.lightpurple};
//     color: ${COLORS.darkviolet};
//     border-radius: 20px;
//     width: fit-content;
// }
// `