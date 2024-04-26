import styled from "styled-components";

export const CardBlogComponente = styled.article`
margin: 0 auto;
width: 100%;
z-index: 9999;
transform: translateY(-6rem);
`


export const CardBlogContainer = styled.div`
margin: 0 auto;
width: 70%;
padding: 2rem;
/* height: 13.25rem; */
min-height: 13.25rem;
background-color: #0B1B2B;
box-shadow: 0px 2px 28px 0px #00000033;
border-radius: 0.8rem;
display: flex;
justify-content: center;
gap: 0rem;
align-items: center;

`

export const CardImg = styled.div`
width: 26%;
max-width: 30%;
border-radius: 1rem;

& img {
    border-radius: 0.5rem;
    width: 168px;
    height: 168px;
    object-fit: cover;
}
`

export const CardInformations = styled.div`
font-family: "Nunito", sans-serif;
font-optical-sizing: auto;
font-weight: 400;
font-size: 0.9rem;
color: #AFC2D4;
font-style: normal;

  & > p {
    width: 610px;
    max-width: 910px;
    font-size: 1rem;
    margin: 0.3rem 0rem 0.6rem 0rem;
  }
`

export const TextInformation = styled.div`

display: flex;
color: #E7EDF4;
justify-content: space-between;
font-family: "Nunito", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-size: 0.9rem;
font-style: normal;

& > div {

  color: #3294F8;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
& > div > a {
  text-decoration: none;
  color: #3294F8;
}
`

export const ContentSocialMedia = styled.div`
display: flex;
margin-top: 2rem;
gap: 1rem;
align-items: center;

& span {
  display: flex;
  gap: 0.4rem;
  align-items: center;
    & p {

    }
}

`

