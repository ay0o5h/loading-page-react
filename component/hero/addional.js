import React, { Component } from 'react'
import styled from 'styled-components/macro'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers , faTerminal ,faUniversity , faPenAlt, faBuilding, faRobot} from '@fortawesome/free-solid-svg-icons'
 const Main=styled.div`
 text-transform: capitalize;
 font-family: 'Times New Roman', Times, serif;
 `
 const Text= styled.p`
 margin: 0 0 3rem 0;
 font-weight:600;
 text-align:center
 
 `
const Wrapper = styled.div`
  display:flex;
  flex-wrap:wrap
  justify-content: center;
`
const Item = styled.div`
display:flex;
border:1px solid gray;
padding:.5rem;
align-items:center;
border-radius:.375rem;
margin-bottom:1rem;
box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
&:not(:last-of-type){
    margin-right:1rem;
}
`
const Type= styled.p`
margin: 0 0 0 .5rem;
font-size:.85rem;
`
 const Additional = () => {
     return (
         <Main>
             <Text>
                 used by
             </Text>
             <Wrapper>
                 <Item>
                     <FontAwesomeIcon icon={faUsers}/>
                     <Type>regular people</Type>
                 </Item>
                 <Item>
                     <FontAwesomeIcon icon={faTerminal}/>
                     <Type>developer</Type>
                 </Item>
                 <Item>
                     <FontAwesomeIcon icon={faUniversity}/>
                     <Type>student</Type>
                 </Item>
                 <Item>
                     <FontAwesomeIcon icon={faPenAlt}/>
                     <Type>writter</Type>
                 </Item>
                 <Item>
                     <FontAwesomeIcon icon={faBuilding}/>
                     <Type>enterprice</Type>
                 </Item>
                 <Item>
                     <FontAwesomeIcon icon={faRobot}/>
                     <Type>robot</Type>
                 </Item>
             </Wrapper>
         </Main>
     )
 }
 export default Additional