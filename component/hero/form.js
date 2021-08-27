import React, { Component } from 'react'
import styled from 'styled-components/macro'
 const Main=styled.div`
 display:flex;
 margin:3rem 0;
 text-transform: capitalize;
 `
 const Input = styled.input`
 padding:.75rem  2rem;
 border:1px solid #555;
 border-radius: .375rem;
 line-height:1.25;
 `
 const Submit = styled.button`
 margin-left:1rem;
 padding:.75rem  2rem;
 border:1px solid #68d392;
 background-color:#68d392;
 color:#fff;
 font-family: 'Times New Roman', Times, serif;
 border-radius: .375rem;
 line-height:1.25;
 
 `
const Form =() => {
    return (
        <Main>
            <form>
                <Input type="email" placeholder="enter your email"></Input>
                <Submit>send me your email</Submit>
            </form>
        </Main>
    )
}
export default Form