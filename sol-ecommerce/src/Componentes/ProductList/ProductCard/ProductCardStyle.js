import { styled } from "styled-components";


export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 1px;
    width: 17vw;
    height: 50vh;
    margin: 10px;
    box-sizing: border-box;

    
    
    .product-image {
        height: 30vh;
        width: 17vw;
    }

    .product-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p, button {
        margin: 15px;

    }
`