import React, { Component } from 'react'
import styled from 'styled-components/macro'


const Main= styled.div`
 display:flex;
justify-content: center;
 padding:1rem;
 border:1px solid black;
 text-transform: capitalize;

`
const Wrapper = styled.div`
display:flex;

`
const Button = styled.button`
background-color: transparent;
font-family: 'Times New Roman', Times, serif;
   border: 0;
   padding: .5rem .125rem;
   border-radius: .375rem;
   font-size: 1.5rem;
   text-transform: capitalize;
   transition: background-color .25s ease-in;
   &:not(:last-of-type){
     margin-right: 1rem;
   }
   &:hover {
     cursor: pointer;
     background-color: #def2f7;
   }
  }
`
const Header = () => {
    return(
        <Main>
            <Wrapper>
                <Button>feature</Button>
                <Button>pricing</Button>
                <Button>blog</Button>
            </Wrapper>
        </Main>
        )
}
export default Header