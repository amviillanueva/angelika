import styled from 'styled-components';

export const Li = styled.li `
    border-bottom: ${props => props.active ? "4px solid rgb(76, 167, 188, 50%)" : "4px solid rgb(76, 167, 188, 100%)"};
`
export const A = styled.a `
    color: #0D3843;
    font-family: 'Montserrat', sans-serif;
    opacity: 1;
    &:hover {
        color: #0D3843;
        opacity: .7; 
    }
`