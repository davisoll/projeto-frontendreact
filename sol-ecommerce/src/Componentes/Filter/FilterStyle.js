import { styled } from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 30vh;
    width: 15vw;
    border: 1px black solid;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    align-content: center;
    justify-content: space-evenly;
    
    .filter-input {
        display: flex;
        width: fit-content;
        margin: 10px
    }

    .filter-text {
        display: flex;
    }
    
`


