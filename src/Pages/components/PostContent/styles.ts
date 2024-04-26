import styled from "styled-components";



export const PostContentComponent = styled.section`
width: 62%;
height: 90vh;
margin: 0 auto;
`


export const PostContentIssue = styled.div`

color: #AFC2D4;
font-family: "Nunito", sans-serif;
font-optical-sizing: auto;

font-size: 1.08rem;
font-style: normal;
line-height: 1.5rem;

& p {
    font-weight: 200;
}
& p > strong {
    margin-right: 0.2rem;
}
`

export const PostContentDynamic = styled.div`
margin-top: 1.7rem;
color: #AFC2D4;
font-family: "Nunito", sans-serif;
font-optical-sizing: auto;
font-style: normal;
font-weight: 200;

& h3 {
    color: #3294F8;
    font-weight: 200;
    text-decoration: underline;
}
`

export const ContentCodeGithub = styled.pre`
background-color: #112131;
margin: 2rem 0 1rem 0;
height: 14rem;
padding: 1rem;
font-size: 1rem;
font-family: "Fira Code", monospace;
font-optical-sizing: auto;
font-weight: 400;
font-style: normal;
color: #AFC2D4;
display: flex;
flex-direction: column;
& code {
    margin-top: 1rem;
    white-space: pre-wrap;
}
`