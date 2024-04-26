import { Link } from "react-router-dom";
import styled from "styled-components";




export const CardIssueComponent = styled.section`
width: 100%;

`

export const IssueContentFlex = styled.div`
width: 80%;
margin: 0 auto;
gap: 1.2rem;
justify-content: center;
display: flex;
flex-wrap: wrap;


& > div {
    flex-basis: calc(50% - 0.6rem); /* Tamanho dos itens (50% - margem) */
    margin-bottom: 1.2rem; /* Espaçamento entre os itens */
  }

  & > div:last-child {
    margin-right: auto; /* Alinhar o último item à esquerda */

  }

`

export const IssueContent = styled(Link)`
text-decoration: none;
margin-top: 2rem;
padding: 2rem;
width: 29rem;
height: 16.25rem;
background-color: #112131;
border-radius: 0.7rem;
font-family: "Nunito", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-size: 0.9rem;
border: 2px solid transparent;
transition: all 300ms;

&:hover {
    cursor: pointer;
    transition: all 300ms;
    border: 2px solid #3A536B;
}
& p {
    display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
    width: 98%;
    font-family: "Nunito", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 1.1rem;
    color:#AFC2D4;

}
`

export const IssueCardBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #E7EDF4;
    margin-bottom: 1.5rem;
    
& h1 {
    font-size: 1.3rem;
}
& span {
    padding-bottom: 1.4rem;
    width: 4rem;
    font-family: "Nunito", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 0.8rem;
    color:#AFC2D4;
}
`