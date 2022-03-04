import React from 'react';
import styled  from 'styled-components';

const Heading = styled.div`
    height: 10vh;
    color: black;
    background: red;
    font-size: 3rem;
    & .navbar{
        list-style:none;
        display:flex;
        justify-content:space-around;
        align-items:center;
        height:6.5rem;
    }
`
const Header = () => {
    return (
        <Heading>
            <ul className='navbar'>
                <li><a>Home</a></li>
                <li><a href="#welcome-section">About</a></li>
                <li><a href="#projects">Work</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
        </Heading>
    )
}
export default Header