import styled from 'styled-components'

export const FormStyled = styled.form`
    margin: 0rem 20rem;

    div{
    position: relative;
    width: 500px;
    }
    input{
        border: none;
        background: #6bd425;
        font-size: 1.5rem;
        color: white;
        margin-left: -95px;
        padding: 1rem 3rem;
        border: none;
        width: 100%;
        border-radius: 1rem;
        outline: none;
    }
    svg{
        position: absolute;
        top: 25%;
        left: -90px;
        transform: translate(100%, 50%);
        color: white;
    }
`