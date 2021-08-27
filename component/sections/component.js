import styled from 'styled-components/macro'
export const Main=styled.div`
 display:flex;
 flex-direction: column;
    justify-content: center;
    align-items: center;
 padding:2rem;
 min-height:25vh;
 background-color:#f9fafb;
 font-family: 'Times New Roman', Times, serif;
 text-transform: capitalize;
 `
 export const Wrapper= styled.div`
 display:flex;
 flex-direction: ${(props) => (props.row ? 'row' : 'column' )} ;
    justify-content: center;
    align-items: center;
    width:100%;
    max-width:800px
 `
 export const SubHeader =styled.h4`

 font-weight:400;
 margin:0 0 1rem 0;
 font-size:0.9rem;
 color:gray
 `
 export const Header= styled.h1`
margin:0 0 2rem 0;
`
export const PlaceholderImage =styled.div`
width:400px;
height:200px;
border:1px solid #cdb5c0;
border-radius:.75rem;
box-shadow: 0 5px 10px 0 rgba(0,0,0,0.15);
background-color:#fff;

`
export const Text=styled.p`
margin:2rem 0 0 0;
 font-size:0.9rem;
 color:gray
`
export const Item=styled.div`
display:flex;
 flex-direction: column;
 align-items:${(props) => (props.center ? 'center' : 'flex-start')}
 margin-right: ${(props) => (props.mr ? '2rem' : '0')}
 margin-left: ${(props) => (props.ml ? '2rem' : '0')}
`