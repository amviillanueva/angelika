import React from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';

const theme = {
    color: {
        title: '#0D3843',
        subTitle: '#375D70',
        content: '#4F88A3',
        line: '#4CA7BC'
    },
    font: {
        mont: "'Montserrat', sans-serif",
        title: "'Playfair Display', serif",
        content: "'Open Sans', sans-serif"
    }
};

export const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Body = styled.div `
    margin: 5% 7%;
`;

export const Li = styled.li `
    border-bottom: ${props => props.active ? "4px solid rgb(76, 167, 188, 50%)" : "4px solid rgb(76, 167, 188, 100%)"};
`;

export const A = styled.a `
    font-family: ${props => props.theme.font['mont']};
    opacity: 1;
    line-height: 0;
    &:hover {
        color: ${props => props.theme.color['title']};
        opacity: .7; 
    }
`;

export const Div = styled.div `
    margin-top: 5%;
`;

export const H1 = styled.h1 `
    color: ${props => props.theme.color['title']};
    font-family: ${props => props.theme.font['title']};
`;

export const P = styled.p `
    color: ${props => props.theme.color['content']};
    font-family: ${props => props.theme.font['content']};
    display: ${props => props.inline ? 'inline-block' : 'block'};
    vertical-align: middle;
`;

export const Sub = styled(P) `
    color: ${props => props.theme.color['subTitle']};
`;

export const I = styled.i `
    color: ${props => props.theme.color['title']};
    font-size: 2rem;
    margin-right: .5rem;
`;

const line = keyframes`
  from {
    border-style: dashed;
  }

  to {
    border-style: dotted;
  }
`;

export const Img = styled.img `
    height: 15rem;
    padding: .8rem;
    border: 5px ${props => props.theme.color['line']}; 
    animation: ${line} 2s linear infinite;
`;