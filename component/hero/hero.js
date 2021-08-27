import React, { Component } from 'react'
import styled from 'styled-components/macro'
import Form from '../hero/form'
import Additional from './addional'
const Main= styled.div`
 display:flex;
 flex-direction: column;
    justify-content: center;
    align-items: center;
 padding:1rem;
 min-height:50vh

`
const Wrapper = styled.div`
display:flex;
 flex-direction: column;
 align-items: center;
 width:100%;
 max-width:800px;
`
const Slogn = styled.h1`
font-family: 'Times New Roman', Times, serif;
font-weight: 600;
margin: 0;
font-size: 3rem;
max-width: 25rem;
text-align:center;
margin-bottom: 2rem;
text-transform: capitalize;
`
const Text= styled.p`
margin: 0;
font-size: 1.5rem;
text-transform: capitalize;
&:nth-of-type(1){
    margin-bottom: .25rem; 
}
`
const Hero = () => {
   
      return (
        <Main>
       <Wrapper>
          <Slogn>make your task uniqe</Slogn>
          <Text>superhero to do list helps you to solve proplem</Text>
          <Text>simple and easy</Text>
          <Form/>
          <Additional/>
       </Wrapper>
    </Main>
      )
  
}
export default Hero;