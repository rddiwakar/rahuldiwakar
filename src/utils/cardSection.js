
import Card from './card';
import styled from 'styled-components'


const CardArea = styled.div`
padding:2rem 4rem;
margin: 1rem 0;
h1{
    font-size:4rem;
    color:skyblue;
    text-decoration:underline;
    margin:1rem 0;
}
& .cardwrapper{
    padding:2rem 4rem;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
}
`
function CardSection({heading, data}) {
    return (
        <CardArea >
            <h1>{heading}</h1>
            <div className='cardwrapper'>
                {
                    data.map((itm, idx) => {
                        return <Card
                            key={idx + itm.link}
                            link={itm.link}
                            img={itm.img}
                            name={itm.name}
                        />
                    })
                }
            </div>
            <hr />
        </CardArea>
    )
}
export default CardSection