import React from 'react';
import styled  from 'styled-components';

const FooterSection = styled.footer`
padding:1rem;
line-height: 3rem;
background:black;
color:white;
text-align:center;
div h1{
    font-size:3rem;
}
div p, blockquote{
    font-size:1.5rem;
}
`
const Footer = () => {
    return (
        <FooterSection id='footer'>
            <div>
                <h1>Let's work together...</h1>
                <blockquote>How do you take your coffee?</blockquote>
            </div>
            <div id="profile-link">
                <p>Email: rahuldiwakar711@gmail.com</p>
            </div>
        </FooterSection>
    )
}
export default Footer