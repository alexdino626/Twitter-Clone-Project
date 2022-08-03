import React from "react"
import styled from "styled-components"
import {GiTerror} from "react-icons/gi"

const Error = () => {
    return(
    <Wrapper>
        <Img><GiTerror/></Img>
        <p>Error!!!</p>
        <p>Try referishing the page or <a href="http://localhost:3000">click here</a></p>
    </Wrapper>
    );
};

const Wrapper = styled.div`
font-size: 50px;
padding-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin-left: 50px;
`
const Img = styled.div`
font-size: 100px;
`
export default Error;