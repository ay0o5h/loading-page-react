import React, { Component } from 'react'
import {Main,Wrapper,SubHeader,Header,PlaceholderImage,Text,Item} from './component'
 const LeftSection = () => {
     return (
        <Main>
        <Wrapper row>
        <Item>
          <SubHeader right>
               incrable feature
               </SubHeader> 
               <Header>universal app to mange your task</Header>
          </Item>
            <Item center ml>
            <PlaceholderImage/>
               <Text>you wont need another to do list app
               you wont need another to do list app
               you wont need another to do list app
               you wont need 
               </Text>
            </Item>
          
              
        </Wrapper>
    </Main>
     )
 }
 export default LeftSection