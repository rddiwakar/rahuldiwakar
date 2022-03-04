import React from 'react';
import styled from 'styled-components';

const CardPage = styled.div`
padding:1rem;
margin:1rem;
border:1px inset black;
box-shadow: 1 2px 2px gray;
background:white;
h2{
    font-size:3rem;
    text-align:center;
}
& .imageContainer {
    height:22rem;
    width:32rem;
    display:flex;
    justify-content:center;
}
& .image{
    border:1px inset black;
    box-shadow: 1 2px 3px gray;
    height:20rem;
    width:30rem
}
`
function Card ({name,img,link}){
    return (
        <CardPage >
            <a href={link}>
                <div className='imageContainer'>
                    <img src={img} alt={img} className='image' />
                </div>
                <h2>{name}</h2>
            </a>
        </CardPage>
    )
}
export default Card