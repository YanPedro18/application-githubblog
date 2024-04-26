import styled from "styled-components";


export const CardPagePostComponent = styled.section`
width: 100%;
height: 25vh;
z-index: 9999;
transform: translateY(-7rem);
`
export const ContentGithub = styled.div`
font-family: "Nunito", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-size: 0.9rem;
font-style: normal;
color: #3294F8;
display: flex;
align-items: center;
justify-content: space-between;


& > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}
& > div > a {
    color: #3294F8;
    text-decoration: none;
}
`

export const CardIssueUser = styled.div`
padding: 2rem;
width: 70%;
height: 13.25rem;
margin: 0 auto;
background-color: #0B1B2B;
box-shadow: 0px 2px 28px 0px #00000033;
border-radius: 0.8rem;
font-family: "Nunito", sans-serif;
font-optical-sizing: auto;
font-weight: 400;
color: #AFC2D4;
font-style: normal;

& > p {
    font-size: 1.5rem;
    color: #E7EDF4;
    margin-top: 1rem;
    
}

`

export const ContentSocialGithub = styled.div`

display: flex;
color: #7B96B2;
font-size: 1.1rem;
gap: 1rem;


& > div {
    margin-top: 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
}
`




// color: #E7EDF4;

