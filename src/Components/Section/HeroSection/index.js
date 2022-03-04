import React from 'react';
import styled  from 'styled-components';

const Hero = styled.section`
height: 40vh;
color: white;
background: black;
display: flex;
justify-content: center;
align-items: center;
div h1{
    font-size: 4rem;
}
div p{
    font-size: 2rem;
    float:right;
}
`
const HeroSection =()=>{
    return(
        <Hero id='welcome-section'>
            <div>
                <h1>Hi, I am Rahul Diwakar</h1>
                <p> a Web Developer</p>
            </div>
        </Hero>
    )
}
export default HeroSection