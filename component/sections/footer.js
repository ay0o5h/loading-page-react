import React, { Component } from 'react'
import styled from 'styled-components/macro'
const Main= styled.div`
font-family: 'Times New Roman', Times, serif;
text-transform: capitalize;
background-color:#000000;
color:#fff;
 display:flex;
 flex-direction: column;
    justify-content: center;
    align-items: center;
 padding:2rem;

`
const Wrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 2fr 1fr;
grid-gap:2rem;
 width:100%;
 max-width:800px;
`
const Header=styled.h3`
margin:0;
`
const SmailText=styled.p`
margin:0;
`
const Row=styled.div`
display:flex;
 flex-direction: column;
`
const Link=styled.a`
color:#fff;
font-size:.85rem;
text-decoration: none;
&:not(:last-of-type) {
    margin-bottom:.5rem
}
`
const Footer = () => {
    return (
        <Main>
            <Wrapper>
                <Header>Superhero inc. is compant that make people productions</Header>
            <Row>
                <Link href="#"> about us</Link>
                <Link href="#"> our visions</Link>
                <Link href="#"> our prodctions</Link>
                <Link href="#"> contact us</Link>
            </Row>
            <Row>
                <Link href="#"> github</Link>
                <Link href="#"> facebook</Link>
                <Link href="#"> linkedin</Link>
            </Row>
            <SmailText>&copy; company inc.</SmailText>
               <Link href="#"> liegal information</Link>
                <Link href="#"> cookie policy</Link>
            </Wrapper>
        </Main>
    )
}
export default Footer;