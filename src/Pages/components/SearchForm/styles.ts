import styled from "styled-components";



export const SearchFormComponent = styled.form `


width: 100%;
z-index: 9999;
height: 20vh;
padding-bottom: 2rem;

`

export const SearchContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;


    & div{
        width: 70%;
        justify-content: space-between;
        display: flex;
        align-items: center;
        font-family: "Nunito", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-size: 0.9rem;
        color: #C4D4E3;
        margin-bottom: 1rem;
    }

    & div > p {
        
        color: #7B96B2;
    }

    & input {
        background-color: #040F1A;
        width: 59rem;
        padding: 0.9rem;
        border-radius: 0.2rem;
        border: 1px solid #1C2F41;
        color: white;
    }
    & input::placeholder {
        font-size: 1rem;
        color: #3A536B;
        align-items: center;
        font-family: "Nunito", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
    }
`